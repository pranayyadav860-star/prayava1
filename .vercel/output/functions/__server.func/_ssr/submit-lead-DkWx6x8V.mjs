import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-lead-DkWx6x8V.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitLead_createServerFn_handler = createServerRpc({
	id: "732df17f42737ebfc2c7e90dec714b5154630e1f6ade57113aa35ebef59f4588",
	name: "submitLead",
	filename: "src/lib/whatsapp/submit-lead.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).validator((data) => data).handler(submitLead_createServerFn_handler, async ({ data }) => {
	const { submitLeadServer } = await import("./leads.server-CRsX3wVy.mjs");
	return submitLeadServer(data);
});
//#endregion
export { submitLead_createServerFn_handler };
