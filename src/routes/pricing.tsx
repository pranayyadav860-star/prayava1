import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,

  head: () => ({
    meta: [
      {
        title: "Website Design & Development Pricing | PRAYAVA",
      },
      {
        name: "description",
        content:
          "Explore PRAYAVA website design and development packages for businesses. Get fast, mobile-friendly, SEO-ready websites with transparent pricing starting at ₹8,999.",
      },
    ],
  }),
});

/* =========================================================
   PRICING DATA
========================================================= */

const PLANS = [
  {
    name: "Starter",

    description:
      "Affordable website design for small businesses starting online.",

    oldPrice: "₹14,000",
    price: "₹8,999",

    pages: "Upto 4 pages",

    features: [
      {
        text: "SSL + Hosting + Domain",
        included: true,
      },
      {
        text: "Mobile Responsive Website",
        included: true,
      },
      {
        text: "Speed Optimised (Core Web Vitals)",
        included: true,
      },
      {
        text: "Contact / Lead Forms",
        included: true,
      },
      {
        text: "Social Media Integration",
        included: true,
      },
      {
        text: "On-Page SEO: Basic",
        included: true,
      },
      {
        text: "Google My Business",
        included: false,
      },
      {
        text: "Google Analytics",
        included: false,
      },
      {
        text: "Technical SEO",
        included: false,
      },
      {
        text: "Schema Markup",
        included: false,
      },
    ],

    support: "25 days*",
    revisions: "1 round",
    delivery: "2 days",

    badge: null,
  },

  {
    name: "Growth",

    description:
      "SEO-ready business website development for growing brands.",

    oldPrice: "₹25,000",
    price: "₹17,999",

    pages: "Upto 6 pages",

    features: [
      {
        text: "SSL + Hosting + Domain",
        included: true,
      },
      {
        text: "Mobile Responsive Website",
        included: true,
      },
      {
        text: "Speed Optimised (Core Web Vitals)",
        included: true,
      },
      {
        text: "Contact / Lead Forms",
        included: true,
      },
      {
        text: "Social Media Integration",
        included: true,
      },
      {
        text: "On-Page SEO: Standard",
        included: true,
      },
      {
        text: "Google My Business",
        included: false,
      },
      {
        text: "Google Analytics",
        included: true,
      },
      {
        text: "Technical SEO",
        included: false,
      },
      {
        text: "Schema Markup",
        included: false,
      },
    ],

    support: "45 days*",
    revisions: "2 rounds",
    delivery: "6 days",

    badge: "★ POPULAR",
  },

  {
    name: "Pro",

    description:
      "Advanced web development and SEO for businesses focused on growth.",

    oldPrice: "₹55,000",
    price: "₹45,000",

    pages: "Upto 10 pages",

    features: [
      {
        text: "SSL + Hosting + Domain",
        included: true,
      },
      {
        text: "Mobile Responsive Website",
        included: true,
      },
      {
        text: "Speed Optimised (Core Web Vitals)",
        included: true,
      },
      {
        text: "Contact / Lead Forms",
        included: true,
      },
      {
        text: "Social Media Integration",
        included: true,
      },
      {
        text: "On-Page SEO: Full SEO Suite",
        included: true,
      },
      {
        text: "Google My Business",
        included: true,
      },
      {
        text: "Google Analytics",
        included: true,
      },
      {
        text: "Technical SEO",
        included: true,
      },
      {
        text: "Schema Markup",
        included: true,
      },
    ],

    support: "2 months*",
    revisions: "4 rounds",
    delivery: "12 days",

    badge: "★ BEST VALUE",
  },
];

/* =========================================================
   FAQ
========================================================= */

const FAQS = [
  {
    question: "What is included in a PRAYAVA website package?",

    answer:
      "Every website package includes the pages listed in the plan, responsive design, SSL, hosting, domain, lead forms, performance optimisation and the SEO features included with that package. The exact scope depends on the plan you choose.",
  },

  {
    question: "Which website package is best for my business?",

    answer:
      "Starter is suitable for small businesses that need a professional online presence. Growth is ideal for businesses that want a stronger SEO-ready website and analytics. Pro is designed for businesses that need a larger website with advanced SEO, technical optimisation and a stronger growth foundation.",
  },

  {
    question: "Are domain, hosting and SSL included?",

    answer:
      "Yes. SSL, hosting and domain are included in all three website packages. Renewal or third-party costs after the included period may apply depending on the selected provider.",
  },

  {
    question: "Can I upgrade my website package later?",

    answer:
      "Yes. You can start with a smaller website package and upgrade later when you need more pages, advanced SEO, analytics, technical SEO or additional functionality.",
  },

  {
    question: "How does the website development process work?",

    answer:
      "We first understand your business, goals, pages and requirements. After the scope is confirmed, we design and develop the website, optimise it for mobile performance and SEO, complete the agreed revisions and prepare it for launch.",
  },
];

/* =========================================================
   HERO ORBIT
========================================================= */

function PricingOrbit() {
  const items = [
    {
      title: "Web",
      sub: "Convert",
      className: "left-0 top-8",
    },
    {
      title: "SEO",
      sub: "Get found",
      className: "right-0 top-0",
    },
    {
      title: "Ads",
      sub: "Attract",
      className: "right-2 bottom-8",
    },
    {
      title: "AI",
      sub: "Automate",
      className: "left-4 bottom-0",
    },
  ];

  return (
    <div className="relative mx-auto hidden h-[350px] w-[400px] lg:block">
      {/* Outer orbit */}
      <div className="absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Middle orbit */}
      <div className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      {/* Inner orbit */}
      <div className="absolute left-1/2 top-1/2 size-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 grid size-[120px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/30 bg-dark-fg/10 shadow-dark backdrop-blur-md">
        <div className="text-center">
          <div className="font-display text-lg font-bold">
            PRAYAVA
          </div>

          <span className="text-[8px] font-bold tracking-[0.18em] text-accent uppercase">
            Growth
          </span>
        </div>
      </div>

      {/* Orbit cards */}
      {items.map((item) => (
        <div
          key={item.title}
          className={cn(
            "absolute min-w-[120px] rounded-2xl border border-dark-fg/10 bg-dark-fg/8 px-4 py-3 text-dark-fg shadow-dark backdrop-blur-md",
            item.className,
          )}
        >
          <strong className="block font-display text-sm">
            {item.title}
          </strong>

          <span className="mt-0.5 block text-[10px] font-semibold text-dark-muted">
            {item.sub}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({
  plan,
}: {
  plan: (typeof PLANS)[number];
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-dark-fg/15 bg-card p-7 text-fg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        plan.badge && "lg:-translate-y-2",
      )}
    >
      {/* Badge */}

      {plan.badge && (
        <div className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[9px] font-extrabold tracking-wide text-dark uppercase">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}

      <h3 className="font-display text-2xl text-fg">
        {plan.name}
      </h3>

      {/* Description */}

      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        {plan.description}
      </p>

      {/* Price */}

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-sm text-muted line-through">
          {plan.oldPrice}
        </span>

        <strong className="font-display text-3xl text-fg">
          {plan.price}
        </strong>
      </div>

      <p className="mt-1 text-xs text-muted">
        {plan.pages}
      </p>

      {/* Features */}

      <div className="mt-6 border-t border-line pt-5">
        <ul className="space-y-3.5">
          {plan.features.map((feature) => (
            <li
              key={feature.text}
              className={cn(
                "flex items-center gap-3 text-sm",
                !feature.included && "text-muted",
              )}
            >
              {feature.included ? (
                <Check className="size-4 shrink-0 text-accent" />
              ) : (
                <Minus className="size-4 shrink-0 text-muted" />
              )}

              <span
                className={cn(
                  !feature.included && "line-through opacity-70",
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Details */}

      <div className="mt-auto border-t border-line pt-6">
        <div className="grid gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">
              Support
            </span>

            <strong>{plan.support}</strong>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">
              Revisions
            </span>

            <strong>{plan.revisions}</strong>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">
              Delivery
            </span>

            <strong>{plan.delivery}</strong>
          </div>
        </div>

        {/* Button */}

        <Button
          asChild
          size="lg"
          className={cn(
            "mt-7 w-full",
            plan.badge
              ? "bg-accent text-dark hover:bg-accent/90"
              : "",
          )}
          variant={plan.badge ? "default" : "outline"}
        >
          <Link
            to="/contact"
            search={{
              plan: plan.name,
            }}
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

/* =========================================================
   PRICING PAGE
========================================================= */

function PricingPage() {
  return (
    <SiteShell>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-40 right-[-100px] size-[430px] rounded-full bg-accent/15 blur-3xl" />

        <div className="page relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.7fr] lg:py-20">

          {/* LEFT */}

          <div className="relative z-10 max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-dark-fg/10 bg-dark-fg/6 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] uppercase backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" />
              Website Pricing
            </div>

            <h1 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.95]">
              Website design
              <br />
              <span className="text-gradient">
                built for growth.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-dark-muted lg:text-base">
              Affordable website design and development packages for
              businesses that need a fast, mobile-friendly and
              SEO-ready online presence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Button asChild size="lg">
                <Link to="/contact">
                  Get a free quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="darkOutline"
              >
                <Link to="/audit">
                  Free SEO Audit
                </Link>
              </Button>

            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-dark-muted">
              <span>✓ Mobile-first</span>
              <span>✓ SEO-ready</span>
              <span>✓ Fast delivery</span>
              <span>✓ Clear pricing</span>
            </div>

          </div>

          {/* RIGHT ORBIT */}

          <PricingOrbit />

        </div>
      </section>

      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <section
        id="plans"
        className="bg-primary-soft/30 py-20 lg:py-10"
      >
        <div className="page">

          {/* Section heading */}

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              Business Website Packages
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
              Choose the right website
              <span className="text-gradient-light">
                {" "}package for your business.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Affordable website development packages built for
              speed, SEO, mobile users, lead generation and
              long-term business growth.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}
          </div>

          {/* Note */}

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
            *Support covers post-launch assistance within the
            included project scope. Third-party subscriptions,
            paid tools, advertising budgets and additional
            requirements are charged separately where applicable.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHY PRAYAVA
      ===================================================== */}

      <section className="py-20 lg:py-10">
        <div className="page">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">

            <div>

              <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
                Why PRAYAVA
              </p>

              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
                More than a website.
                <span className="text-gradient-light">
                  {" "}Built for growth.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted lg:text-base">
                Every PRAYAVA website combines responsive web
                design, fast performance, SEO-friendly structure
                and clear conversion paths to help your business
                attract and convert customers online.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                "Mobile-first website design",
                "Fast loading performance",
                "SEO-ready website structure",
                "Lead generation focused",
                "Conversion-friendly pages",
                "Scalable website foundation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-card px-4 py-4 text-sm shadow-card"
                >

                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10">
                    <Check className="size-3.5 text-accent" />
                  </span>

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-primary-soft/30 py-20 lg:py-10">
        <div className="page">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              Pricing FAQ
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)]">
              Questions before you start?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Everything you need to know before choosing your
              website design and development package.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-card shadow-card">

            {FAQS.map((faq, index) => (

              <details
                key={faq.question}
                className="group border-b border-line px-6 py-5 last:border-b-0"
                open={index === 0}
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold">

                  {faq.question}

                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">

                    <span className="text-lg leading-none transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>

                  </span>

                </summary>

                <p className="pt-4 pr-8 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pb-20 pt-10">
        <div className="page">

          <div className="hero-wash relative overflow-hidden rounded-3xl px-7 py-14 text-dark-fg sm:px-10 lg:px-16 lg:py-16">

            <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />

            <div className="pointer-events-none absolute -right-32 -bottom-40 size-[420px] rounded-full bg-accent/15 blur-3xl" />

            <div className="relative max-w-2xl">

              <p className="text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase">
                Ready to build?
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.8rem)] leading-none">
                Not sure which plan
                <span className="text-gradient">
                  {" "}is right for you?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-dark-muted lg:text-base">
                Tell us what your business needs and we'll help
                you choose the right website design and
                development package before we start.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Button asChild size="lg">
                  <Link to="/contact">
                    Talk to PRAYAVA
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <a
                  href="https://wa.me/919963154209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-dark-fg/20 px-5 text-sm font-semibold text-dark-fg transition-colors hover:border-accent/60 hover:text-accent"
                >
                  WhatsApp PRAYAVA
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </SiteShell>
  );
}

export default PricingPage;