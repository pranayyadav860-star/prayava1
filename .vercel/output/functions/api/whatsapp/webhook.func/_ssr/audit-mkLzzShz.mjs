import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowRight, P as ArrowLeft, k as Check } from "../_libs/lucide-react.mjs";
import { _ as SiteShell, a as Button, b as cn, x as getService } from "./router-a7VMTo3K.mjs";
import { n as saveAudit, t as LeadForm } from "./lead-form-WpqYld5n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-mkLzzShz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QUESTIONS = [
	{
		id: "website",
		title: "How does your website feel today?",
		subtitle: "Be honest — this is how customers see you first.",
		options: [
			{
				label: "No website yet",
				hint: "People can't find you after hours",
				points: 0,
				rec: ["web-development"]
			},
			{
				label: "Basic or outdated",
				hint: "It exists, but it doesn't convert",
				points: 1,
				rec: ["web-development", "branding-design"]
			},
			{
				label: "Looks fine, weak on leads",
				hint: "Pretty, but the phone isn't ringing",
				points: 2,
				rec: ["digital-marketing", "seo-analytics"]
			},
			{
				label: "Fast, mobile, converting",
				hint: "A solid home base",
				points: 4
			}
		]
	},
	{
		id: "google",
		title: "When someone Googles your service, where do you show up?",
		subtitle: "Most customers never look past page one.",
		options: [
			{
				label: "We're barely on Google",
				points: 0,
				rec: ["seo-analytics"]
			},
			{
				label: "Listed, but not ranking",
				points: 1,
				rec: ["seo-analytics", "google-paid-ads"]
			},
			{
				label: "Page 2–3 for a few keywords",
				points: 2,
				rec: ["seo-analytics", "content-marketing"]
			},
			{
				label: "First page for our main services",
				points: 4
			}
		]
	},
	{
		id: "social",
		title: "How active is your social presence?",
		subtitle: "Consistency beats virality.",
		options: [
			{
				label: "None, or a dead page",
				points: 0,
				rec: ["social-media-marketing"]
			},
			{
				label: "Occasional posts",
				points: 1,
				rec: ["social-media-marketing"]
			},
			{
				label: "Regular, but no real strategy",
				points: 2,
				rec: ["social-media-marketing", "content-marketing"]
			},
			{
				label: "Active, with engagement",
				points: 4
			}
		]
	},
	{
		id: "ads",
		title: "Have you tried paid ads?",
		subtitle: "Ads can fill the gap while SEO compounds.",
		options: [
			{
				label: "Never run ads",
				points: 0,
				rec: ["google-paid-ads"]
			},
			{
				label: "Tried once, then stopped",
				points: 1,
				rec: ["google-paid-ads"]
			},
			{
				label: "Running, without tracking",
				points: 2,
				rec: ["google-paid-ads", "ai-solutions"]
			},
			{
				label: "Optimized campaigns with tracking",
				points: 4
			}
		]
	},
	{
		id: "budget",
		title: "What's a comfortable monthly growth budget?",
		subtitle: "We'll recommend a plan that fits — not a package you don't need.",
		options: [
			{
				label: "Exploring / under ₹10,000",
				points: 1
			},
			{
				label: "₹10,000 – ₹40,000",
				points: 2
			},
			{
				label: "₹40,000 – ₹1,00,000",
				points: 3
			},
			{
				label: "₹1,00,000+",
				points: 4
			}
		]
	},
	{
		id: "goal",
		title: "If we could move one needle this quarter, what would it be?",
		subtitle: "This shapes the first 90 days.",
		options: [
			{
				label: "Launch a proper website",
				points: 1,
				rec: ["web-development", "branding-design"]
			},
			{
				label: "Rank on Google",
				points: 2,
				rec: ["seo-analytics", "content-marketing"]
			},
			{
				label: "More leads and customers",
				points: 3,
				rec: ["digital-marketing", "google-paid-ads"]
			},
			{
				label: "A full growth system",
				points: 4,
				rec: ["digital-marketing", "ai-solutions"]
			}
		]
	}
];
function scoreToPlan(score, budgetPoints) {
	if (budgetPoints >= 4 || score >= 18) return "Enterprise";
	if (budgetPoints >= 2 || score >= 10) return "Growth";
	return "Starter";
}
function AuditWizard() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [result, setResult] = (0, import_react.useState)(null);
	const q = QUESTIONS[step];
	const progress = (step + (result ? 1 : 0)) / QUESTIONS.length * 100;
	const selected = q ? answers[q.id] : void 0;
	const recs = (0, import_react.useMemo)(() => {
		if (!result) return [];
		return result.recommendedServices;
	}, [result]);
	function pick(index) {
		if (!q) return;
		setAnswers((prev) => ({
			...prev,
			[q.id]: index
		}));
	}
	function next() {
		if (!q || selected === void 0) return;
		if (step < QUESTIONS.length - 1) {
			setStep((s) => s + 1);
			return;
		}
		const labels = {};
		const recSet = /* @__PURE__ */ new Set();
		let points = 0;
		for (const question of QUESTIONS) {
			const idx = answers[question.id] ?? 0;
			const opt = question.options[idx];
			labels[question.id] = opt?.label ?? "";
			points += opt?.points ?? 0;
			opt?.rec?.forEach((r) => recSet.add(r));
		}
		const budgetIdx = answers.budget ?? 0;
		const budgetPoints = QUESTIONS[4]?.options[budgetIdx]?.points ?? 1;
		const plan = scoreToPlan(points, budgetPoints);
		const max = QUESTIONS.reduce((n, item) => n + Math.max(...item.options.map((o) => o.points)), 0);
		const payload = {
			score: Math.round(points / max * 100),
			plan,
			answers: labels,
			recommendedServices: [...recSet].slice(0, 4),
			completedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		saveAudit(payload);
		setResult(payload);
	}
	if (result) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1.05fr_0.95fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card p-7 shadow-card sm:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase",
					children: "Your growth score"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-7xl tracking-tight text-fg tabular-nums",
						children: result.score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-3 text-sm text-muted",
						children: "/ 100"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: [
						"Recommended starting plan:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: result.plan
						}),
						". This is a snapshot, not a verdict — a 30-minute call will refine it."
					]
				}),
				recs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-wide text-muted uppercase",
						children: "Fastest levers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: recs.map((slug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug },
							className: "rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary",
							children: getService(slug)?.name ?? slug
						}, slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pricing",
							children: [
								"See ",
								result.plan,
								" plan"
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							setResult(null);
							setStep(0);
							setAnswers({});
						},
						children: "Retake audit"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card p-7 shadow-card sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Get the full readout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-5 text-sm text-muted",
					children: "Leave your details and we'll send a plain-language plan based on this score."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					compact: true,
					source: "audit",
					auditScore: result.score,
					recommendedPlan: result.plan,
					defaultService: result.plan === "Starter" ? "Website Design & Development" : result.plan === "Enterprise" ? "Not sure yet — need advice" : "SEO & Google Ranking",
					defaultMessage: `Growth audit score: ${result.score}/100. Recommended plan: ${result.plan}.`
				})
			]
		})]
	});
	if (!q) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-card p-6 shadow-card sm:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 h-1.5 overflow-hidden rounded-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
					style: { width: `${Math.max(progress, 8)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] font-extrabold tracking-[0.16em] text-primary uppercase",
				children: [
					"Step ",
					step + 1,
					" of ",
					QUESTIONS.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)]",
				children: q.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: q.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid gap-3",
				children: q.options.map((opt, i) => {
					const on = selected === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => pick(i),
						className: cn("flex min-h-14 items-start gap-3 rounded-xl border px-4 py-4 text-left transition-[border-color,background-color,box-shadow] duration-150", on ? "border-primary bg-primary-soft shadow-card" : "border-line bg-bg hover:border-primary/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border", on ? "border-primary bg-primary text-dark-fg" : "border-line"),
							children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3",
								strokeWidth: 3
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold",
							children: opt.label
						}), opt.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-xs text-muted",
							children: opt.hint
						})] })]
					}, opt.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					disabled: step === 0,
					onClick: () => setStep((s) => Math.max(0, s - 1)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: next,
					disabled: selected === void 0,
					children: [step === QUESTIONS.length - 1 ? "See my score" : "Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})
		]
	});
}
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-wash relative overflow-hidden text-dark-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page relative py-16 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase",
					children: "2-minute growth audit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]",
					children: [
						"See where growth is leaking —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "then plug it."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-dark-muted",
					children: "Six questions. A score out of 100. A recommended plan. No email required to see your result."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditWizard, {})
		})
	})] });
}
//#endregion
export { AuditPage as component };
