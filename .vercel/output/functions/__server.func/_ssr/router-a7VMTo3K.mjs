import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as notFound, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as ArrowUpRight, N as ArrowRight, _ as Menu, a as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-CojGqsEZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "PRAYAVA",
	tagline: "Build. Grow. Together.",
	description: "PRAYAVA is a digital marketing agency that builds smart websites, runs result-driven marketing campaigns, and helps businesses show up on Google.",
	email: "hello@prayava.co",
	city: "Hyderabad, Telangana, India",
	url: "https://prayava.co"
};
var SERVICES = [
	{
		slug: "digital-marketing",
		number: "01",
		name: "Digital Marketing",
		lever: "Attract",
		badge: "Core Growth",
		summary: "Targeted campaigns that bring in more leads, calls, and paying customers — built around your budget.",
		description: "We combine channels, messaging and offers into a single strategy so every rupee you spend is working toward a real business goal, not just impressions.",
		features: [
			"Custom growth strategy for your industry",
			"Multi-channel campaign planning",
			"Lead generation focused on calls and enquiries",
			"Monthly reporting in plain language",
			"Budget-friendly plans that scale with you",
			"A dedicated account manager"
		],
		icon: "megaphone",
		tone: "large",
		image: "/images/services/digital-marketing.jpg"
	},
	{
		slug: "web-development",
		number: "02",
		name: "Web Development",
		lever: "Convert",
		badge: "Build & Convert",
		summary: "Fast, mobile-responsive websites designed to convert visitors into customers.",
		description: "Whether you need a simple 5-page business site or a custom web application, we design and build it to load quickly, look great on every screen, and make it easy for people to contact you.",
		features: [
			"Mobile-first, responsive design",
			"Fast page-load speed and clean code",
			"SEO-friendly structure from day one",
			"Custom web and app development",
			"Easy-to-update content management",
			"Secure hosting and launch support"
		],
		icon: "monitor",
		tone: "default",
		image: "/images/services/web-development.jpg"
	},
	{
		slug: "branding-design",
		number: "03",
		name: "Branding & Design",
		lever: "Position",
		badge: "Brand System",
		summary: "Logos, visual identity, and design systems that make your business memorable.",
		description: "Good branding isn't just a logo — it's how customers recognize and remember you across your website, social media, packaging and print.",
		features: [
			"Logo design and visual identity",
			"Brand colour palette and typography",
			"Design systems for consistency",
			"Marketing collateral and templates",
			"Packaging and print-ready design",
			"Guidelines your team can reuse"
		],
		icon: "palette",
		tone: "default",
		image: "/images/services/branding-design.jpg"
	},
	{
		slug: "seo-analytics",
		number: "04",
		name: "SEO & Analytics",
		lever: "Get Found",
		badge: "Organic Growth",
		summary: "Get found on the first page of Google with on-page, local SEO, and tracking.",
		description: "We audit your current site, fix what's holding it back, and build a keyword and content plan aimed at the searches your customers are actually making.",
		features: [
			"Full SEO and technical site audit",
			"Local SEO and Google Business Profile setup",
			"Keyword research and on-page optimization",
			"Analytics and Search Console tracking",
			"Monthly ranking and traffic reports",
			"Ongoing content and link-building support"
		],
		icon: "lineChart",
		tone: "dark",
		image: "/images/services/seo-analytics.jpg"
	},
	{
		slug: "social-media-marketing",
		number: "05",
		name: "Social Media Marketing",
		lever: "Engage",
		badge: "Audience",
		summary: "Content, posting, and engagement strategy for Instagram, Facebook, and beyond.",
		description: "We plan a consistent posting calendar, create scroll-stopping content, and manage comments and messages so your page feels active and trustworthy.",
		features: [
			"Content calendar and scheduled posting",
			"Reels, graphics and short-form video",
			"Community management and replies",
			"Hashtag and audience targeting strategy",
			"Influencer and collaboration support",
			"Monthly growth and engagement reports"
		],
		icon: "share",
		tone: "teal",
		image: "/images/services/social-media.jpg"
	},
	{
		slug: "ai-solutions",
		number: "06",
		name: "AI Solutions",
		lever: "Automate",
		badge: "Automation",
		summary: "Chatbots and marketing automation that scale your business without scaling your workload.",
		description: "We help you plug AI into the everyday parts of your business — answering common questions, following up on leads, and keeping campaigns moving.",
		features: [
			"AI chatbots for website and WhatsApp",
			"Automated lead follow-up sequences",
			"AI-assisted content and ad creation",
			"Marketing automation workflows",
			"Data-driven decision dashboards",
			"Ongoing tuning as your business grows"
		],
		icon: "cpu",
		tone: "default",
		image: "/images/services/ai-solutions.jpg"
	},
	{
		slug: "google-paid-ads",
		number: "07",
		name: "Google & Paid Ads",
		lever: "Accelerate",
		badge: "Paid Growth",
		summary: "Search, display and social ads that put you in front of ready-to-buy customers.",
		description: "We set up, manage and continuously optimize campaigns so your budget goes toward clicks that actually convert — not just impressions.",
		features: [
			"Google Search and Display campaigns",
			"Facebook and Instagram ad management",
			"Conversion tracking and call tracking",
			"Landing pages built to convert",
			"A/B testing of ad creative and copy",
			"Transparent monthly spend reporting"
		],
		icon: "target",
		tone: "default",
		image: "/images/services/digital-marketing.jpg"
	},
	{
		slug: "content-marketing",
		number: "08",
		name: "Content Marketing",
		lever: "Educate",
		badge: "Authority",
		summary: "Blogs, guides, and website copy that build trust and help you rank higher.",
		description: "We plan content around the real questions your customers are searching for, so every page earns its place on your site and in search results.",
		features: [
			"Blog writing and content calendars",
			"Website and landing page copywriting",
			"SEO-optimized content briefs",
			"Guides, FAQs and how-to articles",
			"Email newsletter content",
			"Content performance reporting"
		],
		icon: "fileText",
		tone: "default",
		image: "/images/services/seo-analytics.jpg"
	}
];
var WHY = [
	{
		title: "Budget-friendly plans",
		body: "Clear, honest pricing with no hidden costs — plans that fit small and growing businesses.",
		icon: "wallet"
	},
	{
		title: "Fast turnaround",
		body: "We move quickly so your website and campaigns go live without long delays.",
		icon: "timer"
	},
	{
		title: "Transparent reporting",
		body: "Simple monthly reports that show exactly where your money and effort are going.",
		icon: "check"
	},
	{
		title: "Dedicated team",
		body: "A real team of designers, marketers and developers who actually answer your calls.",
		icon: "users"
	},
	{
		title: "Ongoing support",
		body: "We don't disappear after launch — we keep improving your results every month.",
		icon: "lifeBuoy"
	},
	{
		title: "Data + AI driven",
		body: "We use data and AI tools to make smarter decisions, faster.",
		icon: "spark"
	}
];
var STEPS = [
	{
		number: "01",
		title: "Discuss & Plan",
		body: "We understand your business, goals, audience and competitive landscape."
	},
	{
		number: "02",
		title: "Build & Execute",
		body: "We create, launch and optimize strategies that deliver results."
	},
	{
		number: "03",
		title: "Measure & Grow",
		body: "We track performance and scale what works best for you."
	}
];
var CAPABILITIES = [
	{
		label: "Website design",
		detail: "For uPVC, home improvement, bakery and local service brands"
	},
	{
		label: "Local SEO",
		detail: "Ranking for the searches your customers are already making"
	},
	{
		label: "E-commerce",
		detail: "Online ordering and product catalogs that convert browsers"
	},
	{
		label: "Landing pages",
		detail: "Focused, single-offer pages built for wellness and service brands"
	}
];
var INDUSTRIES = [
	{
		name: "Retail & shops",
		icon: "store"
	},
	{
		name: "Restaurants",
		icon: "utensils"
	},
	{
		name: "Clinics & health",
		icon: "heart"
	},
	{
		name: "Real estate",
		icon: "building"
	},
	{
		name: "Education",
		icon: "graduation"
	},
	{
		name: "E-commerce",
		icon: "bag"
	}
];
var PORTFOLIO = [
	{
		slug: "jsk-enterprises",
		name: "JSK Enterprises",
		industry: "uPVC Windows & Doors",
		service: "Website + Local SEO",
		description: "Business website and local SEO for a Hyderabad uPVC windows & doors brand.",
		url: "https://jskupvc.com/",
		keywords: ["uPVC windows website", "local SEO"],
		icon: "doorOpen"
	},
	{
		slug: "srinika-digital-marketing",
		name: "Srinika Marketing Agency",
		industry: "Digital Marketing",
		service: "Website + Content",
		description: "Agency website refresh with clearer messaging and service pages.",
		url: "https://srinikamarketingagency.com/",
		keywords: ["agency website", "content rewrite"],
		icon: "globe"
	},
	{
		slug: "pranav-may",
		name: "Pranav May",
		industry: "Personal Brand",
		service: "Portfolio Website",
		description: "Clean personal brand site built for clarity and conversion.",
		url: "https://pranavmay.skilldm.com/",
		keywords: ["personal brand website", "portfolio site"],
		icon: "cookie"
	},
	{
		slug: "healing-praana",
		name: "Healing Praana",
		industry: "Wellness & Hypnotherapy",
		service: "Landing Pages",
		description: "Conversion-focused landing pages for hypnotherapy and wellness offers.",
		url: "https://healingpraana-hypnotherapy.vercel.app/",
		keywords: ["wellness landing page", "hypnotherapy site"],
		icon: "leaf"
	}
];
var PLANS = [
	{
		id: "starter",
		name: "Starter",
		desc: "For new businesses getting online for the first time.",
		popular: false,
		items: [
			"5-page business website",
			"Basic on-page SEO setup",
			"Google Business Profile setup",
			"1 social media platform",
			"Monthly performance report"
		]
	},
	{
		id: "growth",
		name: "Growth",
		desc: "For businesses ready to actively bring in new leads.",
		popular: true,
		items: [
			"Everything in Starter",
			"Full SEO and content strategy",
			"Google and social media ads",
			"3 social media platforms",
			"Lead tracking and reporting dashboard"
		]
	},
	{
		id: "enterprise",
		name: "Enterprise",
		desc: "For established brands that want full-scale growth.",
		popular: false,
		items: [
			"Everything in Growth",
			"Custom web and app development",
			"AI-powered marketing automation",
			"Dedicated account manager",
			"Advanced analytics and strategy calls"
		]
	}
];
var TESTIMONIALS = [
	{
		quote: "PRAYAVA built our website and got us ranking for uPVC windows searches in Hyderabad. Enquiry calls have been steady every week since launch.",
		name: "Owner",
		role: "JSK Enterprises · uPVC Windows & Doors",
		initial: "J",
		rating: 5
	},
	{
		quote: "As a marketing agency ourselves, we're picky. PRAYAVA refreshed our site and content — it finally sounds like us and converts better.",
		name: "Founder",
		role: "Srinika Marketing Agency",
		initial: "S",
		rating: 5
	},
	{
		quote: "Clean, fast personal brand site. Visitors understand what I do in seconds and reach out. Exactly what I needed.",
		name: "Pranav May",
		role: "Personal Brand · Portfolio",
		initial: "P",
		rating: 5
	},
	{
		quote: "The landing pages made booking sessions effortless. Simple design, clear CTAs, and people actually convert.",
		name: "Team",
		role: "Healing Praana · Hypnotherapy",
		initial: "H",
		rating: 5
	}
];
var FAQS = [
	{
		q: "What is digital marketing?",
		a: "Digital marketing means using the internet — like Google, Instagram and Facebook — to tell people about your business so more customers can find you."
	},
	{
		q: "Why does my business need a website?",
		a: "A website works like an online shop that never closes. People can find you, learn what you offer, and contact you anytime, even at night."
	},
	{
		q: "What is SEO and why is it important?",
		a: "SEO stands for Search Engine Optimization. It helps your website appear on the first page of Google when people search for things you sell."
	},
	{
		q: "How long does it take to see results?",
		a: "Every business is different, but most clients start seeing steady growth within 60 to 90 days of launching a campaign."
	},
	{
		q: "Do I need social media if I already have a website?",
		a: "Yes. Your website is your home on the internet, and social media is where you meet new people and invite them home."
	},
	{
		q: "How much does digital marketing cost?",
		a: "It depends on your goals. We offer simple starter plans and bigger growth plans, and we help you choose what fits your budget."
	},
	{
		q: "Do you work with businesses outside Hyderabad?",
		a: "Yes. While we're based in Hyderabad, we work with businesses across India and remotely, with the same hands-on support and reporting."
	},
	{
		q: "What's included in the free growth audit?",
		a: "We review your website, SEO, and current marketing, then show you exactly what's holding back growth and the fastest wins available — no obligation."
	}
];
var SERVICE_OPTIONS = [
	"Website Design & Development",
	"SEO & Google Ranking",
	"Social Media Marketing",
	"Google & Paid Ads",
	"Branding & Design",
	"AI Solutions",
	"Not sure yet — need advice"
];
var NAV = [
	{
		label: "Home",
		to: "/",
		hash: void 0
	},
	{
		label: "Services",
		to: "/services",
		hash: void 0
	},
	{
		label: "How it works",
		to: "/",
		hash: "process"
	},
	{
		label: "Pricing",
		to: "/pricing",
		hash: void 0
	},
	{
		label: "Audit",
		to: "/audit",
		hash: void 0
	},
	{
		label: "About",
		to: "/about",
		hash: void 0
	}
];
var PROOF = [
	{
		n: "01",
		label: "Strategy first"
	},
	{
		n: "02",
		label: "Design led"
	},
	{
		n: "03",
		label: "Technology powered"
	},
	{
		n: "04",
		label: "Growth focused"
	}
];
function getService(slug) {
	return SERVICES.find((s) => s.slug === slug);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandMark({ className, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/images/prayava-logo.png",
		alt: "PRAYAVA",
		className: cn("h-8 w-auto shrink-0 object-contain", className),
		style: inverted ? { filter: "brightness(0) invert(1)" } : void 0
	});
}
function BrandLockup({ inverted = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {
			inverted,
			className: "h-9 max-w-[160px]"
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[transform,background-color,box-shadow,border-color,color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-dark-fg shadow-[0_14px_30px_rgb(109_40_217_/_0.28)] hover:bg-primary-bright",
			accent: "bg-accent text-dark hover:brightness-105 shadow-[0_10px_24px_rgb(20_184_166_/_0.28)]",
			outline: "border border-line bg-card text-fg hover:border-primary/30 hover:bg-primary-soft",
			ghost: "text-fg hover:bg-primary-soft",
			darkOutline: "border border-dark-fg/20 bg-dark-fg/8 text-dark-fg hover:bg-dark-fg/14",
			dark: "bg-dark text-dark-fg hover:bg-dark-2"
		},
		size: {
			sm: "h-10 rounded-md px-3.5 text-sm",
			md: "h-11 rounded-lg px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-[15px]",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function NavLinks({ onClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: NAV.map((item) => {
		const active = !item.hash && (item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			hash: item.hash,
			onClick,
			className: cn("relative py-2 text-sm font-semibold transition-colors duration-150", active ? "text-primary" : "text-fg/80 hover:text-fg"),
			children: item.label
		}, `${item.to}-${item.hash ?? ""}`);
	}) });
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200", scrolled ? "border-line/80 bg-card/80 shadow-card backdrop-blur-xl" : "border-transparent bg-card/55 backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page flex h-[72px] items-center gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "PRAYAVA home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-7 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto hidden sm:block lg:ml-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get free audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-auto grid size-11 place-items-center rounded-lg text-fg sm:ml-0 lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-card px-5 py-5 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onClick: () => setOpen(false) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-3 w-full",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						children: ["Get free audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-dark text-dark-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-dark-muted",
					children: "Building digital experiences that drive real growth for modern businesses."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 font-display text-sm tracking-wide text-dark-fg",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "digital-marketing" },
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "Digital Marketing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "web-development" },
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "Web Development"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "seo-analytics" },
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "SEO & Analytics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "google-paid-ads" },
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "Google & Paid Ads"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 font-display text-sm tracking-wide text-dark-fg",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "process",
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/audit",
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "Growth audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "faq",
							className: "text-sm text-dark-muted transition-colors hover:text-dark-fg",
							children: "FAQ"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-3 font-display text-sm tracking-wide text-dark-fg",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${SITE.email}`,
						className: "block text-sm text-dark-muted transition-colors hover:text-dark-fg",
						children: SITE.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-dark-muted",
						children: SITE.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent",
						children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page border-t border-dark-fg/10 py-5 text-xs text-dark-muted",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				SITE.name,
				". All rights reserved. ·",
				" ",
				SITE.tagline.toUpperCase()
			]
		})]
	});
}
function FloatCta() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (pathname === "/contact" || pathname === "/audit") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/contact",
		className: "fixed right-5 bottom-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-dark-fg shadow-card-hover transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.96]",
		children: "Free quote"
	});
}
function SiteShell({ children }) {
	const hash = useRouterState({ select: (s) => s.location.hash });
	(0, import_react.useEffect)(() => {
		if (!hash) return;
		const id = hash.replace(/^#/, "");
		const el = document.getElementById(id);
		if (el) requestAnimationFrame(() => el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}));
	}, [hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatCta, {})
		]
	});
}
function SectionHead({ kicker, title, copy, light = false, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-12 max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-[11px] font-extrabold tracking-[0.18em] uppercase", light ? "text-accent" : "text-primary"),
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-3 font-display text-[clamp(1.9rem,4vw,3.1rem)]", light ? "text-dark-fg" : "text-fg"),
				children: title
			}),
			copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-[15px] leading-relaxed", light ? "text-dark-muted" : "text-muted"),
				children: copy
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-a7VMTo3K.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function JsonLd() {
	const org = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: SITE.name,
		description: SITE.description,
		url: SITE.url,
		email: SITE.email,
		areaServed: "IN",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Hyderabad",
			addressRegion: "Telangana",
			addressCountry: "IN"
		},
		priceRange: "$$",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "PRAYAVA Services",
			itemListElement: SERVICES.map((s) => ({
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: s.name,
					url: `${SITE.url}/services/${s.slug}`
				}
			}))
		}
	};
	const faq = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQS.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		children: JSON.stringify(org)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		children: JSON.stringify(faq)
	})] });
}
var styles_default = "/assets/styles-DH65d8kD.css";
var APP_NAME = "PRAYAVA";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "PRAYAVA is a digital marketing agency that builds smart websites, runs result-driven campaigns, and helps businesses show up on Google. Book a free growth audit."
			},
			{
				name: "theme-color",
				content: "#171225"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: NotFound
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "This page wandered off"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-muted",
				children: "The link may be outdated. Head home or explore services."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-2 inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-dark-fg",
				children: "Back to PRAYAVA"
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-Co0t5RN2.mjs");
var Route$6 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "PRAYAVA — Digital Marketing, Web Design & SEO in Hyderabad" }] })
});
var $$splitComponentImporter$4 = () => import("./about-CxG1t4j4.mjs");
var Route$5 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "About PRAYAVA — Build. Grow. Together." }] })
});
var $$splitComponentImporter$3 = () => import("./audit-mkLzzShz.mjs");
var Route$4 = createFileRoute("/audit")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Free Growth Audit — PRAYAVA" }] })
});
var $$splitComponentImporter$2 = () => import("./contact-8kLnQ-dD.mjs");
var Route$3 = createFileRoute("/contact")({
	validateSearch: (search) => ({
		plan: typeof search.plan === "string" ? search.plan : void 0,
		service: typeof search.service === "string" ? search.service : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Contact PRAYAVA — Free growth audit" }] })
});
var $$splitComponentImporter$1 = () => import("./pricing-D3PQDFdt.mjs");
var Route$2 = createFileRoute("/pricing")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Pricing — Plans that fit your budget | PRAYAVA" }] })
});
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
		className: cn("transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-3 opacity-0 blur-[2px]", className),
		children
	});
}
var Route$1 = createFileRoute("/services")({
	component: ServicesPage,
	head: () => ({ meta: [{ title: "Services — Digital Marketing, Web, SEO & More | PRAYAVA" }] })
});
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-wash relative overflow-hidden text-dark-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.98]",
						children: [
							"Everything your business needs to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "grow online"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-dark-muted",
						children: "From your first website to full-scale SEO, paid ads and AI automation — pick one lever or combine them into a single growth system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/audit",
								children: ["Take the growth audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthOrbit, {})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					align: "left",
					kicker: "The PRAYAVA growth stack",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"One connected system,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-light",
							children: "eight growth levers."
						})
					] }),
					copy: "Choose one service or combine multiple capabilities — strategy, visibility, conversion and automation working together."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 30,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "flex items-center gap-3 rounded-xl bg-card px-4 py-4 shadow-card transition-transform duration-150 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "font-display text-sm text-primary",
								children: s.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-bold tracking-wide text-muted uppercase",
								children: s.lever
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: s.name
							})] })]
						})
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.image,
										alt: s.name,
										className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute top-3 left-3 rounded-md bg-card/90 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-primary uppercase backdrop-blur-sm",
										children: [
											s.number,
											" · ",
											s.badge
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
										children: s.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
										children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
									})
								]
							})]
						})
					}, s.slug))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page space-y-0",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: s.slug,
					className: "grid gap-4 border-t border-line py-10 md:grid-cols-[140px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm font-extrabold text-primary",
						children: [
							s.number,
							" · ",
							s.lever
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
							children: s.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: s.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-violet",
								children: f
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary",
							children: ["Full service page", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					] })]
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-wash relative overflow-hidden rounded-2xl px-8 py-14 text-dark-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase",
								children: "Not sure where to start?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-[clamp(1.8rem,4vw,3rem)]",
								children: [
									"Let's build the right mix of services",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "for your business."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-dark-muted",
								children: "Tell us what you're building and we'll recommend the exact services that will move the needle — free, no obligation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Get free growth audit"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "darkOutline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/audit",
										children: "Take the 2-minute audit"
									})
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
function GrowthOrbit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto hidden min-h-[380px] w-full max-w-md lg:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 size-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-dark",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "size-[118px]" })
			}),
			[
				{
					label: "Attract",
					sub: "Marketing",
					pos: "top-2 left-2"
				},
				{
					label: "Convert",
					sub: "Web",
					pos: "top-10 right-0"
				},
				{
					label: "Get found",
					sub: "SEO",
					pos: "bottom-8 left-0"
				},
				{
					label: "Automate",
					sub: "AI",
					pos: "bottom-2 right-4"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute min-w-[130px] rounded-lg border border-dark-fg/12 bg-dark-fg/8 px-3.5 py-2.5 backdrop-blur-md", c.pos),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "block text-xs",
					children: c.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
					className: "text-[10px] text-dark-muted",
					children: c.sub
				})]
			}, c.label))
		]
	});
}
var $$splitComponentImporter = () => import("./services_._slug-D0TSegdU.mjs");
var Route = createFileRoute("/services_/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.service.name ?? "Service"} — PRAYAVA` }] })
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	AuditRoute: Route$4.update({
		id: "/audit",
		path: "/audit",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	PricingRoute: Route$2.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$7
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$7
	}),
	ServicesSlugRoute: Route.update({
		id: "/services_/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SiteShell as _, Button as a, cn as b, INDUSTRIES as c, PROOF as d, SERVICES as f, SectionHead as g, STEPS as h, Route$3 as i, PLANS as l, SITE as m, Route as n, CAPABILITIES as o, SERVICE_OPTIONS as p, Reveal as r, FAQS as s, router_exports as t, PORTFOLIO as u, TESTIMONIALS as v, getService as x, WHY as y };
