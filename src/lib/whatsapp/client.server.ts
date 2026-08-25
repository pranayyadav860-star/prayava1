import { getWaConfig } from "@/lib/env.server";

export function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = "91" + digits;
  if (digits.startsWith("0") && digits.length === 11) digits = "91" + digits.slice(1);
  return digits;
}

async function waFetch(path: string, body: unknown) {
  const { token, phoneNumberId, version } = getWaConfig();
  if (!token || !phoneNumberId) {
    return { ok: false as const, status: 0, error: "missing_whatsapp_config", data: null };
  }
  const res = await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data: unknown = null;
  try { data = await res.json(); } catch { /* empty */ }
  return { ok: res.ok, status: res.status, data, error: res.ok ? null : "api_error" };
}

export async function sendThankYouTemplate(to: string, firstName: string) {
  const { templateName, templateLanguage } = getWaConfig();
  return waFetch("/messages", {
    messaging_product: "whatsapp",
    to: normalizePhone(to),
    type: "template",
    template: {
      name: templateName,
      language: { code: templateLanguage },
      components: [{ type: "body", parameters: [{ type: "text", text: (firstName || "there").slice(0, 40) }] }],
    },
  });
}

export async function sendText(to: string, body: string) {
  return waFetch("/messages", {
    messaging_product: "whatsapp",
    to: normalizePhone(to),
    type: "text",
    text: { preview_url: false, body },
  });
}

export async function sendButtons(to: string, bodyText: string, buttons: { id: string; title: string }[], header?: string) {
  return waFetch("/messages", {
    messaging_product: "whatsapp",
    to: normalizePhone(to),
    type: "interactive",
    interactive: {
      type: "button",
      ...(header ? { header: { type: "text", text: header.slice(0, 60) } } : {}),
      body: { text: bodyText.slice(0, 1024) },
      action: {
        buttons: buttons.slice(0, 3).map((b) => ({
          type: "reply",
          reply: { id: b.id.slice(0, 256), title: b.title.slice(0, 20) },
        })),
      },
    },
  });
}

export async function sendList(
  to: string,
  bodyText: string,
  buttonLabel: string,
  sections: { title: string; rows: { id: string; title: string; description?: string }[] }[],
) {
  return waFetch("/messages", {
    messaging_product: "whatsapp",
    to: normalizePhone(to),
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: bodyText.slice(0, 1024) },
      action: {
        button: buttonLabel.slice(0, 20),
        sections: sections.map((s) => ({
          title: s.title.slice(0, 24),
          rows: s.rows.slice(0, 10).map((r) => ({
            id: r.id.slice(0, 200),
            title: r.title.slice(0, 24),
            ...(r.description ? { description: r.description.slice(0, 72) } : {}),
          })),
        })),
      },
    },
  });
}
