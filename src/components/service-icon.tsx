import {
  Cpu,
  FileText,
  LineChart,
  Megaphone,
  Monitor,
  Palette,
  Share2,
  Target,
  Wallet,
  Timer,
  CircleCheck,
  Users,
  LifeBuoy,
  Sparkles,
  Store,
  UtensilsCrossed,
  HeartPulse,
  Building2,
  GraduationCap,
  ShoppingBag,
  DoorOpen,
  Cookie,
  Globe,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioIcon, ServiceIcon } from "@/lib/content";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  megaphone: Megaphone,
  monitor: Monitor,
  palette: Palette,
  lineChart: LineChart,
  share: Share2,
  cpu: Cpu,
  target: Target,
  fileText: FileText,
};

const WHY_ICONS = {
  wallet: Wallet,
  timer: Timer,
  check: CircleCheck,
  users: Users,
  lifeBuoy: LifeBuoy,
  spark: Sparkles,
} as const;

const IND_ICONS = {
  store: Store,
  utensils: UtensilsCrossed,
  heart: HeartPulse,
  building: Building2,
  graduation: GraduationCap,
  bag: ShoppingBag,
} as const;

const PORTFOLIO_ICONS: Record<PortfolioIcon, LucideIcon> = {
  doorOpen: DoorOpen,
  cookie: Cookie,
  globe: Globe,
  leaf: Leaf,
};

export function IconTile({
  icon,
  className,
  tone = "brand",
}: {
  icon: LucideIcon;
  className?: string;
  tone?: "brand" | "teal" | "dark" | "soft";
}) {
  const Icon = icon;
  return (
    <span
      className={cn(
        "grid size-12 place-items-center rounded-[15px] shadow-[0_9px_22px_rgb(109_40_217_/_0.18)]",
        tone === "brand" && "bg-primary text-dark-fg",
        tone === "teal" && "bg-accent text-dark",
        tone === "dark" && "bg-dark-fg/10 text-dark-fg",
        tone === "soft" && "bg-primary-soft text-primary shadow-none",
        className,
      )}
    >
      <Icon className="size-5" strokeWidth={1.8} />
    </span>
  );
}

export function ServiceGlyph({
  name,
  className,
  tone,
}: {
  name: ServiceIcon;
  className?: string;
  tone?: "brand" | "teal" | "dark" | "soft";
}) {
  return <IconTile icon={SERVICE_ICONS[name]} className={className} tone={tone} />;
}

export function WhyGlyph({
  name,
  className,
}: {
  name: keyof typeof WHY_ICONS;
  className?: string;
}) {
  return <IconTile icon={WHY_ICONS[name]} className={className} tone="soft" />;
}

export function IndustryGlyph({
  name,
  className,
}: {
  name: keyof typeof IND_ICONS;
  className?: string;
}) {
  return <IconTile icon={IND_ICONS[name]} className={className} tone="soft" />;
}

export function PortfolioGlyph({
  name,
  className,
}: {
  name: PortfolioIcon;
  className?: string;
}) {
  return <IconTile icon={PORTFOLIO_ICONS[name]} className={className} tone="soft" />;
}
