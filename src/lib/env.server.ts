import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

let loaded = false;

export function ensureEnv() {
  if (loaded) return;
  loaded = true;
  try {
    const path = join(process.cwd(), ".env");
    if (!existsSync(path)) return;
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i < 0) continue;
      const key = t.slice(0, i).trim();
      const val = t.slice(i + 1).trim();
      if (key && process.env[key] === undefined) process.env[key] = val;
    }
  } catch { /* ignore */ }
}

export function getWaConfig() {
  ensureEnv();
  return {
    token: process.env.WHATSAPP_TOKEN || "",
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
    version: process.env.WHATSAPP_API_VERSION || "v26.0",
    templateName: process.env.WHATSAPP_TEMPLATE_NAME || "prayava_lead_thank_you",
    templateLanguage: process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en",
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN || "prayava_webhook_verify_2026",
  };
}

export function getBrevoConfig() {
  ensureEnv();
  return {
    apiKey: process.env.BREVO_API_KEY || "",
    senderEmail: process.env.BREVO_SENDER_EMAIL || "hello@prayava.co",
    senderName: process.env.BREVO_SENDER_NAME || "PRAYAVA",
  };
}
