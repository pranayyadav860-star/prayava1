import type { ReactNode } from "react";
import { useEffect } from "react";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { ServiceGlyph } from "@/components/service-icon";
import { SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { getService, SERVICES } from "@/lib/content";

/* ================================================================
   ROUTE
================================================================ */

export const Route = createFileRoute("/services_/$slug")({
  component: ServiceDetailPage,

  loader: ({ params }) => {
    const service = getService(params.slug);

    if (!service) {
      throw notFound();
    }

    return { service };
  },

  head: ({ loaderData }) => {
    const name = loaderData?.service.name ?? "Service";
    const description = loaderData?.service.description;

    return {
      meta: [
        {
          title: `${name} Services | PRAYAVA`,
        },

        ...(description
          ? [
              {
                name: "description",
                content: description,
              },
            ]
          : []),

        {
          property: "og:title",
          content: `${name} Services | PRAYAVA`,
        },

        ...(description
          ? [
              {
                property: "og:description",
                content: description,
              },
            ]
          : []),
      ],

      links: [
        {
          rel: "canonical",
          href: `https://prayava.com/services/${loaderData?.service.slug}`,
        },
      ],
    };
  },
});

/* ================================================================
   SEO CONTENT
================================================================ */

type SeoContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  keywords: string[];
  audience: string;
  outcome: string;
  why: string;
};

const SEO_CONTENT: Record<string, SeoContent> = {
  "web-development": {
    eyebrow: "Web Development Services",
    headline: "Websites that turn visitors into customers.",
    intro:
      "Fast, responsive and SEO-friendly websites built to attract customers and generate enquiries.",
    keywords: [
      "web development",
      "website design",
      "business website",
      "responsive website",
      "SEO-friendly website",
    ],
    audience:
      "For startups, local businesses and growing brands that need a professional website.",
    outcome:
      "A fast, professional website with clear messaging, strong user experience and conversion-focused design.",
    why:
      "Your website should build trust quickly and make it easy for customers to take action.",
  },

  "seo-analytics": {
    eyebrow: "SEO & Analytics Services",
    headline: "Get found on Google by the right customers.",
    intro:
      "Improve your Google visibility with practical SEO, keyword research, local SEO and performance tracking.",
    keywords: [
      "SEO services",
      "Google SEO",
      "local SEO",
      "technical SEO",
      "keyword research",
    ],
    audience:
      "For businesses that want better Google rankings and more qualified organic traffic.",
    outcome:
      "Better search visibility, relevant organic traffic and clear data to guide your marketing.",
    why:
      "SEO helps your business appear when customers are actively searching for your products or services.",
  },

  "branding-design": {
    eyebrow: "Branding & Design Services",
    headline: "Build a brand people remember and trust.",
    intro:
      "Create a clear and professional brand identity with logo design, visual systems and consistent digital design.",
    keywords: [
      "branding services",
      "brand identity",
      "logo design",
      "visual identity",
      "brand design",
    ],
    audience:
      "For new businesses, growing companies and brands ready for a stronger visual identity.",
    outcome:
      "A memorable and consistent brand that looks professional across every customer touchpoint.",
    why:
      "Strong branding helps customers recognise your business, understand your value and remember you.",
  },

  "social-media": {
    eyebrow: "Social Media Marketing",
    headline: "Turn social media into business growth.",
    intro:
      "Build a stronger social presence with strategic content, creative campaigns and audience-focused marketing.",
    keywords: [
      "social media marketing",
      "social media management",
      "Instagram marketing",
      "Facebook marketing",
      "social media strategy",
    ],
    audience:
      "For businesses that want consistent social media content with a clear business purpose.",
    outcome:
      "A consistent social presence that builds awareness, engagement and customer trust.",
    why:
      "Every post should have a purpose — from building awareness to starting conversations and generating leads.",
  },

  "google-paid-ads": {
    eyebrow: "Google & Paid Ads",
    headline: "Reach customers ready to take action.",
    intro:
      "Generate targeted leads with Google Ads, PPC campaigns, conversion tracking and performance optimisation.",
    keywords: [
      "Google Ads",
      "PPC advertising",
      "paid search",
      "Google advertising",
      "lead generation",
    ],
    audience:
      "For businesses that want faster visibility, targeted traffic and measurable leads.",
    outcome:
      "Better-targeted campaigns with clear conversion tracking and smarter use of your advertising budget.",
    why:
      "Paid advertising works best when you reach the right customer with the right message at the right time.",
  },

  "ai-solutions": {
    eyebrow: "AI Solutions",
    headline: "Automate repetitive work with practical AI.",
    intro:
      "Use AI automation to reduce manual work, improve customer follow-up and streamline everyday business tasks.",
    keywords: [
      "AI solutions",
      "AI automation",
      "business automation",
      "AI tools",
      "workflow automation",
    ],
    audience:
      "For businesses looking to reduce repetitive tasks and improve everyday operations.",
    outcome:
      "Practical AI workflows that save time, improve efficiency and help your team focus on important work.",
    why:
      "AI should solve real business problems, not add unnecessary complexity to your workflow.",
  },

  "digital-marketing": {
    eyebrow: "Digital Marketing Services",
    headline: "A digital marketing strategy built for growth.",
    intro:
      "Connect SEO, paid ads, social media, content and web strategy to generate more visibility and leads.",
    keywords: [
      "digital marketing",
      "digital marketing agency",
      "online marketing",
      "performance marketing",
      "lead generation",
    ],
    audience:
      "For businesses that want one connected digital marketing strategy instead of separate activities.",
    outcome:
      "A clear growth strategy connecting visibility, traffic, conversions and customer acquisition.",
    why:
      "Your marketing channels work better when they support the same business goal.",
  },

  "content-marketing": {
    eyebrow: "Content Marketing",
    headline: "Content that attracts, informs and builds trust.",
    intro:
      "Create useful SEO and marketing content that helps customers understand your business and take action.",
    keywords: [
      "content marketing",
      "SEO content",
      "website content",
      "content strategy",
      "content creation",
    ],
    audience:
      "For businesses that want content to support SEO, social media and customer education.",
    outcome:
      "Useful content that improves visibility, builds authority and supports your wider marketing strategy.",
    why:
      "Good content answers customer questions and gives people a reason to trust your business.",
  },
};

const DEFAULT_SEO_CONTENT: SeoContent = {
  eyebrow: "Digital Growth Services",
  headline: "A practical digital solution built around your goals.",
  intro:
    "Practical digital solutions designed to improve visibility, customer experience and business growth.",
  keywords: [
    "digital services",
    "digital growth",
    "business growth",
    "online marketing",
    "digital strategy",
  ],
  audience:
    "Designed for businesses that want practical digital solutions connected to real business objectives.",
  outcome:
    "A clearer digital presence, stronger customer experience and a practical foundation for growth.",
  why:
    "We focus on useful solutions, clear communication and measurable progress.",
};

/* ================================================================
   DELIVERY STEPS
================================================================ */

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, audience and goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Create a focused strategy and clear priorities.",
  },
  {
    number: "03",
    title: "Build",
    text: "Design and develop the right solution.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Test everything and launch with confidence.",
  },
  {
    number: "05",
    title: "Measure",
    text: "Track meaningful performance and customer behaviour.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Optimise continuously as your business grows.",
  },
];

/* ================================================================
   MAIN PAGE
================================================================ */

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [service.slug]);

  const idx = SERVICES.findIndex(
    (s) => s.slug === service.slug,
  );

  const prev =
    idx > 0
      ? SERVICES[idx - 1]
      : SERVICES[SERVICES.length - 1];

  const next =
    idx < SERVICES.length - 1
      ? SERVICES[idx + 1]
      : SERVICES[0];

  const seo =
    SEO_CONTENT[service.slug] ??
    DEFAULT_SEO_CONTENT;

  const orbitItems = getOrbitItems(service.slug);

  return (
    <SiteShell>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">

        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-40 right-[-100px] size-[420px] rounded-full bg-accent/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-[-100px] size-[360px] rounded-full bg-primary/15 blur-3xl" />

        <div className="page relative grid items-center gap-8 py-14 lg:grid-cols-[1.15fr_0.75fr] lg:gap-4 lg:py-10">

          {/* LEFT */}

          <div className="relative z-10 max-w-2xl">

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm font-semibold text-dark-muted"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-dark-fg"
              >
                <ArrowLeft className="size-4" />
                All services
              </Link>

              <ChevronRight className="size-3.5 opacity-40" />

              <span className="text-dark-fg">
                {service.name}
              </span>
            </nav>

            <div className="mt-7 flex items-center gap-3">

              <ServiceGlyph
                name={service.icon}
                tone="dark"
              />

              <div>
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-accent uppercase">
                  {service.number} · {service.badge}
                </p>

                <p className="mt-0.5 text-xs text-dark-muted">
                  {seo.eyebrow}
                </p>
              </div>

            </div>

            {/* SHORT SEO HERO HEADING */}

            <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.98]">
              {seo.headline}
            </h1>

            {/* SHORT SEO DESCRIPTION */}

            <p className="mt-5 max-w-lg text-sm leading-7 text-dark-muted lg:text-base">
              {seo.intro}
            </p>

            {/* KEYWORDS */}

            <div className="mt-5 flex flex-wrap gap-2">
              {seo.keywords.slice(0, 3).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-dark-fg/10 bg-dark-fg/6 px-2.5 py-1 text-[9px] font-semibold text-dark-fg/75"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* STATS */}

            {service.stats?.length ? (
              <dl className="mt-7 grid max-w-xl grid-cols-3 gap-4">
                {service.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[10px] font-bold tracking-wide text-dark-muted uppercase">
                      {stat.label}
                    </dt>

                    <dd className="mt-1 font-display text-xl text-dark-fg">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {/* BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">

              <Button asChild size="lg">
                <Link
                  to="/contact"
                  search={{
                    service: service.name,
                  }}
                >
                  Get a free quote
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>

              <a
                href="https://wa.me/919963154209"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-dark-fg/20 bg-transparent px-5 text-sm font-semibold text-dark-fg transition-colors duration-200 hover:border-accent/60 hover:bg-transparent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>

            </div>

          </div>

          {/* RIGHT ORBIT */}

          <ServiceOrbit
            service={service.name}
            items={orbitItems}
            icon={service.icon}
          />

        </div>
      </section>

      {/* =========================================================
          QUICK VALUE STRIP
      ========================================================= */}

      <section className="relative z-10 -mt-5 pb-4">
        <div className="page">

          <div className="grid overflow-hidden rounded-2xl bg-card shadow-card sm:grid-cols-3">

            <ValueItem
              icon={<Target className="size-4" />}
              title="Strategy first"
              copy="Built around your actual business goals."
            />

            <ValueItem
              icon={<Sparkles className="size-4" />}
              title="Human focused"
              copy="Simple experiences your customers understand."
            />

            <ValueItem
              icon={<TrendingUp className="size-4" />}
              title="Growth ready"
              copy="Designed to improve as your business grows."
            />

          </div>

        </div>
      </section>

      {/* =========================================================
          SEO INTRODUCTION
      ========================================================= */}

      <section className="py-20 lg:py-10">
        <div className="page grid gap-12 lg:grid-cols-[1fr_0.7fr]">

          <div>

            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              {seo.eyebrow}
            </p>

            <h2 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
              {seo.headline}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">
              {seo.why}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">
              {seo.audience}
            </p>

          </div>

          <div className="rounded-2xl bg-primary-soft/60 p-7">

            <Search className="size-6 text-primary" />

            <h3 className="mt-5 font-display text-xl">
              Built for real customers
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              We don't build digital assets just to look good.
              Every part of the service is connected to visibility,
              trust, conversion or operational efficiency.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {seo.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-card px-3 py-1.5 text-[10px] font-semibold text-primary shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT YOU GET · HOW WE DELIVER
          AUTO SCROLL TRAIN
      ========================================================= */}

      <section className="bg-primary-soft/40 py-20 lg:py-10">

        <div className="page">

          <div className="max-w-3xl">

            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              What you get · How we deliver
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight">
              From idea to{" "}
              <span className="text-gradient-light">
                measurable progress.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
              A simple process that keeps your project focused,
              transparent and connected to your business goals.
            </p>

          </div>

          <div className="process-train-wrapper mt-12 overflow-hidden">

            <div className="process-train">

              {/* FIRST SET */}

              <div className="process-train-set">

                {DELIVERY_STEPS.map((step, index) => (

                  <div
                    key={`first-${step.number}`}
                    className="flex items-center"
                  >

                    <div className="process-card group">

                      <span className="font-display text-4xl font-bold leading-none text-accent/25 transition-colors duration-300 group-hover:text-accent/60">
                        {step.number}
                      </span>

                      <h3 className="mt-6 font-display text-xl text-dark-fg">
                        {step.title}
                      </h3>

                      <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-muted">
                        {step.text}
                      </p>

                      <span className="mt-5 text-[9px] font-extrabold tracking-[0.16em] text-accent uppercase">
                        PRAYAVA process
                      </span>

                    </div>

                    {index < DELIVERY_STEPS.length - 1 && (
                      <div className="process-connector">
                        <div className="h-px w-full bg-primary/35" />

                        <span className="absolute grid size-3 place-items-center rounded-full border-2 border-primary bg-primary-soft">
                          <span className="size-1.5 rounded-full bg-primary" />
                        </span>
                      </div>
                    )}

                  </div>

                ))}

              </div>

              {/* SECOND SET */}

              <div
                className="process-train-set"
                aria-hidden="true"
              >

                {DELIVERY_STEPS.map((step, index) => (

                  <div
                    key={`second-${step.number}`}
                    className="flex items-center"
                  >

                    <div className="process-card group">

                      <span className="font-display text-4xl font-bold leading-none text-accent/25">
                        {step.number}
                      </span>

                      <h3 className="mt-6 font-display text-xl text-dark-fg">
                        {step.title}
                      </h3>

                      <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-muted">
                        {step.text}
                      </p>

                      <span className="mt-5 text-[9px] font-extrabold tracking-[0.16em] text-accent uppercase">
                        PRAYAVA process
                      </span>

                    </div>

                    {index < DELIVERY_STEPS.length - 1 && (
                      <div className="process-connector">
                        <div className="h-px w-full bg-primary/35" />

                        <span className="absolute grid size-3 place-items-center rounded-full border-2 border-primary bg-primary-soft">
                          <span className="size-1.5 rounded-full bg-primary" />
                        </span>
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICE EXECUTION
      ========================================================= */}

      {service.process?.length ? (
        <section className="py-20 lg:py-24">

          <div className="page">

            <div className="max-w-3xl">

              <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
                Service execution
              </p>

              <h2 className="mt-3 font-display text-3xl lg:text-4xl">
                How we execute your{" "}
                <span className="text-gradient-light">
                  {service.name}
                </span>
              </h2>

            </div>

            <ol className="mt-10 grid gap-4 md:grid-cols-3">

              {service.process.map((step, i) => (

                <li
                  key={step.title}
                  className="group rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >

                  <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-display text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>

                </li>

              ))}

            </ol>

          </div>

        </section>
      ) : null}

      {/* =========================================================
          WHY THIS MATTERS
          LIGHT SECTION + DARK CARDS
      ========================================================= */}
<section className="bg-primary-soft/35 py-20 lg:py-10">
  <div className="page">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">

      <div>
        <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
          Why this matters
        </p>

        <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
          More than a service.{" "}
          <span className="text-gradient-light">
            A growth asset.
          </span>
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted lg:text-base">
          {seo.outcome}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[
          "Clear business objectives",
          "Customer-focused execution",
          "Mobile-friendly experience",
          "Search-friendly foundation",
          "Performance tracking",
          "Scalable implementation",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-4 text-fg shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <Check className="size-3.5" />
            </span>

            <span className="text-sm font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
      {/* =========================================================
          FAQ
      ========================================================= */}

      {service.faqs?.length ? (
        <section className="py-20 lg:py-24">

          <div className="page">

            <div className="mx-auto max-w-3xl">

              <div className="text-center">

                <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
                  Common questions
                </p>

                <h2 className="mt-3 font-display text-3xl lg:text-4xl">
                  Questions about{" "}
                  <span className="text-gradient-light">
                    {service.name}
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Clear answers to help you understand what the
                  service involves and whether it is right for your
                  business.
                </p>

              </div>

              <div className="mt-10 divide-y overflow-hidden rounded-2xl bg-card px-5 shadow-card">

                {service.faqs.map((faq) => (

                  <details
                    key={faq.q}
                    className="group py-5"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold marker:hidden hover:text-primary [&::-webkit-details-marker]:hidden">
                      {faq.q}

                      <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
                    </summary>

                    <p className="pt-3 text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>

                  </details>

                ))}

              </div>

            </div>

          </div>

        </section>
      ) : null}

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-primary-soft/40 py-20 lg:py-10">

        <div className="page">

          <div className="relative overflow-hidden rounded-3xl bg-card px-7 py-14 shadow-card sm:px-10 lg:px-16 lg:py-20">

            <div className="pointer-events-none absolute -right-32 -bottom-40 size-[420px] rounded-full bg-accent/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">

              {/* LEFT */}

              <div>

                <p className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
                  Ready to grow?
                </p>

                <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-none">
                  Let's build a better{" "}
                  <span className="text-gradient-light">
                    {service.name}
                  </span>{" "}
                  strategy.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
                  Tell us what you need. We'll help you choose
                  the right approach and turn your goals into a
                  practical plan.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Button asChild size="lg">
                    <Link
                      to="/contact"
                      search={{
                        service: service.name,
                      }}
                    >
                      Get a free quote
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>

                  <a
                    href="https://wa.me/919963154209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-card px-5 text-sm font-semibold text-fg transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Connect on WhatsApp
                    <MessageCircle className="size-4" />
                  </a>

                </div>

              </div>

              {/* RIGHT DARK CARD */}

              <div className="rounded-2xl border border-dark-fg/10 bg-dark p-7 text-dark-fg shadow-dark sm:p-8">

                <p className="text-[10px] font-extrabold tracking-[0.18em] text-accent uppercase">
                  Talk to PRAYAVA
                </p>

                <h3 className="mt-3 font-display text-2xl">
                  Have a project in mind?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-dark-muted">
                  Get in touch directly and tell us what you need.
                  We'll help you figure out the right next step.
                </p>

                <div className="mt-6 grid gap-3">

                  <a
                    href="https://wa.me/919963154209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-bright"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp PRAYAVA
                  </a>

                  <a
                    href="tel:+919963154209"
                    className="flex items-center gap-3 rounded-xl border border-dark-fg/10 bg-dark-fg/5 px-4 py-3 text-sm font-semibold text-dark-fg transition-all duration-200 hover:border-accent/40 hover:bg-dark-fg/10"
                  >
                    <Phone className="size-4 text-accent" />
                    Call +91 99631 54209
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PREVIOUS / NEXT
      ========================================================= */}

      <section className="pb-20">

        <div className="page">

          <div className="mb-7">

            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              Explore more
            </p>

            <h2 className="mt-2 font-display text-2xl">
              More PRAYAVA services
            </h2>

          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            {prev && (
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/services/$slug",
                    params: {
                      slug: prev.slug,
                    },
                  })
                }
                className="group flex flex-1 items-center justify-between rounded-2xl bg-dark px-5 py-5 text-left text-dark-fg shadow-card transition-all duration-300 hover:-translate-y-1"
              >

                <span>

                  <span className="block text-[10px] font-bold tracking-wide text-dark-muted uppercase">
                    Previous
                  </span>

                  <span className="font-display text-lg">
                    {prev.name}
                  </span>

                </span>

                <ArrowLeft className="size-4 text-dark-muted transition-transform group-hover:-translate-x-1 group-hover:text-accent" />

              </button>
            )}

            {next && (
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/services/$slug",
                    params: {
                      slug: next.slug,
                    },
                  })
                }
                className="group flex flex-1 items-center justify-between rounded-2xl bg-dark px-5 py-5 text-left text-dark-fg shadow-card transition-all duration-300 hover:-translate-y-1"
              >

                <span>

                  <span className="block text-[10px] font-bold tracking-wide text-dark-muted uppercase">
                    Next
                  </span>

                  <span className="font-display text-lg">
                    {next.name}
                  </span>

                </span>

                <ArrowRight className="size-4 text-dark-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />

              </button>
            )}

          </div>

        </div>

      </section>

    </SiteShell>
  );
}

/* ================================================================
   SMALL RIGHT-SIDE ORBIT
================================================================ */

type OrbitItem = {
  label: string;
  sub: string;
  position: string;
};

function ServiceOrbit({
  service,
  items,
}: {
  service: string;
  items: OrbitItem[];
  icon: string;
}) {
  return (
    <div className="relative ml-auto hidden h-[360px] w-[390px] max-w-full shrink-0 lg:block">

      {/* Glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      {/* Outer orbit */}

      <div className="absolute left-1/2 top-1/2 size-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Middle orbit */}

      <div className="absolute left-1/2 top-1/2 size-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Inner orbit */}

      <div className="absolute left-1/2 top-1/2 size-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

      {/* Center */}

      <div className="absolute left-1/2 top-1/2 z-20 flex size-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-dark-fg/10 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-sm">

        <div className="text-center">

          <div className="mx-auto grid size-11 place-items-center rounded-full border border-dark-fg/10 bg-dark-fg/10">
            <BrandMark className="size-8" />
          </div>

          <p className="mt-2 max-w-[90px] text-[9px] font-bold tracking-[0.1em] text-dark-fg/80 uppercase">
            {service}
          </p>

        </div>

      </div>

      {/* Orbit cards */}

      {items.map((item) => (

        <div
          key={`${item.label}-${item.sub}`}
          className={`absolute z-30 ${item.position}`}
        >

          <div className="group min-w-[120px] rounded-xl border border-dark-fg/10 bg-dark-fg/10 px-3 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-dark-fg/15">

            <div className="flex items-center gap-2">

              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

              <strong className="text-xs text-dark-fg">
                {item.label}
              </strong>

            </div>

            <span className="mt-1 block text-[9px] font-semibold text-dark-muted">
              {item.sub}
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}

/* ================================================================
   ORBIT CONTENT
================================================================ */

function getOrbitItems(slug: string): OrbitItem[] {

  const items: Record<string, OrbitItem[]> = {

    "web-development": [
      {
        label: "Design",
        sub: "Experience",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "SEO",
        sub: "Get found",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Convert",
        sub: "Generate leads",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Mobile",
        sub: "Responsive",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "seo-analytics": [
      {
        label: "Keywords",
        sub: "Search intent",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Rankings",
        sub: "Get found",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Traffic",
        sub: "Organic growth",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Analytics",
        sub: "Measure",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "branding-design": [
      {
        label: "Identity",
        sub: "Be memorable",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Visuals",
        sub: "Stand out",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Trust",
        sub: "Build confidence",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Design",
        sub: "Stay consistent",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "social-media": [
      {
        label: "Content",
        sub: "Stay relevant",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Reach",
        sub: "Grow audience",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Engage",
        sub: "Build community",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Convert",
        sub: "Drive action",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "google-paid-ads": [
      {
        label: "Search",
        sub: "High intent",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Ads",
        sub: "Attract",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Leads",
        sub: "Convert",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Data",
        sub: "Optimise",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "ai-solutions": [
      {
        label: "Automate",
        sub: "Save time",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "AI",
        sub: "Work smarter",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Integrate",
        sub: "Connect systems",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Scale",
        sub: "Grow efficiently",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "digital-marketing": [
      {
        label: "SEO",
        sub: "Get found",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Ads",
        sub: "Attract",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Web",
        sub: "Convert",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Social",
        sub: "Engage",
        position: "left-[3%] bottom-[10%]",
      },
    ],

    "content-marketing": [
      {
        label: "Content",
        sub: "Educate",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "SEO",
        sub: "Get found",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Trust",
        sub: "Build authority",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Leads",
        sub: "Drive action",
        position: "left-[3%] bottom-[10%]",
      },
    ],
  };

  return (
    items[slug] ?? [
      {
        label: "Strategy",
        sub: "Plan",
        position: "left-[0%] top-[13%]",
      },
      {
        label: "Growth",
        sub: "Expand",
        position: "right-[0%] top-[7%]",
      },
      {
        label: "Results",
        sub: "Measure",
        position: "right-[1%] bottom-[12%]",
      },
      {
        label: "Scale",
        sub: "Improve",
        position: "left-[3%] bottom-[10%]",
      },
    ]
  );
}

/* ================================================================
   VALUE ITEM
================================================================ */

function ValueItem({
  icon,
  title,
  copy,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">

      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </span>

      <div>

        <strong className="block text-sm">
          {title}
        </strong>

        <span className="text-[11px] text-muted">
          {copy}
        </span>

      </div>

    </div>
  );
}