import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("CONSOLE", m.text());
});

await page.goto("http://127.0.0.1:8080/audit", { waitUntil: "networkidle" });
for (let i = 0; i < 6; i++) {
  await page.getByRole("button", { name: /No website yet|We're barely|None, or a dead|Never run ads|Exploring|Launch a proper/ }).first().click();
  await page.getByRole("button", { name: /Continue|See my score/ }).click();
  await page.waitForTimeout(200);
}
await page.screenshot({ path: "/workspace/screenshots/audit-result.png" });
const score = await page.locator("text=/\\/ 100/").count();
console.log("score visible", score > 0);

await page.goto("http://127.0.0.1:8080/contact", { waitUntil: "networkidle" });
await page.getByLabel("Full name").fill("Anita Rao");
await page.getByLabel("Email address").fill("anita@example.com");
await page.getByLabel("Phone number").fill("9876543210");
await page.getByLabel("Tell us about your business").fill("Boutique in Banjara Hills");
await page.getByRole("button", { name: "Send my details" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: "/workspace/screenshots/contact-success.png" });
const thanks = await page.getByText("Thank you").count();
console.log("thanks visible", thanks > 0);

await browser.close();
