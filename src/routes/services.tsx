import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Reveal } from "@/components/reveal";
import { SectionHead, SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  component: ServicesPage,

  head: () => ({
    meta: [
      {
        title: "Services — Web Development, SEO, Ads & AI | PRAYAVA",
      },
      {
        name: "description",
        content:
          "Explore PRAYAVA's web development, SEO, social media, branding, paid ads and AI solutions built for business growth.",
      },
    ],
  }),
});

export function ServicesPage() {
  return (
    <SiteShell>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -top-40 right-[-120px] size-[500px] rounded-full bg-accent/15 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] size-[500px] rounded-full bg-primary/20 blur-3xl" />

        <div className="page relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-15">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-dark-fg/10 bg-dark-fg/6 px-3.5 py-2 text-[10px] font-extrabold tracking-[0.18em] text-accent uppercase backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" />
              Our services
            </div>

            <h1 className="mt-7 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.94]">
              Everything you need to{" "}
              <span className="text-gradient">grow online.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-dark-muted lg:text-lg">
              We combine strategy, design, technology and marketing into
              practical digital systems that help your business get found,
              trusted and chosen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a project
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="darkOutline">
                <Link to="/audit">
                  Get free growth audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-dark-muted">
              <span className="inline-flex items-center gap-2">
                <Check className="size-3.5 text-accent" />
                Strategy first
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="size-3.5 text-accent" />
                Built for results
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="size-3.5 text-accent" />
                One growth partner
              </span>
            </div>
          </div>

          <ServicesHeroVisual />
        </div>
      </section>

      {/* =========================================================
          SERVICE NAVIGATION
      ========================================================= */}

      <section className="sticky top-[72px] z-30 border-b border-line bg-bg/90 py-3 backdrop-blur-xl">
        <div className="page">
          <div className="flex overflow-x-auto scrollbar-none">
            <div className="flex min-w-max gap-2">
              {SERVICES.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="rounded-full border border-line bg-card px-4 py-2 text-xs font-bold text-muted transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="py-20 lg:py-10">
        <div className="page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
                The PRAYAVA system
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)]">
                One partner.
                <br />
                <span className="text-gradient-light">
                  Multiple growth levers.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted">
              You don't need ten different agencies managing ten different
              pieces of your business. PRAYAVA brings your digital presence
              together — from the website and brand to search visibility,
              campaigns and automation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <SystemCard
              icon={Target}
              title="Get discovered"
              copy="Build visibility across search, social and paid channels."
            />

            <SystemCard
              icon={Sparkles}
              title="Build trust"
              copy="Create a strong digital presence that makes your business look credible."
            />

            <SystemCard
              icon={TrendingUp}
              title="Convert & grow"
              copy="Turn attention into enquiries, customers and measurable growth."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPLORE EACH SERVICE
      ========================================================= */}

      <section className="bg-primary-soft/45 py-20 lg:py-10">
        <div className="page">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
              Explore each service
            </p>

            <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-tight">
              Digital solutions built for{" "}
              <span className="text-gradient-light">
                real business growth.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Choose the service you need and tell us what you want to achieve.
              We'll create the right solution around your business.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={80}>
                <ServiceDetail
                  service={service}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GROWTH MODEL
      ========================================================= */}

      <section className="py-20 lg:py-10">
  <div className="page">
    <SectionHead
      kicker="How the pieces connect"
      title={
        <>
          Better together.
          <br />
          <span className="text-gradient-light">
            Built as one system.
          </span>
        </>
      }
      copy="Your website, visibility, campaigns and automation should work together — not operate as separate projects."
    />

    <div className="mt-12 grid gap-4 md:grid-cols-4">
      <GrowthStep
        number="01"
        title="Attract"
        copy="SEO, social and paid campaigns bring the right people in."
      />

      <GrowthStep
        number="02"
        title="Engage"
        copy="Strong branding and content make your business memorable."
      />

      <GrowthStep
        number="03"
        title="Convert"
        copy="High-performing websites turn visitors into enquiries."
      />

      <GrowthStep
        number="04"
        title="Automate"
        copy="AI and smart systems reduce repetitive work and improve follow-up."
      />
    </div>
  </div>
</section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-20 lg:py-10">
        <div className="page">
          <div className="hero-wash relative overflow-hidden rounded-3xl px-7 py-14 text-dark-fg sm:px-10 lg:px-16 lg:py-20">
            <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />

            <div className="pointer-events-none absolute -right-32 -bottom-40 size-[420px] rounded-full bg-accent/15 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase">
                <Zap className="size-3.5" />
                Ready to grow?
              </div>

              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[1]">
                Don't know which service{" "}
                <span className="text-gradient">you need?</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-muted">
                Tell us where your business is today. We'll help you identify
                the right digital opportunities and build a practical plan
                around them.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="darkOutline">
                  <a
                    href="https://wa.me/919963154209"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect WhatsApp
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="darkOutline">
                  <a href="tel:+919963154209">
                    Call PRAYAVA
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* ===============================================================
   HERO VISUAL
=============================================================== */

function ServicesHeroVisual() {
  return (
    <div className="relative mx-auto hidden h-[430px] w-full max-w-[500px] lg:block">
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      <div className="absolute left-1/2 top-1/2 size-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark-fg/10" />

      <div className="absolute left-1/2 top-1/2 size-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />

      <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/30 bg-dark-fg/8 shadow-dark backdrop-blur-md">
        <BrandMark className="size-[92px]" />
      </div>

      <FloatingService
        title="Web"
        subtitle="Convert"
        position="left-0 top-16"
      />

      <FloatingService
        title="SEO"
        subtitle="Get found"
        position="right-0 top-10"
      />

      <FloatingService
        title="Ads"
        subtitle="Attract"
        position="right-4 bottom-16"
      />

      <FloatingService
        title="AI"
        subtitle="Automate"
        position="left-4 bottom-10"
      />

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
    </div>
  );
}

/* ===============================================================
   FLOATING SERVICE
=============================================================== */

function FloatingService({
  title,
  subtitle,
  position,
}: {
  title: string;
  subtitle: string;
  position: string;
}) {
  return (
    <div
      className={cn(
        "absolute min-w-[135px] rounded-xl border border-dark-fg/10 bg-dark-fg/7 px-4 py-3 backdrop-blur-md",
        position,
      )}
    >
      <strong className="block text-sm text-dark-fg">
        {title}
      </strong>

      <span className="mt-0.5 block text-[10px] font-semibold text-dark-muted">
        {subtitle}
      </span>
    </div>
  );
}

/* ===============================================================
   SYSTEM CARD
=============================================================== */

function SystemCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof Target;
  title: string;
  copy: string;
}) {
  return (
    <article className="rounded-2xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="size-5" />
      </span>

      <h3 className="mt-5 font-display text-xl">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">
        {copy}
      </p>
    </article>
  );
}

/* ===============================================================
   SERVICE DETAIL
=============================================================== */

function ServiceDetail({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article
      id={service.slug}
      className={cn(
        "scroll-mt-32 grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>div:first-child]:order-2",
      )}
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden rounded-3xl bg-dark p-2 shadow-dark">
        <div className="relative overflow-hidden rounded-[20px]">
          <img
            src={service.image}
            alt={service.name}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-dark/75 px-4 py-3 backdrop-blur-md">
            <span className="block text-[10px] font-extrabold tracking-[0.16em] text-accent uppercase">
              {service.number}
            </span>

            <strong className="mt-1 block text-sm text-white">
              {service.badge}
            </strong>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div>
        <p className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
          {service.lever}
        </p>

        <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.3rem)] leading-tight">
          {service.name}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {service.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-line bg-card px-3.5 py-2 text-xs font-semibold text-fg"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* QUOTE BUTTON */}

        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/contact">
              Get a quote
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

/* ===============================================================
   GROWTH STEP
=============================================================== */
function GrowthStep({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="rounded-2xl bg-dark p-6 text-dark-fg shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span className="font-display text-4xl font-bold text-accent/40">
        {number}
      </span>

      <h3 className="mt-5 font-display text-xl text-dark-fg">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-dark-muted">
        {copy}
      </p>
    </article>
  );
}