import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChartLine, C as Globe, D as Cookie, E as Cpu, O as CircleCheck, S as GraduationCap, T as DoorOpen, b as Leaf, c as Store, d as ShoppingBag, f as Share2, i as Users, j as Building2, m as Monitor, n as Wallet, o as Timer, p as Palette, r as UtensilsCrossed, s as Target, u as Sparkles, v as Megaphone, w as FileText, x as HeartPulse, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { b as cn } from "./router-a7VMTo3K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-icon-CU6XD3Ve.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICE_ICONS = {
	megaphone: Megaphone,
	monitor: Monitor,
	palette: Palette,
	lineChart: ChartLine,
	share: Share2,
	cpu: Cpu,
	target: Target,
	fileText: FileText
};
var WHY_ICONS = {
	wallet: Wallet,
	timer: Timer,
	check: CircleCheck,
	users: Users,
	lifeBuoy: LifeBuoy,
	spark: Sparkles
};
var IND_ICONS = {
	store: Store,
	utensils: UtensilsCrossed,
	heart: HeartPulse,
	building: Building2,
	graduation: GraduationCap,
	bag: ShoppingBag
};
var PORTFOLIO_ICONS = {
	doorOpen: DoorOpen,
	cookie: Cookie,
	globe: Globe,
	leaf: Leaf
};
function IconTile({ icon, className, tone = "brand" }) {
	const Icon = icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-12 place-items-center rounded-[15px] shadow-[0_9px_22px_rgb(109_40_217_/_0.18)]", tone === "brand" && "bg-primary text-dark-fg", tone === "teal" && "bg-accent text-dark", tone === "dark" && "bg-dark-fg/10 text-dark-fg", tone === "soft" && "bg-primary-soft text-primary shadow-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-5",
			strokeWidth: 1.8
		})
	});
}
function ServiceGlyph({ name, className, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
		icon: SERVICE_ICONS[name],
		className,
		tone
	});
}
function WhyGlyph({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
		icon: WHY_ICONS[name],
		className,
		tone: "soft"
	});
}
function IndustryGlyph({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
		icon: IND_ICONS[name],
		className,
		tone: "soft"
	});
}
function PortfolioGlyph({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
		icon: PORTFOLIO_ICONS[name],
		className,
		tone: "soft"
	});
}
//#endregion
export { WhyGlyph as i, PortfolioGlyph as n, ServiceGlyph as r, IndustryGlyph as t };
