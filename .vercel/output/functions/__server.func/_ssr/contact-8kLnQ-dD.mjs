import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, i as Route$3, m as SITE } from "./router-a7VMTo3K.mjs";
import { t as LeadForm } from "./lead-form-WpqYld5n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-8kLnQ-dD.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { plan, service } = Route$3.useSearch();
	const defaultService = service ? matchService(service) : plan ? "Not sure yet — need advice" : void 0;
	const defaultMessage = plan ? `I'm interested in the ${plan} plan.` : service ? `I'd like to talk about ${service}.` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-wash relative overflow-hidden text-dark-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page relative py-16 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase",
					children: "Free growth audit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]",
					children: "Tell us what you're building."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-dark-muted",
					children: "A 30-minute strategy call. No pressure. We reply within 24 hours."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "What happens next"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-4",
					children: [
						"You send a few details about the business.",
						"We review your website, search, and current marketing.",
						"You get a plain-language plan with the fastest wins."
					].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft font-display text-sm text-primary",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-1.5 text-sm leading-relaxed text-muted",
							children: step
						})]
					}, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted",
					children: [
						"Prefer email?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-primary",
							href: `mailto:${SITE.email}`,
							children: SITE.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						SITE.city
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card p-6 shadow-card sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					defaultService,
					defaultMessage
				})
			})]
		})
	})] });
}
function matchService(name) {
	return {
		"Digital Marketing": "Not sure yet — need advice",
		"Web Development": "Website Design & Development",
		"Branding & Design": "Branding & Design",
		"SEO & Analytics": "SEO & Google Ranking",
		"Social Media Marketing": "Social Media Marketing",
		"AI Solutions": "AI Solutions",
		"Google & Paid Ads": "Google & Paid Ads",
		"Content Marketing": "SEO & Google Ranking"
	}[name] ?? "Not sure yet — need advice";
}
//#endregion
export { ContactPage as component };
