import { cn } from "@/lib/utils";

export function BrandMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <img
      src="/images/prayava-logo.png"
      alt="PRAYAVA"
      className={cn("h-8 w-auto shrink-0 object-contain", className)}
      style={inverted ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}

export function BrandLockup({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <BrandMark inverted={inverted} className="h-9 max-w-[160px]" />
    </span>
  );
}
