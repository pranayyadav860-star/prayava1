import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Search,
  Target,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-chrome";
import { SITE } from "@/lib/content";

type ContactSearch = {
  plan?: string;
  service?: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
    service: typeof search.service === "string" ? search.service : undefined,
  }),

  component: ContactPage,

  head: () => ({
    meta: [
      {
        title: "Contact PRAYAVA | Digital Marketing, SEO & Web Development",
      },
      {
        name: "description",
        content:
          "Talk to PRAYAVA about web development, SEO, lead generation, Google Ads and digital marketing. Get a practical growth plan for your business.",
      },
      {
        name: "keywords",
        content:
          "digital marketing agency, SEO services, web development, lead generation, Google Ads, social media marketing, AI solutions, Hyderabad",
      },
    ],
  }),
});

function ContactPage() {
  const { plan, service } = Route.useSearch();

  const defaultService = service
    ? matchService(service)
    : plan
      ? "Not sure yet — need advice"
      : undefined;

  const defaultMessage = plan
    ? `I'm interested in the ${plan} plan.`
    : service
      ? `I'd like to talk about ${service}.`
      : undefined;

  return (
    <SiteShell>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-32 right-[-120px] size-[360px] rounded-full bg-accent/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-[-120px] size-[320px] rounded-full bg-primary/15 blur-3xl" />

        <div className="page relative grid items-center gap-8 py-14 lg:grid-cols-[1.15fr_0.7fr] lg:py-16">
          {/* LEFT */}

          <div className="relative z-10 max-w-2xl">
            <p className="text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase">
              Start a conversation
            </p>

            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]">
              Let's build a{" "}
              <span className="text-gradient">
                stronger digital presence.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-dark-muted lg:text-base">
              Tell us about your business, website or marketing goals.
              We'll help you find practical ways to improve SEO, generate
              better leads and grow online.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Web Development",
                "SEO",
                "Lead Generation",
                "Google Ads",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-dark-fg/10 bg-dark-fg/6 px-3 py-1.5 text-[10px] font-semibold text-dark-fg/80"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT ORBIT */}

          <ContactOrbit />
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}

      <section className="py-16 lg:py-20">
        <div className="page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT */}

          <div>
            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              What happens next
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              A simple path from{" "}
              <span className="text-gradient-light">
                idea to action.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              No complicated sales process. We first understand your business,
              then identify the digital opportunities that can make the biggest
              difference.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  number: "01",
                  title: "Tell us about your business",
                  text: "Share your goals, current website and the challenges you want to solve.",
                },
                {
                  number: "02",
                  title: "We find the opportunities",
                  text: "We look at your website, SEO, lead generation and current marketing.",
                },
                {
                  number: "03",
                  title: "You get a clear direction",
                  text: "We'll recommend practical next steps based on your goals and budget.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft font-display text-sm text-primary">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-display text-base">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-primary-soft/50 p-5">
              <p className="text-sm font-semibold">
                Prefer email?
              </p>

              <a
                className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>

              <p className="mt-1 text-xs text-muted">
                {SITE.city}
              </p>
            </div>
          </div>

          {/* FORM */}

          <div className="rounded-2xl bg-card p-6 shadow-card sm:p-8">
            <div className="mb-6">
              <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
                Free consultation
              </p>

              <h2 className="mt-2 font-display text-2xl">
                Tell us what you need
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Share a few details and we'll get back to you with the next
                best step.
              </p>
            </div>

            <LeadForm
              defaultService={defaultService}
              defaultMessage={defaultMessage}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SEO / SERVICE VALUE
      ========================================================= */}

      <section className="bg-primary-soft/35 py-10">
        <div className="page">
          <div className="max-w-3xl">
            <p className="text-[10px] font-extrabold tracking-[0.18em] text-primary uppercase">
              Digital growth services
            </p>

            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              One partner for your{" "}
              <span className="text-gradient-light">
                online growth.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
              Whether you need a faster website, better Google rankings,
              qualified leads or more effective advertising, PRAYAVA connects
              the right digital services around your business goals.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ContactValue
              icon={<Globe2 className="size-4" />}
              title="Web Development"
              text="Fast, responsive websites designed to turn visitors into enquiries."
            />

            <ContactValue
              icon={<Search className="size-4" />}
              title="SEO Services"
              text="Search-friendly websites and SEO strategies built for long-term visibility."
            />

            <ContactValue
              icon={<Target className="size-4" />}
              title="Lead Generation"
              text="Landing pages, campaigns and conversion systems focused on qualified leads."
            />

            <ContactValue
              icon={<BarChart3 className="size-4" />}
              title="Google Ads"
              text="Targeted paid campaigns designed to reach customers actively searching."
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* =========================================================
   CONTACT ORBIT
========================================================= */

function ContactOrbit() {
  const items = [
    {
      title: "Get found",
      subtitle: "SEO",
      icon: Search,
      position: "top-2 left-2",
    },
    {
      title: "Get leads",
      subtitle: "Lead Generation",
      icon: Target,
      position: "top-16 right-0",
    },
    {
      title: "Get noticed",
      subtitle: "Google Ads",
      icon: BarChart3,
      position: "bottom-16 left-0",
    },
    {
      title: "Convert",
      subtitle: "Web Development",
      icon: Globe2,
      position: "bottom-2 right-4",
    },
  ];

  return (
    <div className="relative mx-auto hidden h-[330px] w-full max-w-[390px] lg:block">
      {/* ORBITS */}

      <div className="absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      <div className="absolute left-1/2 top-1/2 size-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/8" />

      {/* CENTER */}

      <div className="absolute left-1/2 top-1/2 grid size-[90px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-dark-fg/10 bg-dark-fg/8 shadow-dark backdrop-blur-md">
        <div className="text-center">
          <strong className="block font-display text-lg">
            PRAYAVA
          </strong>

          <span className="text-[8px] font-bold tracking-[0.16em] text-accent uppercase">
            Growth
          </span>
        </div>
      </div>

      {/* ORBIT ITEMS */}

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`absolute ${item.position} flex min-w-[135px] items-center gap-2.5 rounded-xl border border-dark-fg/10 bg-dark-fg/8 px-3 py-2.5 backdrop-blur-md`}
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon className="size-3.5" />
            </span>

            <span>
              <strong className="block text-[11px]">
                {item.title}
              </strong>

              <small className="text-[9px] text-dark-muted">
                {item.subtitle}
              </small>
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   VALUE CARD
========================================================= */

function ContactValue({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-xl bg-card p-5 shadow-card">
      <div className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </div>

      <h3 className="mt-4 font-display text-base">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-muted">
        {text}
      </p>
    </article>
  );
}

function matchService(name: string) {
  const map: Record<string, string> = {
    "Digital Marketing": "Not sure yet — need advice",
    "Web Development": "Website Design & Development",
    "Branding & Design": "Branding & Design",
    "SEO & Analytics": "SEO & Google Ranking",
    "Social Media Marketing": "Social Media Marketing",
    "AI Solutions": "AI Solutions",
    "Google & Paid Ads": "Google & Paid Ads",
    "Content Marketing": "SEO & Google Ranking",
  };

  return map[name] ?? "Not sure yet — need advice";
}