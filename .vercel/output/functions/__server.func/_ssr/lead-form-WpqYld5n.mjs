import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as CircleCheck, g as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as Button, b as cn, m as SITE, p as SERVICE_OPTIONS } from "./router-a7VMTo3K.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-form-WpqYld5n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LEADS_KEY = "prayava-leads";
var AUDIT_KEY = "prayava-audit";
function readJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function saveLead(lead) {
	const full = {
		...lead,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const existing = readJson(LEADS_KEY, []);
	existing.unshift(full);
	window.localStorage.setItem(LEADS_KEY, JSON.stringify(existing.slice(0, 50)));
	return full;
}
function saveAudit(result) {
	window.localStorage.setItem(AUDIT_KEY, JSON.stringify(result));
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitLead = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("732df17f42737ebfc2c7e90dec714b5154630e1f6ade57113aa35ebef59f4588"));
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-line bg-card px-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/20", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full rounded-md border border-line bg-card px-3.5 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/20", className),
		...props
	});
}
function SelectField({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-11 w-full rounded-md border border-line bg-card px-3.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 focus:border-primary focus:ring-2 focus:ring-ring/20", className),
		...props,
		children
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-xs font-semibold text-fg", className),
		...props
	});
}
function LeadForm({ defaultService, defaultMessage, source = "contact", auditScore, recommendedPlan, compact = false }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [waStarted, setWaStarted] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") ?? "").trim();
		const email = String(fd.get("email") ?? "").trim();
		const phone = String(fd.get("phone") ?? "").trim();
		const service = String(fd.get("service") ?? "");
		const message = String(fd.get("message") ?? "").trim();
		if (!name || !email || !phone) return;
		setBusy(true);
		const payload = {
			name,
			email,
			phone,
			service,
			message,
			source,
			auditScore,
			recommendedPlan
		};
		saveLead(payload);
		try {
			const result = await submitLead({ data: payload });
			setWaStarted(Boolean(result?.whatsapp && "ok" in result.whatsapp && result.whatsapp.ok));
		} catch {
			setWaStarted(false);
		}
		setBusy(false);
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center px-4 py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 grid size-14 place-items-center rounded-full bg-accent-soft text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "size-7",
					strokeWidth: 1.8
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: "Thank you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted",
				children: "We have your details and will reach out within 24 hours with a free growth plan."
			}),
			waStarted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex max-w-sm items-start gap-2 rounded-xl bg-primary-soft px-4 py-3 text-left text-sm text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Check WhatsApp — we just sent a short message so we can qualify your needs in under a minute." })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "flex flex-col gap-3.5",
		children: [
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl tracking-tight",
				children: "Get your free growth plan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Fill this in and our team will reach out with a plan tailored to your business. We'll also message you on WhatsApp to qualify your needs."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "lf-name",
				children: "Full name"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "lf-name",
				name: "name",
				placeholder: "Your name",
				required: true,
				autoComplete: "name"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "lf-email",
				children: "Email address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "lf-email",
				name: "email",
				type: "email",
				placeholder: "you@example.com",
				required: true,
				autoComplete: "email"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: "lf-phone",
					children: "WhatsApp number"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "lf-phone",
					name: "phone",
					type: "tel",
					placeholder: "+91 98765 43210",
					required: true,
					autoComplete: "tel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] text-muted",
					children: "We'll send a quick qualification chat on this number."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "lf-service",
				children: "What do you need help with?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
				id: "lf-service",
				name: "service",
				defaultValue: defaultService ?? SERVICE_OPTIONS[0],
				children: SERVICE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: opt,
					children: opt
				}, opt))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "lf-msg",
				children: "Tell us about your business"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "lf-msg",
				name: "message",
				placeholder: "A short line about your business and goals",
				defaultValue: defaultMessage
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				disabled: busy,
				className: "mt-1 w-full",
				children: busy ? "Sending…" : "Send my details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-[11px] text-muted",
				children: [
					"We respect your privacy. Prefer email?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-primary underline-offset-2 hover:underline",
						href: `mailto:${SITE.email}`,
						children: SITE.email
					})
				]
			})
		]
	});
}
//#endregion
export { saveAudit as n, LeadForm as t };
