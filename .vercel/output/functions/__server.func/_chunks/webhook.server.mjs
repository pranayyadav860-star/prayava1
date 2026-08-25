import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
//#region src/lib/env.server.ts
var loaded = false;
function ensureEnv() {
	if (loaded) return;
	loaded = true;
	try {
		const path = join(process.cwd(), ".env");
		if (!existsSync(path)) return;
		for (const line of readFileSync(path, "utf8").split("\n")) {
			const t = line.trim();
			if (!t || t.startsWith("#")) continue;
			const i = t.indexOf("=");
			if (i < 0) continue;
			const key = t.slice(0, i).trim();
			const val = t.slice(i + 1).trim();
			if (key && process.env[key] === void 0) process.env[key] = val;
		}
	} catch {}
}
function getWaConfig() {
	ensureEnv();
	return {
		token: process.env.WHATSAPP_TOKEN || "",
		phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
		version: process.env.WHATSAPP_API_VERSION || "v26.0",
		templateName: process.env.WHATSAPP_TEMPLATE_NAME || "prayava_lead_thank_you",
		templateLanguage: process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en",
		verifyToken: process.env.WHATSAPP_VERIFY_TOKEN || "prayava_webhook_verify_2026"
	};
}
function getBrevoConfig() {
	ensureEnv();
	return {
		apiKey: process.env.BREVO_API_KEY || "",
		senderEmail: process.env.BREVO_SENDER_EMAIL || "hello@prayava.co",
		senderName: process.env.BREVO_SENDER_NAME || "PRAYAVA"
	};
}
//#endregion
//#region migrations/0002_leads.sql?raw
var _0002_leads_default = "-- Lead capture + WhatsApp qualification sessions\nCREATE TABLE IF NOT EXISTS leads (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL,\n  phone TEXT NOT NULL DEFAULT '',\n  service TEXT NOT NULL DEFAULT '',\n  message TEXT NOT NULL DEFAULT '',\n  source TEXT NOT NULL DEFAULT 'contact',\n  audit_score INTEGER,\n  recommended_plan TEXT,\n  qualification_status TEXT NOT NULL DEFAULT 'pending',\n  qualification_score INTEGER,\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\nCREATE TABLE IF NOT EXISTS wa_sessions (\n  phone TEXT PRIMARY KEY,\n  lead_id TEXT REFERENCES leads(id) ON DELETE SET NULL,\n  step TEXT NOT NULL DEFAULT 'start',\n  name TEXT NOT NULL DEFAULT '',\n  answers JSONB NOT NULL DEFAULT '{}',\n  score INTEGER NOT NULL DEFAULT 0,\n  status TEXT NOT NULL DEFAULT 'active',\n  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\nCREATE INDEX IF NOT EXISTS leads_phone_idx ON leads (phone);\nCREATE INDEX IF NOT EXISTS leads_created_idx ON leads (created_at DESC);\nCREATE INDEX IF NOT EXISTS wa_sessions_status_idx ON wa_sessions (status);\n";
//#endregion
//#region scripts/migration-plan.mjs
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
//#endregion
//#region src/lib/db.ts
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_leads.sql": _0002_leads_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
//#endregion
//#region src/lib/whatsapp/client.server.ts
function normalizePhone(phone) {
	let digits = phone.replace(/\D/g, "");
	if (digits.length === 10) digits = "91" + digits;
	if (digits.startsWith("0") && digits.length === 11) digits = "91" + digits.slice(1);
	return digits;
}
async function waFetch(path, body) {
	const { token, phoneNumberId, version } = getWaConfig();
	if (!token || !phoneNumberId) return {
		ok: false,
		status: 0,
		error: "missing_whatsapp_config",
		data: null
	};
	const res = await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}${path}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
	let data = null;
	try {
		data = await res.json();
	} catch {}
	return {
		ok: res.ok,
		status: res.status,
		data,
		error: res.ok ? null : "api_error"
	};
}
async function sendText(to, body) {
	return waFetch("/messages", {
		messaging_product: "whatsapp",
		to: normalizePhone(to),
		type: "text",
		text: {
			preview_url: false,
			body
		}
	});
}
async function sendList(to, bodyText, buttonLabel, sections) {
	return waFetch("/messages", {
		messaging_product: "whatsapp",
		to: normalizePhone(to),
		type: "interactive",
		interactive: {
			type: "list",
			body: { text: bodyText.slice(0, 1024) },
			action: {
				button: buttonLabel.slice(0, 20),
				sections: sections.map((s) => ({
					title: s.title.slice(0, 24),
					rows: s.rows.slice(0, 10).map((r) => ({
						id: r.id.slice(0, 200),
						title: r.title.slice(0, 24),
						...r.description ? { description: r.description.slice(0, 72) } : {}
					}))
				}))
			}
		}
	});
}
//#endregion
//#region src/lib/whatsapp/qualify.server.ts
var SERVICE_OPTIONS = [
	{
		id: "svc_web",
		title: "Website / App",
		description: "Design & development"
	},
	{
		id: "svc_seo",
		title: "SEO & Google",
		description: "Rank & get found"
	},
	{
		id: "svc_ads",
		title: "Ads & Campaigns",
		description: "Paid growth"
	},
	{
		id: "svc_social",
		title: "Social Media",
		description: "Content & engagement"
	},
	{
		id: "svc_brand",
		title: "Branding",
		description: "Logo & identity"
	},
	{
		id: "svc_ai",
		title: "AI Solutions",
		description: "Chatbots & automation"
	},
	{
		id: "svc_unsure",
		title: "Not sure yet",
		description: "Need advice"
	}
];
var BUDGET_OPTIONS = [
	{
		id: "bud_10",
		title: "Under ₹10k"
	},
	{
		id: "bud_25",
		title: "₹10k – ₹25k"
	},
	{
		id: "bud_50",
		title: "₹25k – ₹50k"
	},
	{
		id: "bud_100",
		title: "₹50k – ₹1L"
	},
	{
		id: "bud_100p",
		title: "₹1L+"
	}
];
var TIMELINE_OPTIONS = [
	{
		id: "time_asap",
		title: "ASAP / this week"
	},
	{
		id: "time_month",
		title: "Within a month"
	},
	{
		id: "time_quarter",
		title: "1–3 months"
	},
	{
		id: "time_explore",
		title: "Just exploring"
	}
];
var BUSINESS_OPTIONS = [
	{
		id: "biz_solo",
		title: "Solo / freelancer"
	},
	{
		id: "biz_small",
		title: "Small business"
	},
	{
		id: "biz_agency",
		title: "Agency / brand"
	},
	{
		id: "biz_startup",
		title: "Startup"
	}
];
function scoreAnswers(a) {
	let score = 20;
	if (a.service && a.service !== "svc_unsure") score += 15;
	if (a.service === "svc_unsure") score += 5;
	score += {
		bud_10: 5,
		bud_25: 15,
		bud_50: 25,
		bud_100: 30,
		bud_100p: 35
	}[a.budget || ""] ?? 0;
	score += {
		time_asap: 25,
		time_month: 20,
		time_quarter: 10,
		time_explore: 5
	}[a.timeline || ""] ?? 0;
	if (a.business) score += 10;
	return Math.min(100, score);
}
function isHotLead(score) {
	return score >= 70;
}
function isWarmLead(score) {
	return score >= 45 && score < 70;
}
function labelOf(options, id) {
	return options.find((o) => o.id === id)?.title || id || "—";
}
async function upsertSession(opts) {
	const sql = await getSql();
	const phone = normalizePhone(opts.phone);
	const answersJson = JSON.stringify(opts.answers || {});
	await sql.query(`INSERT INTO wa_sessions (phone, lead_id, name, step, answers, score, status, updated_at)
     VALUES ($1, $2, $3, $4, $5::jsonb, $6, $7, NOW())
     ON CONFLICT (phone) DO UPDATE SET
       lead_id = COALESCE(EXCLUDED.lead_id, wa_sessions.lead_id),
       name = CASE WHEN EXCLUDED.name = '' THEN wa_sessions.name ELSE EXCLUDED.name END,
       step = EXCLUDED.step, answers = EXCLUDED.answers, score = EXCLUDED.score,
       status = EXCLUDED.status, updated_at = NOW()`, [
		phone,
		opts.leadId ?? null,
		opts.name || "",
		opts.step,
		answersJson,
		opts.score ?? 0,
		opts.status || "active"
	]);
}
async function getSession(phone) {
	const rows = await (await getSql())`SELECT phone, lead_id, name, step, answers, score, status FROM wa_sessions WHERE phone = ${normalizePhone(phone)} LIMIT 1`;
	if (!rows[0]) return null;
	const row = rows[0];
	const answers = typeof row.answers === "string" ? JSON.parse(row.answers) : row.answers || {};
	return {
		...row,
		answers,
		step: row.step
	};
}
async function notifyTeamQualified(opts) {
	const { apiKey, senderEmail, senderName } = getBrevoConfig();
	if (!apiKey) return;
	const tier = isHotLead(opts.score) ? "🔥 HOT" : isWarmLead(opts.score) ? "🟡 WARM" : "🔵 NURTURE";
	const html = `<h2>${tier} lead qualified via WhatsApp</h2>
    <p><strong>Name:</strong> ${opts.name || "—"}</p>
    <p><strong>Phone:</strong> ${opts.phone}</p>
    <p><strong>Score:</strong> ${opts.score}/100</p>
    <p><strong>Service:</strong> ${labelOf(SERVICE_OPTIONS, opts.answers.service)}</p>
    <p><strong>Budget:</strong> ${labelOf(BUDGET_OPTIONS, opts.answers.budget)}</p>
    <p><strong>Timeline:</strong> ${labelOf(TIMELINE_OPTIONS, opts.answers.timeline)}</p>
    <p><strong>Business:</strong> ${labelOf(BUSINESS_OPTIONS, opts.answers.business)}</p>`;
	await fetch("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			accept: "application/json",
			"content-type": "application/json",
			"api-key": apiKey
		},
		body: JSON.stringify({
			sender: {
				name: senderName,
				email: senderEmail
			},
			to: [{
				email: senderEmail,
				name: senderName
			}],
			subject: `${tier} WhatsApp lead — ${opts.name || opts.phone} (${opts.score})`,
			htmlContent: html
		})
	}).catch(() => null);
}
async function markLeadQualified(leadId, score) {
	if (!leadId) return;
	await (await getSql())`UPDATE leads SET qualification_status = ${isHotLead(score) ? "hot" : isWarmLead(score) ? "warm" : "nurture"}, qualification_score = ${score} WHERE id = ${leadId}`;
}
async function askBudget(phone) {
	await sendList(phone, "Got it. Roughly what budget range works for you?", "Select budget", [{
		title: "Budget",
		rows: BUDGET_OPTIONS
	}]);
}
async function askTimeline(phone) {
	await sendList(phone, "When would you like to get started?", "Select timeline", [{
		title: "Timeline",
		rows: TIMELINE_OPTIONS
	}]);
}
async function askBusiness(phone) {
	await sendList(phone, "Last one — what best describes your business?", "Select type", [{
		title: "Business type",
		rows: BUSINESS_OPTIONS
	}]);
}
async function finishQualification(phone, session, answers) {
	const score = scoreAnswers(answers);
	const name = session.name || "there";
	await upsertSession({
		phone,
		leadId: session.lead_id,
		name: session.name,
		step: "done",
		answers,
		score,
		status: "completed"
	});
	await markLeadQualified(session.lead_id, score);
	await notifyTeamQualified({
		name: session.name,
		phone,
		answers,
		score,
		leadId: session.lead_id
	});
	let message;
	if (isHotLead(score)) message = `Perfect, ${name}! ✅ You're a strong fit.\n\nA PRAYAVA strategist will reach out within a few hours with a tailored plan.\n\nMeanwhile, reply with any details about your project — we're listening.`;
	else if (isWarmLead(score)) message = `Thanks ${name}! ✅ We've got your details.\n\nOur team will review and share recommended next steps within 1 business day.\n\nQuestions? Just reply here.`;
	else message = `Thanks for sharing, ${name}. ✅\n\nWe'll send you useful resources and check in when the timing is right.\n\nYou can always reply here if priorities change.`;
	await sendText(phone, message);
}
async function handleInboundMessage(opts) {
	const phone = normalizePhone(opts.from);
	const replyId = opts.buttonId || opts.listId || "";
	const text = (opts.text || "").trim().toLowerCase();
	let session = await getSession(phone);
	if (!session || session.status === "completed") {
		const name = opts.profileName || "";
		await upsertSession({
			phone,
			name,
			step: "service",
			answers: {},
			status: "active"
		});
		await sendList(phone, `Hi${name ? ` ${name.split(" ")[0]}` : ""}! 👋 Welcome to PRAYAVA.\n\nWhich service are you interested in?`, "Choose service", [{
			title: "Services",
			rows: SERVICE_OPTIONS
		}]);
		return {
			ok: true,
			step: "service"
		};
	}
	const answers = { ...session.answers };
	if ([
		"restart",
		"start",
		"hi",
		"hello",
		"hey"
	].includes(text) && !replyId) {
		await upsertSession({
			phone,
			name: session.name,
			leadId: session.lead_id,
			step: "service",
			answers: {},
			score: 0,
			status: "active"
		});
		await sendList(phone, `Let's start fresh. Which service are you most interested in?`, "Choose service", [{
			title: "Services",
			rows: SERVICE_OPTIONS
		}]);
		return {
			ok: true,
			step: "service"
		};
	}
	switch (session.step) {
		case "start":
		case "service": {
			const valid = SERVICE_OPTIONS.some((o) => o.id === replyId);
			if (!valid && !text) {
				await sendList(phone, "Please pick a service from the list 👇", "Choose service", [{
					title: "Services",
					rows: SERVICE_OPTIONS
				}]);
				return {
					ok: true,
					step: "service"
				};
			}
			answers.service = valid ? replyId : SERVICE_OPTIONS.find((o) => o.title.toLowerCase().includes(text))?.id || "svc_unsure";
			await upsertSession({
				phone,
				name: session.name,
				leadId: session.lead_id,
				step: "budget",
				answers,
				status: "active"
			});
			await askBudget(phone);
			return {
				ok: true,
				step: "budget"
			};
		}
		case "budget":
			if (!BUDGET_OPTIONS.some((o) => o.id === replyId)) {
				await askBudget(phone);
				return {
					ok: true,
					step: "budget"
				};
			}
			answers.budget = replyId;
			await upsertSession({
				phone,
				name: session.name,
				leadId: session.lead_id,
				step: "timeline",
				answers,
				status: "active"
			});
			await askTimeline(phone);
			return {
				ok: true,
				step: "timeline"
			};
		case "timeline":
			if (!TIMELINE_OPTIONS.some((o) => o.id === replyId)) {
				await askTimeline(phone);
				return {
					ok: true,
					step: "timeline"
				};
			}
			answers.timeline = replyId;
			await upsertSession({
				phone,
				name: session.name,
				leadId: session.lead_id,
				step: "business",
				answers,
				status: "active"
			});
			await askBusiness(phone);
			return {
				ok: true,
				step: "business"
			};
		case "business":
			if (!BUSINESS_OPTIONS.some((o) => o.id === replyId)) {
				await askBusiness(phone);
				return {
					ok: true,
					step: "business"
				};
			}
			answers.business = replyId;
			await finishQualification(phone, session, answers);
			return {
				ok: true,
				step: "done"
			};
		default:
			await sendText(phone, "We've already captured your details. A team member will be in touch soon.\n\nReply *restart* to update your answers.");
			return {
				ok: true,
				step: "done"
			};
	}
}
//#endregion
//#region src/lib/whatsapp/webhook.server.ts
function verifyWebhook(url) {
	const { verifyToken } = getWaConfig();
	const mode = url.searchParams.get("hub.mode");
	const token = url.searchParams.get("hub.verify_token");
	const challenge = url.searchParams.get("hub.challenge");
	if (mode === "subscribe" && token === verifyToken && challenge) return new Response(challenge, {
		status: 200,
		headers: { "content-type": "text/plain" }
	});
	return new Response("Forbidden", { status: 403 });
}
async function processWebhookPayload(body) {
	try {
		const payload = body;
		if (payload.object !== "whatsapp_business_account") return new Response("ignored", { status: 200 });
		for (const entry of payload.entry || []) for (const change of entry.changes || []) {
			if (change.field !== "messages") continue;
			const value = change.value;
			if (!value?.messages?.length) continue;
			const profileName = value.contacts?.[0]?.profile?.name;
			for (const msg of value.messages) {
				if (!msg.from) continue;
				let text;
				let buttonId;
				let listId;
				if (msg.type === "text") text = msg.text?.body;
				else if (msg.type === "interactive") {
					buttonId = msg.interactive?.button_reply?.id;
					listId = msg.interactive?.list_reply?.id;
					text = msg.interactive?.button_reply?.title || msg.interactive?.list_reply?.title;
				} else if (msg.type === "button") {
					buttonId = msg.button?.payload;
					text = msg.button?.text;
				}
				await handleInboundMessage({
					from: msg.from,
					text,
					buttonId,
					listId,
					profileName
				}).catch((err) => {
					console.error("[whatsapp] handleInbound failed", err);
				});
			}
		}
		return new Response("EVENT_RECEIVED", { status: 200 });
	} catch (err) {
		console.error("[whatsapp] webhook error", err);
		return new Response("EVENT_RECEIVED", { status: 200 });
	}
}
//#endregion
export { processWebhookPayload, verifyWebhook };
