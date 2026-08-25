import { getWaConfig } from "@/lib/env.server";
import { handleInboundMessage } from "@/lib/whatsapp/qualify.server";

export function verifyWebhook(url: URL): Response {
  const { verifyToken } = getWaConfig();
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  if (mode === "subscribe" && token === verifyToken && challenge) {
    return new Response(challenge, { status: 200, headers: { "content-type": "text/plain" } });
  }
  return new Response("Forbidden", { status: 403 });
}

type WaChangeValue = {
  contacts?: { profile?: { name?: string }; wa_id?: string }[];
  messages?: {
    from: string; id: string; type: string;
    text?: { body?: string };
    interactive?: { button_reply?: { id?: string; title?: string }; list_reply?: { id?: string; title?: string } };
    button?: { payload?: string; text?: string };
  }[];
};

export async function processWebhookPayload(body: unknown): Promise<Response> {
  try {
    const payload = body as { object?: string; entry?: { changes?: { field?: string; value?: WaChangeValue }[] }[] };
    if (payload.object !== "whatsapp_business_account") return new Response("ignored", { status: 200 });
    for (const entry of payload.entry || []) {
      for (const change of entry.changes || []) {
        if (change.field !== "messages") continue;
        const value = change.value;
        if (!value?.messages?.length) continue;
        const profileName = value.contacts?.[0]?.profile?.name;
        for (const msg of value.messages) {
          if (!msg.from) continue;
          let text: string | undefined;
          let buttonId: string | undefined;
          let listId: string | undefined;
          if (msg.type === "text") text = msg.text?.body;
          else if (msg.type === "interactive") {
            buttonId = msg.interactive?.button_reply?.id;
            listId = msg.interactive?.list_reply?.id;
            text = msg.interactive?.button_reply?.title || msg.interactive?.list_reply?.title;
          } else if (msg.type === "button") {
            buttonId = msg.button?.payload;
            text = msg.button?.text;
          }
          await handleInboundMessage({ from: msg.from, text, buttonId, listId, profileName }).catch((err) => {
            console.error("[whatsapp] handleInbound failed", err);
          });
        }
      }
    }
    return new Response("EVENT_RECEIVED", { status: 200 });
  } catch (err) {
    console.error("[whatsapp] webhook error", err);
    return new Response("EVENT_RECEIVED", { status: 200 });
  }
}

export async function handleWebhookRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (request.method === "GET") return verifyWebhook(url);
  if (request.method === "POST") {
    let body: unknown = {};
    try { body = await request.json(); } catch { body = {}; }
    return processWebhookPayload(body);
  }
  return new Response("Method Not Allowed", { status: 405 });
}
