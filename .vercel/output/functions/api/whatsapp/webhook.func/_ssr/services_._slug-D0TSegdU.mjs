import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowRight, P as ArrowLeft, k as Check } from "../_libs/lucide-react.mjs";
import { _ as SiteShell, a as Button, f as SERVICES, n as Route } from "./router-a7VMTo3K.mjs";
import { r as ServiceGlyph } from "./service-icon-CU6XD3Ve.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services_._slug-D0TSegdU.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
	const { service } = Route.useLoaderData();
	const idx = SERVICES.findIndex((s) => s.slug === service.slug);
	const prev = idx > 0 ? SERVICES[idx - 1] : SERVICES[SERVICES.length - 1];
	const next = idx < SERVICES.length - 1 ? SERVICES[idx + 1] : SERVICES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-wash relative overflow-hidden text-dark-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page relative py-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-dark-muted hover:text-dark-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All services"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceGlyph, {
							name: service.icon,
							tone: "dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-extrabold tracking-[0.16em] text-accent uppercase",
							children: [
								service.number,
								" · ",
								service.badge
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]",
						children: service.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-dark-muted",
						children: service.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { service: service.name },
								children: "Get a free quote"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "darkOutline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/audit",
								children: "Take the growth audit"
							})
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page grid gap-10 lg:grid-cols-[1fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "What's included"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: service.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-xl bg-card px-4 py-4 text-sm shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }), f]
					}, f))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl bg-primary-soft p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-extrabold tracking-[0.16em] text-primary uppercase",
							children: service.lever
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl",
							children: service.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Pair this with other levers in the growth stack, or start here and expand as results come in."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { service: service.name },
								children: "Talk to PRAYAVA"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page flex flex-col gap-3 sm:flex-row",
				children: [prev && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: prev.slug },
					className: "flex flex-1 items-center justify-between rounded-xl bg-card px-5 py-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[11px] font-bold tracking-wide text-muted uppercase",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: prev.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 text-muted" })]
				}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: next.slug },
					className: "flex flex-1 items-center justify-between rounded-xl bg-card px-5 py-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[11px] font-bold tracking-wide text-muted uppercase",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: next.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted" })]
				})]
			})
		})
	] });
}
//#endregion
export { ServiceDetailPage as component };
