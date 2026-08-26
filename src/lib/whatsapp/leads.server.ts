import { getBrevoConfig } from "@/lib/env.server";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendLeadEmails(
  lead: LeadInput,
) {
  const {
    apiKey,
    senderEmail,
    senderName,
  } = getBrevoConfig();

  const recipientEmail =
    process.env.BREVO_RECIPIENT_EMAIL ||
    "pranayyadav860@gmail.com";

  if (!apiKey) {
    console.error(
      "[PRAYAVA] BREVO_API_KEY is missing.",
    );

    return {
      ok: false,
      error: "BREVO_API_KEY is missing",
    };
  }

  if (!senderEmail) {
    console.error(
      "[PRAYAVA] BREVO_SENDER_EMAIL is missing.",
    );

    return {
      ok: false,
      error: "BREVO_SENDER_EMAIL is missing",
    };
  }

  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": apiKey,
  };

  /*
   * -------------------------------------------------------
   * CUSTOMER THANK-YOU EMAIL
   * -------------------------------------------------------
   */

  const customerEmail = {
    sender: {
      name: senderName || "PRAYAVA",
      email: senderEmail,
    },

    to: [
      {
        email: lead.email,
        name: lead.name,
      },
    ],

    replyTo: {
      email: senderEmail,
      name: senderName || "PRAYAVA",
    },

    subject:
      "Thank you for contacting PRAYAVA",

    htmlContent: `
      <!doctype html>
      <html>
        <body
          style="
            margin:0;
            padding:24px;
            background:#f5f5f5;
            font-family:Arial,Helvetica,sans-serif;
            color:#222;
            line-height:1.6;
          "
        >
          <div
            style="
              max-width:620px;
              margin:0 auto;
              background:#ffffff;
              padding:32px;
              border-radius:16px;
            "
          >
            <h2>
              Thank you for contacting PRAYAVA 👋
            </h2>

            <p>
              Hi ${escapeHtml(lead.name)},
            </p>

            <p>
              Thank you for reaching out to PRAYAVA.
              We have successfully received your enquiry.
            </p>

            <div
              style="
                margin:24px 0;
                padding:18px;
                background:#f7f5fb;
                border-radius:12px;
              "
            >
              <p style="margin:0 0 8px;">
                <strong>Your enquiry</strong>
              </p>

              <p style="margin:5px 0;">
                <strong>Service:</strong>
                ${escapeHtml(
                  lead.service || "Not specified",
                )}
              </p>

              <p style="margin:5px 0;">
                <strong>Message:</strong>
                ${escapeHtml(
                  lead.message || "Not provided",
                )}
              </p>
            </div>

            <p>
              Our team will review your requirements
              and get back to you within 24 hours.
            </p>

            <p>
              We look forward to helping you grow
              your business.
            </p>

            <p>
              Best regards,<br />
              <strong>Team PRAYAVA</strong>
            </p>
          </div>
        </body>
      </html>
    `,
  };

  /*
   * -------------------------------------------------------
   * YOUR NEW LEAD EMAIL
   * -------------------------------------------------------
   */

  const adminEmail = {
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

    subject:
      `New PRAYAVA Lead — ${lead.name}`,

    htmlContent: `
      <!doctype html>
      <html>
        <body
          style="
            margin:0;
            padding:24px;
            background:#f5f5f5;
            font-family:Arial,Helvetica,sans-serif;
            color:#222;
            line-height:1.6;
          "
        >
          <div
            style="
              max-width:620px;
              margin:0 auto;
              background:#ffffff;
              padding:32px;
              border-radius:16px;
            "
          >
            <h2>
              New PRAYAVA Website Lead
            </h2>

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
              ${escapeHtml(lead.phone)}
            </p>

            <p>
              <strong>Service:</strong>
              ${escapeHtml(
                lead.service || "Not specified",
              )}
            </p>

            <p>
              <strong>Source:</strong>
              ${escapeHtml(lead.source)}
            </p>

            ${
              lead.auditScore !== undefined
                ? `
                  <p>
                    <strong>Audit Score:</strong>
                    ${lead.auditScore}
                  </p>
                `
                : ""
            }

            ${
              lead.recommendedPlan
                ? `
                  <p>
                    <strong>Recommended Plan:</strong>
                    ${escapeHtml(
                      lead.recommendedPlan,
                    )}
                  </p>
                `
                : ""
            }

            <hr />

            <h3>
              Message
            </h3>

            <p>
              ${escapeHtml(
                lead.message || "No message provided",
              )}
            </p>
          </div>
        </body>
      </html>
    `,
  };

  try {
    /*
     * Send customer email
     */
    const customerResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers,
        body: JSON.stringify(customerEmail),
      },
    );

    const customerText =
      await customerResponse.text();

    if (!customerResponse.ok) {
      console.error(
        "[PRAYAVA] Customer email failed:",
        customerResponse.status,
        customerText,
      );

      return {
        ok: false,
        error:
          "Customer email could not be sent",
      };
    }

    /*
     * Send admin email
     */
    const adminResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers,
        body: JSON.stringify(adminEmail),
      },
    );

    const adminText =
      await adminResponse.text();

    if (!adminResponse.ok) {
      console.error(
        "[PRAYAVA] Admin email failed:",
        adminResponse.status,
        adminText,
      );

      return {
        ok: false,
        error:
          "Lead notification could not be sent",
      };
    }

    console.log(
      "[PRAYAVA] Both emails sent successfully.",
    );

    return {
      ok: true,
      customerEmailSent: true,
      adminEmailSent: true,
    };
  } catch (error) {
    console.error(
      "[PRAYAVA] Brevo request failed:",
      error,
    );

    return {
      ok: false,
      error: "Email service request failed",
    };
  }
}