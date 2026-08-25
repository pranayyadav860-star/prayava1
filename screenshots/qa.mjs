import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const shot = async (page, name) => {
  await page.screenshot({ path: `/workspace/screenshots/${name}.png`, fullPage: false });
};

const desktop = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await desktop.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await desktop.evaluate(() => document.getElementById("process")?.scrollIntoView());
await desktop.waitForTimeout(400);
await shot(desktop, "home-process");
await desktop.evaluate(() => document.getElementById("pricing")?.scrollIntoView());
await desktop.waitForTimeout(400);
await shot(desktop, "home-pricing");
await desktop.goto("http://127.0.0.1:8080/services", { waitUntil: "networkidle" });
await shot(desktop, "services");
await desktop.goto("http://127.0.0.1:8080/audit", { waitUntil: "networkidle" });
await shot(desktop, "audit");
await desktop.goto("http://127.0.0.1:8080/contact", { waitUntil: "networkidle" });
await shot(desktop, "contact");
await desktop.goto("http://127.0.0.1:8080/services/seo-analytics", { waitUntil: "networkidle" });
await shot(desktop, "service-detail");

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.getByLabel("Open menu").click();
await mobile.waitForTimeout(300);
await shot(mobile, "mobile-menu");
await mobile.goto("http://127.0.0.1:8080/audit", { waitUntil: "networkidle" });
await shot(mobile, "audit-mobile");
await mobile.goto("http://127.0.0.1:8080/pricing", { waitUntil: "networkidle" });
await mobile.evaluate(() => window.scrollTo(0, 500));
await mobile.waitForTimeout(300);
await shot(mobile, "pricing-mobile");

await browser.close();
console.log("ok");
