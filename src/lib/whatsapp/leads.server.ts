```ts
import { getSql } from "@/lib/db";
import { getBrevoConfig } from "@/lib/env.server";
import { startQualification } from "@/lib/whatsapp/qualify.server";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: "contact" | "audit";
  auditScore?: number;
  recommendedPlan?: string;
};

type LeadRecord = LeadInput & {
  id: string;
};

async function sendBrevoNotification(lead: LeadRecord) {
  const { apiKey, senderEmail, senderName } = getBrevoConfig();

  const recipientEmail =
    process.env.BREVO_RECIPIENT_EMAIL ||
    "pranayyadav860@gmail.com";

  if (!apiKey) {
    console.error("[lead] BREVO ERROR: API key missing");

    return {
      ok: false as const,
      reason: "missing_brevo_key",
    };
  }

  if (!senderEmail) {
    console.error("[lead] BREVO ERROR: sender email missing");

    return {
      ok: false as const,
      reason: "missing_brevo_sender",
    };
  }

  console.log("[lead] Sending Brevo email", {
    sender: senderEmail,
    recipient: recipientEmail,
  });

  try {
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },

        body: JSON.stringify({
          sender: {
            name: senderName || "PRAYAVA",
            email: senderEmail,
          },

          to: [
            {
              email: recipientEmail,
              name: "PRAYAVA",
            },
          ],

          replyTo: {
            email: lead.email,
            name: lead.name,
          },

          subject: `New PRAYAVA lead — ${lead.name}`,

          htmlContent: `
            <!doctype html>
            <html>
              <body
                style="
                  margin:0;
                  padding:24px;
                  background:#f5f5f5;
                  font-family:Arial,sans-serif;
                  line-height:1.6;
                  color:#222;
                "
              >
                <div
                  style="
                    max-width:640px;
                    margin:auto;
                    background:#ffffff;
                    padding:32px;
                    border-radius:16px;
                  "
                >
                  <h2>New PRAYAVA Website Lead</h2>

                  <p>
                    <strong>Name:</strong>
                    ${escapeHtml(lead.name)}
                  </p>

                  <p>
                    <strong>Email:</strong>
                    ${escapeHtml(lead.email)}
                  </p>

                  <p>
                    <strong>Phone:</strong>
                    ${escapeHtml(lead.phone || "—")}
                  </p>

                  <p>
                    <strong>Service:</strong>
                    ${escapeHtml(lead.service || "—")}
                  </p>

                  <p>
                    <strong>Source:</strong>
                    ${escapeHtml(lead.source)}
                  </p>

                  <p>
                    <strong>Audit Score:</strong>
                    ${lead.auditScore ?? "—"}
                  </p>

                  <p>
                    <strong>Recommended Plan:</strong>
                    ${escapeHtml(
                      lead.recommendedPlan || "—",
                    )}
                  </p>

                  <hr />

                  <h3>Message</h3>

                  <p>
                    ${escapeHtml(lead.message || "—")}
                  </p>

                  <hr />

                  <p style="font-size:13px;color:#666;">
                    <strong>Lead ID:</strong>
                    ${escapeHtml(lead.id)}
                  </p>
                </div>
              </body>
            </html>
          `,
        }),
      },
    );

    const responseText = await response.text().catch(() => "");

    if (!response.ok) {
      console.error("[lead] BREVO ERROR", {
        status: response.status,
        body: responseText,
        sender: senderEmail,
        recipient: recipientEmail,
      });

      return {
        ok: false as const,
        reason: `brevo_http_${response.status}`,
      };
    }

    console.log("[lead] BREVO SUCCESS", {
      status: response.status,
      response: responseText,
      sender: senderEmail,
      recipient: recipientEmail,
    });

    return {
      ok: true as const,
    };
  } catch (error) {
    console.error("[lead] BREVO REQUEST ERROR", error);

    return {
      ok: false as const,
      reason: "brevo_request_failed",
    };
  }
}

export async function submitLeadServer(data: LeadInput) {
  const id = crypto.randomUUID();

  const sql = await getSql();

  await sql`
    INSERT INTO leads (
      id,
      name,
      email,
      phone,
      service,
      message,
      source,
      audit_score,
      recommended_plan,
      qualification_status,
      created_at
    )
    VALUES (
      ${id},
      ${data.name},
      ${data.email},
      ${data.phone || ""},
      ${data.service || ""},
      ${data.message || ""},
      ${data.source},
      ${data.auditScore ?? null},
      ${data.recommendedPlan ?? null},
      ${"pending"},
      NOW()
    )
  `;

  const lead: LeadRecord = {
    ...data,
    id,
  };

  const email = await sendBrevoNotification(lead).catch(
    (error) => {
      console.error(
        "[lead] Unexpected Brevo error",
        error,
      );

      return {
        ok: false as const,
        reason: "brevo_unexpected_error",
      };
    },
  );

  let whatsapp: {
    ok: boolean;
    reason?: string;
  } = {
    ok: false,
    reason: "no_phone",
  };

  if (data.phone?.trim()) {
    try {
      const result = await startQualification({
        phone: data.phone,
        name: data.name,
        leadId: id,
      });

      whatsapp = {
        ok: Boolean(result?.ok),
        ...(result?.ok
          ? {}
          : {
              reason: "whatsapp_failed",
            }),
      };
    } catch (error) {
      console.error(
        "[lead] WhatsApp qualification failed",
        error,
      );

      whatsapp = {
        ok: false,
        reason: "whatsapp_request_failed",
      };
    }
  }

  return {
    ok: true as const,
    leadId: id,
    email,
    whatsapp,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
```
