import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { getBrevoConfig } from "@/lib/env.server";
import { startQualification } from "@/lib/whatsapp/qualify.server";

export type LeadInput = {
  name: string; email: string; phone: string; service: string; message: string;
  source: "contact" | "audit"; auditScore?: number; recommendedPlan?: string;
};

async function sendBrevoNotification(lead: LeadInput & { id: string }) {
  const { apiKey, senderEmail, senderName } = getBrevoConfig();
  if (!apiKey) return { ok: false as const, reason: "missing_brevo_key" };
  const html = `<h2>New website lead (${lead.source})</h2>
    <p><strong>Name:</strong> ${lead.name}</p><p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone || "—"}</p><p><strong>Service:</strong> ${lead.service || "—"}</p>
    <p><strong>Message:</strong> ${lead.message || "—"}</p>
    <p><em>WhatsApp qualification started for this lead.</em></p>`;
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json", "api-key": apiKey },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: senderEmail, name: senderName }],
      replyTo: { email: lead.email, name: lead.name },
      subject: `New PRAYAVA lead — ${lead.name}`,
      htmlContent: html,
    }),
  });
  return { ok: res.ok, status: res.status };
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: LeadInput) => data)
  .handler(async ({ data }) => {
    const id = crypto.randomUUID();
    const sql = await getSql();
    await sql`
      INSERT INTO leads (id, name, email, phone, service, message, source, audit_score, recommended_plan, qualification_status, created_at)
      VALUES (${id}, ${data.name}, ${data.email}, ${data.phone || ""}, ${data.service || ""}, ${data.message || ""},
              ${data.source}, ${data.auditScore ?? null}, ${data.recommendedPlan ?? null}, ${"pending"}, NOW())
    `;
    const emailResult = await sendBrevoNotification({ ...data, id }).catch(() => ({ ok: false as const }));
    let waResult: { ok: boolean; reason?: string } = { ok: false, reason: "no_phone" };
    if (data.phone?.trim()) {
      waResult = await startQualification({ phone: data.phone, name: data.name, leadId: id }).catch((e) => ({
        ok: false as const, reason: String(e?.message || e),
      }));
    }
    return { ok: true as const, leadId: id, email: emailResult, whatsapp: waResult };
  });
