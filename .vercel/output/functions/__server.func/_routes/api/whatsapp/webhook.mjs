//#region server/routes/api/whatsapp/webhook.ts
/** Production (Nitro) WhatsApp Cloud API webhook. */
var webhook_default = defineEventHandler(async (event) => {
	const url = getRequestURL(event);
	const method = event.method;
	const mod = await import("../../../_chunks/webhook.server.mjs");
	if (method === "GET") {
		const response = mod.verifyWebhook(url);
		setResponseStatus(event, response.status);
		return await response.text();
	}
	if (method === "POST") {
		const body = await readBody(event);
		const response = await mod.processWebhookPayload(body);
		setResponseStatus(event, response.status);
		return await response.text();
	}
	setResponseStatus(event, 405);
	return "Method Not Allowed";
});
//#endregion
export { webhook_default as default };
