import { getSql } from "@/lib/db";
import { getBrevoConfig } from "@/lib/env.server";
import { normalizePhone, sendList, sendText, sendThankYouTemplate } from "@/lib/whatsapp/client.server";

export type QualStep = "start" | "service" | "budget" | "timeline" | "business" | "done";
export type QualAnswers = { service?: string; budget?: string; timeline?: string; business?: string };

const SERVICE_OPTIONS = [
  { id: "svc_web", title: "Website / App", description: "Design & development" },
  { id: "svc_seo", title: "SEO & Google", description: "Rank & get found" },
  { id: "svc_ads", title: "Ads & Campaigns", description: "Paid growth" },
  { id: "svc_social", title: "Social Media", description: "Content & engagement" },
  { id: "svc_brand", title: "Branding", description: "Logo & identity" },
  { id: "svc_ai", title: "AI Solutions", description: "Chatbots & automation" },
  { id: "svc_unsure", title: "Not sure yet", description: "Need advice" },
];
const BUDGET_OPTIONS = [
  { id: "bud_10", title: "Under ₹10k" },
  { id: "bud_25", title: "₹10k – ₹25k" },
  { id: "bud_50", title: "₹25k – ₹50k" },
  { id: "bud_100", title: "₹50k – ₹1L" },
  { id: "bud_100p", title: "₹1L+" },
];
const TIMELINE_OPTIONS = [
  { id: "time_asap", title: "ASAP / this week" },
  { id: "time_month", title: "Within a month" },
  { id: "time_quarter", title: "1–3 months" },
  { id: "time_explore", title: "Just exploring" },
];
const BUSINESS_OPTIONS = [
  { id: "biz_solo", title: "Solo / freelancer" },
  { id: "biz_small", title: "Small business" },
  { id: "biz_agency", title: "Agency / brand" },
  { id: "biz_startup", title: "Startup" },
];

export function scoreAnswers(a: QualAnswers): number {
  let score = 20;
  if (a.service && a.service !== "svc_unsure") score += 15;
  if (a.service === "svc_unsure") score += 5;
  const budgetMap: Record<string, number> = { bud_10: 5, bud_25: 15, bud_50: 25, bud_100: 30, bud_100p: 35 };
  score += budgetMap[a.budget || ""] ?? 0;
  const timeMap: Record<string, number> = { time_asap: 25, time_month: 20, time_quarter: 10, time_explore: 5 };
  score += timeMap[a.timeline || ""] ?? 0;
  if (a.business) score += 10;
  return Math.min(100, score);
}

export function isHotLead(score: number) { return score >= 70; }
export function isWarmLead(score: number) { return score >= 45 && score < 70; }

function labelOf(options: { id: string; title: string }[], id?: string) {
  return options.find((o) => o.id === id)?.title || id || "—";
}

async function upsertSession(opts: {
  phone: string; leadId?: string | null; name?: string; step: QualStep;
  answers?: QualAnswers; score?: number; status?: string;
}) {
  const sql = await getSql();
  const phone = normalizePhone(opts.phone);
  const answersJson = JSON.stringify(opts.answers || {});
  await sql.query(
    `INSERT INTO wa_sessions (phone, lead_id, name, step, answers, score, status, updated_at)
     VALUES ($1, $2, $3, $4, $5::jsonb, $6, $7, NOW())
     ON CONFLICT (phone) DO UPDATE SET
       lead_id = COALESCE(EXCLUDED.lead_id, wa_sessions.lead_id),
       name = CASE WHEN EXCLUDED.name = '' THEN wa_sessions.name ELSE EXCLUDED.name END,
       step = EXCLUDED.step, answers = EXCLUDED.answers, score = EXCLUDED.score,
       status = EXCLUDED.status, updated_at = NOW()`,
    [phone, opts.leadId ?? null, opts.name || "", opts.step, answersJson, opts.score ?? 0, opts.status || "active"],
  );
}

async function getSession(phone: string) {
  const sql = await getSql();
  const rows = await sql<{
    phone: string; lead_id: string | null; name: string; step: string;
    answers: QualAnswers | string; score: number; status: string;
  }>`SELECT phone, lead_id, name, step, answers, score, status FROM wa_sessions WHERE phone = ${normalizePhone(phone)} LIMIT 1`;
  if (!rows[0]) return null;
  const row = rows[0];
  const answers = typeof row.answers === "string" ? (JSON.parse(row.answers) as QualAnswers) : row.answers || {};
  return { ...row, answers, step: row.step as QualStep };
}

async function notifyTeamQualified(opts: {
  name: string; phone: string; answers: QualAnswers; score: number; leadId?: string | null;
}) {
  const { apiKey, senderEmail, senderName } = getBrevoConfig();
  if (!apiKey) return;
  const tier = isHotLead(opts.score) ? "🔥 HOT" : isWarmLead(opts.score) ? "🟡 WARM" : "🔵 NURTURE";
  const html = `<h2>${tier} lead qualified via WhatsApp</h2>
    <p><strong>Name:</strong> ${opts.name || "—"}</p>
    <p><strong>Phone:</strong> ${opts.phone}</p>
    <p><strong>Score:</strong> ${opts.score}/100</p>
    <p><strong>Service:</strong> ${labelOf(SERVICE_OPTIONS, opts.answers.service)}</p>
    <p><strong>Budget:</strong> ${labelOf(BUDGET_OPTIONS, opts.answers.budget)}</p>
    <p><strong>Timeline:</strong> ${labelOf(TIMELINE_OPTIONS, opts.answers.timeline)}</p>
    <p><strong>Business:</strong> ${labelOf(BUSINESS_OPTIONS, opts.answers.business)}</p>`;
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json", "api-key": apiKey },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: senderEmail, name: senderName }],
      subject: `${tier} WhatsApp lead — ${opts.name || opts.phone} (${opts.score})`,
      htmlContent: html,
    }),
  }).catch(() => null);
}

async function markLeadQualified(leadId: string | null | undefined, score: number) {
  if (!leadId) return;
  const sql = await getSql();
  const status = isHotLead(score) ? "hot" : isWarmLead(score) ? "warm" : "nurture";
  await sql`UPDATE leads SET qualification_status = ${status}, qualification_score = ${score} WHERE id = ${leadId}`;
}

export async function startQualification(opts: { phone: string; name: string; leadId?: string }) {
  const phone = normalizePhone(opts.phone);
  if (!phone) return { ok: false as const, reason: "no_phone" };
  const firstName = opts.name.split(/\s+/)[0] || opts.name || "there";
  const tpl = await sendThankYouTemplate(phone, firstName);
  await upsertSession({ phone, leadId: opts.leadId, name: opts.name, step: "service", answers: {}, score: 0, status: "active" });
  await sendList(
    phone,
    `Hi ${firstName}! 👋 Thanks for reaching out to PRAYAVA.\n\nTo match you with the right plan, which service are you most interested in?`,
    "Choose service",
    [{ title: "Services", rows: SERVICE_OPTIONS }],
  ).catch(() => null);
  return { ok: true as const, template: tpl };
}

async function askBudget(phone: string) {
  await sendList(phone, "Got it. Roughly what budget range works for you?", "Select budget", [{ title: "Budget", rows: BUDGET_OPTIONS }]);
}
async function askTimeline(phone: string) {
  await sendList(phone, "When would you like to get started?", "Select timeline", [{ title: "Timeline", rows: TIMELINE_OPTIONS }]);
}
async function askBusiness(phone: string) {
  await sendList(phone, "Last one — what best describes your business?", "Select type", [{ title: "Business type", rows: BUSINESS_OPTIONS }]);
}

async function finishQualification(
  phone: string,
  session: NonNullable<Awaited<ReturnType<typeof getSession>>>,
  answers: QualAnswers,
) {
  const score = scoreAnswers(answers);
  const name = session.name || "there";
  await upsertSession({ phone, leadId: session.lead_id, name: session.name, step: "done", answers, score, status: "completed" });
  await markLeadQualified(session.lead_id, score);
  await notifyTeamQualified({ name: session.name, phone, answers, score, leadId: session.lead_id });
  let message: string;
  if (isHotLead(score)) {
    message = `Perfect, ${name}! ✅ You're a strong fit.\n\nA PRAYAVA strategist will reach out within a few hours with a tailored plan.\n\nMeanwhile, reply with any details about your project — we're listening.`;
  } else if (isWarmLead(score)) {
    message = `Thanks ${name}! ✅ We've got your details.\n\nOur team will review and share recommended next steps within 1 business day.\n\nQuestions? Just reply here.`;
  } else {
    message = `Thanks for sharing, ${name}. ✅\n\nWe'll send you useful resources and check in when the timing is right.\n\nYou can always reply here if priorities change.`;
  }
  await sendText(phone, message);
}

export async function handleInboundMessage(opts: {
  from: string; text?: string; buttonId?: string; listId?: string; profileName?: string;
}) {
  const phone = normalizePhone(opts.from);
  const replyId = opts.buttonId || opts.listId || "";
  const text = (opts.text || "").trim().toLowerCase();
  let session = await getSession(phone);

  if (!session || session.status === "completed") {
    const name = opts.profileName || "";
    await upsertSession({ phone, name, step: "service", answers: {}, status: "active" });
    await sendList(phone, `Hi${name ? ` ${name.split(" ")[0]}` : ""}! 👋 Welcome to PRAYAVA.\n\nWhich service are you interested in?`, "Choose service", [{ title: "Services", rows: SERVICE_OPTIONS }]);
    return { ok: true, step: "service" };
  }

  const answers = { ...session.answers };
  if (["restart", "start", "hi", "hello", "hey"].includes(text) && !replyId) {
    await upsertSession({ phone, name: session.name, leadId: session.lead_id, step: "service", answers: {}, score: 0, status: "active" });
    await sendList(phone, `Let's start fresh. Which service are you most interested in?`, "Choose service", [{ title: "Services", rows: SERVICE_OPTIONS }]);
    return { ok: true, step: "service" };
  }

  switch (session.step) {
    case "start":
    case "service": {
      const valid = SERVICE_OPTIONS.some((o) => o.id === replyId);
      if (!valid && !text) {
        await sendList(phone, "Please pick a service from the list 👇", "Choose service", [{ title: "Services", rows: SERVICE_OPTIONS }]);
        return { ok: true, step: "service" };
      }
      answers.service = valid ? replyId : SERVICE_OPTIONS.find((o) => o.title.toLowerCase().includes(text))?.id || "svc_unsure";
      await upsertSession({ phone, name: session.name, leadId: session.lead_id, step: "budget", answers, status: "active" });
      await askBudget(phone);
      return { ok: true, step: "budget" };
    }
    case "budget": {
      if (!BUDGET_OPTIONS.some((o) => o.id === replyId)) {
        await askBudget(phone);
        return { ok: true, step: "budget" };
      }
      answers.budget = replyId;
      await upsertSession({ phone, name: session.name, leadId: session.lead_id, step: "timeline", answers, status: "active" });
      await askTimeline(phone);
      return { ok: true, step: "timeline" };
    }
    case "timeline": {
      if (!TIMELINE_OPTIONS.some((o) => o.id === replyId)) {
        await askTimeline(phone);
        return { ok: true, step: "timeline" };
      }
      answers.timeline = replyId;
      await upsertSession({ phone, name: session.name, leadId: session.lead_id, step: "business", answers, status: "active" });
      await askBusiness(phone);
      return { ok: true, step: "business" };
    }
    case "business": {
      if (!BUSINESS_OPTIONS.some((o) => o.id === replyId)) {
        await askBusiness(phone);
        return { ok: true, step: "business" };
      }
      answers.business = replyId;
      await finishQualification(phone, session, answers);
      return { ok: true, step: "done" };
    }
    default: {
      await sendText(phone, "We've already captured your details. A team member will be in touch soon.\n\nReply *restart* to update your answers.");
      return { ok: true, step: "done" };
    }
  }
}
