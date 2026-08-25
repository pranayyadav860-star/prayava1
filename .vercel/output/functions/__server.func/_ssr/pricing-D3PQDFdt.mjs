import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Minus, k as Check } from "../_libs/lucide-react.mjs";
import { _ as SiteShell, a as Button, b as cn } from "./router-a7VMTo3K.mjs";
import { a as PricingSection, n as FaqSection } from "./home-sections-DUZAWkhF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-D3PQDFdt.js
var import_jsx_runtime = require_jsx_runtime();
var ROWS = [
	{
		label: "Business website",
		starter: "5 pages",
		growth: "5 pages + landing",
		enterprise: "Custom / app"
	},
	{
		label: "On-page SEO",
		starter: true,
		growth: true,
		enterprise: true
	},
	{
		label: "Google Business Profile",
		starter: true,
		growth: true,
		enterprise: true
	},
	{
		label: "Content strategy",
		starter: false,
		growth: true,
		enterprise: true
	},
	{
		label: "Paid ads management",
		starter: false,
		growth: true,
		enterprise: true
	},
	{
		label: "Social platforms",
		starter: "1",
		growth: "3",
		enterprise: "Full mix"
	},
	{
		label: "AI automation",
		starter: false,
		growth: false,
		enterprise: true
	},
	{
		label: "Dedicated manager",
		starter: false,
		growth: false,
		enterprise: true
	},
	{
		label: "Monthly report",
		starter: true,
		growth: "Dashboard",
		enterprise: "Strategy calls"
	}
];
function Cell({ value }) {
	if (value === true) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto size-4 text-accent" });
	if (value === false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mx-auto size-4 text-line" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-semibold",
		children: value
	});
}
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-wash relative overflow-hidden text-dark-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page relative py-16 text-center lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase",
						children: "Simple pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mx-auto mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]",
						children: ["Start small. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Scale what works."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-dark-muted",
						children: "Every plan is a starting point. We quote in writing after a free audit — no surprise retainers."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, { id: "plans" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] overflow-hidden rounded-xl bg-card text-left shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-4 font-display font-semibold",
								children: "Compare"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-4 text-center font-display",
								children: "Starter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-4 text-center font-display text-primary",
								children: "Growth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-4 text-center font-display",
								children: "Enterprise"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ROWS.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: cn("border-b border-line", i % 2 === 1 && "bg-bg/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 text-sm",
								children: row.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 text-center text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { value: row.starter })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { value: row.growth })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3.5 text-center text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { value: row.enterprise })
							})
						]
					}, row.label)) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Get a custom quote"
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
//#endregion
export { PricingPage as component };
