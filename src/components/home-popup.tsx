import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HomeLeadPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);

      requestAnimationFrame(() => {
        setVisible(true);
      });
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    setVisible(false);

    window.setTimeout(() => {
      setOpen(false);
    }, 200);
  }

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center px-4 pb-5 sm:items-center sm:pb-0 transition-all duration-300 ${
        visible
          ? "bg-dark/35 backdrop-blur-[3px]"
          : "bg-transparent"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
    >
      <div
        className={`relative w-full max-w-[430px] transform transition-all duration-500 ease-out ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-[0.96] opacity-0"
        }`}
      >
        {/* Subtle glow */}
        <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-primary/10 blur-2xl" />

        <div className="relative overflow-hidden rounded-2xl border border-line/70 bg-card shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
          {/* Premium accent line */}
          <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
            <div className="h-full w-1/2 animate-[slide_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close popup"
            className="absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full bg-bg/70 text-muted transition-all duration-200 hover:rotate-90 hover:bg-primary-soft hover:text-fg"
          >
            <X className="size-4" />
          </button>

          <div className="p-5 sm:p-6">
            {/* Top label */}
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
                <Sparkles className="size-4" />
              </span>

              <div>
                <p className="text-[9px] font-extrabold tracking-[0.18em] text-primary uppercase">
                  Growth opportunity
                </p>

                <p className="text-[11px] text-muted">
                  Built around your business
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2
              id="lead-popup-title"
              className="mt-4 max-w-sm font-display text-[clamp(1.7rem,6vw,2.25rem)] leading-[1.02] tracking-[-0.035em]"
            >
              Ready for{" "}
              <span className="text-gradient">
                better leads?
              </span>
            </h2>

            <p className="mt-2.5 max-w-sm text-xs leading-relaxed text-muted">
              Tell us where you want to grow. We&apos;ll help
              you identify the right digital moves to attract,
              convert and scale better customers.
            </p>

            {/* Lead generation moves */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                {
                  number: "01",
                  title: "Attract",
                  text: "Reach the right audience",
                },
                {
                  number: "02",
                  title: "Convert",
                  text: "Turn visits into enquiries",
                },
                {
                  number: "03",
                  title: "Scale",
                  text: "Build predictable growth",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-xl border border-line/60 bg-bg/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary-soft/40"
                >
                  <span className="text-[9px] font-extrabold tracking-wider text-primary">
                    {item.number}
                  </span>

                  <p className="mt-1 text-xs font-bold text-fg">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[9px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5 grid gap-2.5">
              <Link
                to="/contact"
                onClick={closePopup}
                className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />

                <span className="relative">
                  Talk to a Growth Expert
                </span>

                <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="https://wa.me/919963154209"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-line bg-bg text-xs font-bold text-fg transition-all duration-300 hover:border-accent hover:bg-accent/5"
              >
                <MessageCircle className="size-3.5 text-accent" />
                Start a conversation
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-muted">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px] shadow-accent/10" />
              No pressure. Just a smarter growth conversation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}