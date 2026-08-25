import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import { saveAudit, type AuditResult } from "@/lib/leads";
import { getService } from "@/lib/content";
import { cn } from "@/lib/utils";

type Option = { label: string; hint?: string; points: number; rec?: string[] };

type Question = {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "website",
    title: "How does your website feel today?",
    subtitle: "Be honest — this is how customers see you first.",
    options: [
      { label: "No website yet", hint: "People can't find you after hours", points: 0, rec: ["web-development"] },
      { label: "Basic or outdated", hint: "It exists, but it doesn't convert", points: 1, rec: ["web-development", "branding-design"] },
      { label: "Looks fine, weak on leads", hint: "Pretty, but the phone isn't ringing", points: 2, rec: ["digital-marketing", "seo-analytics"] },
      { label: "Fast, mobile, converting", hint: "A solid home base", points: 4 },
    ],
  },
  {
    id: "google",
    title: "When someone Googles your service, where do you show up?",
    subtitle: "Most customers never look past page one.",
    options: [
      { label: "We're barely on Google", points: 0, rec: ["seo-analytics"] },
      { label: "Listed, but not ranking", points: 1, rec: ["seo-analytics", "google-paid-ads"] },
      { label: "Page 2–3 for a few keywords", points: 2, rec: ["seo-analytics", "content-marketing"] },
      { label: "First page for our main services", points: 4 },
    ],
  },
  {
    id: "social",
    title: "How active is your social presence?",
    subtitle: "Consistency beats virality.",
    options: [
      { label: "None, or a dead page", points: 0, rec: ["social-media-marketing"] },
      { label: "Occasional posts", points: 1, rec: ["social-media-marketing"] },
      { label: "Regular, but no real strategy", points: 2, rec: ["social-media-marketing", "content-marketing"] },
      { label: "Active, with engagement", points: 4 },
    ],
  },
  {
    id: "ads",
    title: "Have you tried paid ads?",
    subtitle: "Ads can fill the gap while SEO compounds.",
    options: [
      { label: "Never run ads", points: 0, rec: ["google-paid-ads"] },
      { label: "Tried once, then stopped", points: 1, rec: ["google-paid-ads"] },
      { label: "Running, without tracking", points: 2, rec: ["google-paid-ads", "ai-solutions"] },
      { label: "Optimized campaigns with tracking", points: 4 },
    ],
  },
  {
    id: "budget",
    title: "What's a comfortable monthly growth budget?",
    subtitle: "We'll recommend a plan that fits — not a package you don't need.",
    options: [
      { label: "Exploring / under ₹10,000", points: 1 },
      { label: "₹10,000 – ₹40,000", points: 2 },
      { label: "₹40,000 – ₹1,00,000", points: 3 },
      { label: "₹1,00,000+", points: 4 },
    ],
  },
  {
    id: "goal",
    title: "If we could move one needle this quarter, what would it be?",
    subtitle: "This shapes the first 90 days.",
    options: [
      { label: "Launch a proper website", points: 1, rec: ["web-development", "branding-design"] },
      { label: "Rank on Google", points: 2, rec: ["seo-analytics", "content-marketing"] },
      { label: "More leads and customers", points: 3, rec: ["digital-marketing", "google-paid-ads"] },
      { label: "A full growth system", points: 4, rec: ["digital-marketing", "ai-solutions"] },
    ],
  },
];

function scoreToPlan(score: number, budgetPoints: number): AuditResult["plan"] {
  if (budgetPoints >= 4 || score >= 18) return "Enterprise";
  if (budgetPoints >= 2 || score >= 10) return "Growth";
  return "Starter";
}

export function AuditWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<AuditResult | null>(null);

  const q = QUESTIONS[step];
  const progress = ((step + (result ? 1 : 0)) / QUESTIONS.length) * 100;
  const selected = q ? answers[q.id] : undefined;

  const recs = useMemo(() => {
    if (!result) return [];
    return result.recommendedServices;
  }, [result]);

  function pick(index: number) {
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: index }));
  }

  function next() {
    if (!q || selected === undefined) return;
    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    const labels: Record<string, string> = {};
    const recSet = new Set<string>();
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
    const score = Math.round((points / max) * 100);
    const payload: AuditResult = {
      score,
      plan,
      answers: labels,
      recommendedServices: [...recSet].slice(0, 4),
      completedAt: new Date().toISOString(),
    };
    saveAudit(payload);
    setResult(payload);
  }

  if (result) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl bg-card p-7 shadow-card sm:p-9">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-primary uppercase">
            Your growth score
          </p>
          <div className="mt-5 flex items-end gap-4">
            <span className="font-display text-7xl tracking-tight text-fg tabular-nums">
              {result.score}
            </span>
            <span className="mb-3 text-sm text-muted">/ 100</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Recommended starting plan:{" "}
            <strong className="text-fg">{result.plan}</strong>. This is a
            snapshot, not a verdict — a 30-minute call will refine it.
          </p>
          {recs.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-bold tracking-wide text-muted uppercase">
                Fastest levers
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {recs.map((slug) => (
                  <Link
                    key={slug}
                    to="/services/$slug"
                    params={{ slug }}
                    className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary"
                  >
                    {getService(slug)?.name ?? slug}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/pricing">See {result.plan} plan</Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setResult(null);
                setStep(0);
                setAnswers({});
              }}
            >
              Retake audit
            </Button>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-7 shadow-card sm:p-8">
          <h3 className="font-display text-xl">Get the full readout</h3>
          <p className="mt-1 mb-5 text-sm text-muted">
            Leave your details and we'll send a plain-language plan based on
            this score.
          </p>
          <LeadForm
            compact
            source="audit"
            auditScore={result.score}
            recommendedPlan={result.plan}
            defaultService={
              result.plan === "Starter"
                ? "Website Design & Development"
                : result.plan === "Enterprise"
                  ? "Not sure yet — need advice"
                  : "SEO & Google Ranking"
            }
            defaultMessage={`Growth audit score: ${result.score}/100. Recommended plan: ${result.plan}.`}
          />
        </div>
      </div>
    );
  }

  if (!q) return null;

  return (
    <div className="rounded-2xl bg-card p-6 shadow-card sm:p-9">
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${Math.max(progress, 8)}%` }}
        />
      </div>
      <p className="text-[11px] font-extrabold tracking-[0.16em] text-primary uppercase">
        Step {step + 1} of {QUESTIONS.length}
      </p>
      <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)]">{q.title}</h2>
      <p className="mt-2 text-sm text-muted">{q.subtitle}</p>
      <div className="mt-7 grid gap-3">
        {q.options.map((opt, i) => {
          const on = selected === i;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => pick(i)}
              className={cn(
                "flex min-h-14 items-start gap-3 rounded-xl border px-4 py-4 text-left transition-[border-color,background-color,box-shadow] duration-150",
                on
                  ? "border-primary bg-primary-soft shadow-card"
                  : "border-line bg-bg hover:border-primary/30",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border",
                  on ? "border-primary bg-primary text-dark-fg" : "border-line",
                )}
              >
                {on && <Check className="size-3" strokeWidth={3} />}
              </span>
              <span>
                <span className="block text-sm font-semibold">{opt.label}</span>
                {opt.hint && <span className="mt-0.5 block text-xs text-muted">{opt.hint}</span>}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          <ArrowLeft className="size-4" />
          Back
        </Button>
        <Button onClick={next} disabled={selected === undefined}>
          {step === QUESTIONS.length - 1 ? "See my score" : "Continue"}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
