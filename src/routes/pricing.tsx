import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { FaqSection, PricingSection } from "@/components/home-sections";
import { SiteShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [{ title: "Pricing — Plans that fit your budget | PRAYAVA" }],
  }),
});

const ROWS: { label: string; starter: boolean | string; growth: boolean | string; enterprise: boolean | string }[] = [
  { label: "Business website", starter: "5 pages", growth: "5 pages + landing", enterprise: "Custom / app" },
  { label: "On-page SEO", starter: true, growth: true, enterprise: true },
  { label: "Google Business Profile", starter: true, growth: true, enterprise: true },
  { label: "Content strategy", starter: false, growth: true, enterprise: true },
  { label: "Paid ads management", starter: false, growth: true, enterprise: true },
  { label: "Social platforms", starter: "1", growth: "3", enterprise: "Full mix" },
  { label: "AI automation", starter: false, growth: false, enterprise: true },
  { label: "Dedicated manager", starter: false, growth: false, enterprise: true },
  { label: "Monthly report", starter: true, growth: "Dashboard", enterprise: "Strategy calls" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4 text-accent" />;
  if (value === false) return <Minus className="mx-auto size-4 text-line" />;
  return <span className="text-xs font-semibold">{value}</span>;
}

function PricingPage() {
  return (
    <SiteShell>
      <section className="hero-wash relative overflow-hidden text-dark-fg">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-40" />
        <div className="page relative py-16 text-center lg:py-20">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-accent uppercase">
            Simple pricing
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)]">
            Start small. <span className="text-gradient">Scale what works.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dark-muted">
            Every plan is a starting point. We quote in writing after a free
            audit — no surprise retainers.
          </p>
        </div>
      </section>
      <PricingSection id="plans" />
      <section className="pb-16">
        <div className="page overflow-x-auto">
          <table className="w-full min-w-[640px] overflow-hidden rounded-xl bg-card text-left shadow-card">
            <thead>
              <tr className="border-b border-line text-sm">
                <th className="px-5 py-4 font-display font-semibold">Compare</th>
                <th className="px-5 py-4 text-center font-display">Starter</th>
                <th className="px-5 py-4 text-center font-display text-primary">Growth</th>
                <th className="px-5 py-4 text-center font-display">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={cn("border-b border-line", i % 2 === 1 && "bg-bg/60")}>
                  <td className="px-5 py-3.5 text-sm">{row.label}</td>
                  <td className="px-5 py-3.5 text-center text-muted">
                    <Cell value={row.starter} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.growth} />
                  </td>
                  <td className="px-5 py-3.5 text-center text-muted">
                    <Cell value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="page mt-8 text-center">
          <Button asChild size="lg">
            <Link to="/contact">Get a custom quote</Link>
          </Button>
        </div>
      </section>
      <FaqSection />
    </SiteShell>
  );
}
