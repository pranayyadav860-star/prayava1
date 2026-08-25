import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/leads.server-CRsX3wVy.js
var _0002_leads_default = "-- Lead capture + WhatsApp qualification sessions\nCREATE TABLE IF NOT EXISTS leads (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT NOT NULL,\n  phone TEXT NOT NULL DEFAULT '',\n  service TEXT NOT NULL DEFAULT '',\n  message TEXT NOT NULL DEFAULT '',\n  source TEXT NOT NULL DEFAULT 'contact',\n  audit_score INTEGER,\n  recommended_plan TEXT,\n  qualification_status TEXT NOT NULL DEFAULT 'pending',\n  qualification_score INTEGER,\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\nCREATE TABLE IF NOT EXISTS wa_sessions (\n  phone TEXT PRIMARY KEY,\n  lead_id TEXT REFERENCES leads(id) ON DELETE SET NULL,\n  step TEXT NOT NULL DEFAULT 'start',\n  name TEXT NOT NULL DEFAULT '',\n  answers JSONB NOT NULL DEFAULT '{}',\n  score INTEGER NOT NULL DEFAULT 0,\n  status TEXT NOT NULL DEFAULT 'active',\n  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\nCREATE INDEX IF NOT EXISTS leads_phone_idx ON leads (phone);\nCREATE INDEX IF NOT EXISTS leads_created_idx ON leads (created_at DESC);\nCREATE INDEX IF NOT EXISTS wa_sessions_status_idx ON wa_sessions (status);\n";
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
async function sendThankYouTemplate(to, firstName) {
	const { templateName, templateLanguage } = getWaConfig();
	return waFetch("/messages", {
		messaging_product: "whatsapp",
		to: normalizePhone(to),
		type: "template",
		template: {
			name: templateName,
			language: { code: templateLanguage },
			components: [{
				type: "body",
				parameters: [{
					type: "text",
					text: (firstName || "there").slice(0, 40)
				}]
			}]
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
async function startQualification(opts) {
	const phone = normalizePhone(opts.phone);
	if (!phone) return {
		ok: false,
		reason: "no_phone"
	};
	const firstName = opts.name.split(/\s+/)[0] || opts.name || "there";
	const tpl = await sendThankYouTemplate(phone, firstName);
	await upsertSession({
		phone,
		leadId: opts.leadId,
		name: opts.name,
		step: "service",
		answers: {},
		score: 0,
		status: "active"
	});
	await sendList(phone, `Hi ${firstName}! 👋 Thanks for reaching out to PRAYAVA.\n\nTo match you with the right plan, which service are you most interested in?`, "Choose service", [{
		title: "Services",
		rows: SERVICE_OPTIONS
	}]).catch(() => null);
	return {
		ok: true,
		template: tpl
	};
}
async function sendBrevoNotification(lead) {
	const { apiKey, senderEmail, senderName } = getBrevoConfig();
	if (!apiKey) {
		console.warn("[lead] BREVO_API_KEY is not configured");
		return {
			ok: false,
			reason: "missing_brevo_key"
		};
	}
	try {
		const response = await fetch("https://api.brevo.com/v3/smtp/email", {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				"api-key": apiKey
			},
			body: JSON.stringify({
				sender: {
					name: senderName || "PRAYAVA",
					email: senderEmail
				},
				to: [{
					email: senderEmail,
					name: senderName || "PRAYAVA"
				}],
				replyTo: {
					email: lead.email,
					name: lead.name
				},
				subject: `New PRAYAVA lead — ${lead.name}`,
				htmlContent: `
          <!doctype html>
          <html>
            <body style="font-family:Arial,sans-serif;line-height:1.6;color:#222">
              <h2>New PRAYAVA Website Lead</h2>

              <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(lead.phone || "—")}</p>
              <p><strong>Service:</strong> ${escapeHtml(lead.service || "—")}</p>
              <p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>
              <p><strong>Audit Score:</strong> ${lead.auditScore ?? "—"}</p>
              <p><strong>Recommended Plan:</strong> ${escapeHtml(lead.recommendedPlan || "—")}</p>

              <hr />

              <h3>Message</h3>
              <p>${escapeHtml(lead.message || "—")}</p>

              <hr />

              <p>
                <strong>Lead ID:</strong> ${escapeHtml(lead.id)}
              </p>
            </body>
          </html>
        `
			})
		});
		if (!response.ok) {
			const errorText = await response.text().catch(() => "");
			console.error("[lead] Brevo request failed", {
				status: response.status,
				body: errorText
			});
			return {
				ok: false,
				reason: `brevo_http_${response.status}`
			};
		}
		return { ok: true };
	} catch (error) {
		console.error("[lead] Brevo request failed", error);
		return {
			ok: false,
			reason: "brevo_request_failed"
		};
	}
}
async function submitLeadServer(data) {
	const id = crypto.randomUUID();
	await (await getSql())`
    INSERT INTO leads (
      id,
      name,
      email,
      phone,
      service,
      message,
      source,
      audit_score,
      recommended_plan,
      qualification_status,
      created_at
    )
    VALUES (
      ${id},
      ${data.name},
      ${data.email},
      ${data.phone || ""},
      ${data.service || ""},
      ${data.message || ""},
      ${data.source},
      ${data.auditScore ?? null},
      ${data.recommendedPlan ?? null},
      ${"pending"},
      NOW()
    )
  `;
	const email = await sendBrevoNotification({
		...data,
		id
	}).catch((error) => {
		console.error("[lead] Unexpected Brevo error", error);
		return {
			ok: false,
			reason: "brevo_unexpected_error"
		};
	});
	let whatsapp = {
		ok: false,
		reason: "no_phone"
	};
	if (data.phone?.trim()) try {
		const result = await startQualification({
			phone: data.phone,
			name: data.name,
			leadId: id
		});
		whatsapp = {
			ok: Boolean(result?.ok),
			...result?.ok ? {} : { reason: "whatsapp_failed" }
		};
	} catch (error) {
		console.error("[lead] WhatsApp qualification failed", error);
		whatsapp = {
			ok: false,
			reason: "whatsapp_request_failed"
		};
	}
	return {
		ok: true,
		leadId: id,
		email,
		whatsapp
	};
}
function escapeHtml(value) {
	return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
//#endregion
export { submitLeadServer };
