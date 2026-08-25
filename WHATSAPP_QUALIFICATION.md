# PRAYAVA — WhatsApp Lead Qualification

## Flow
1. User submits contact form (name, email, **WhatsApp number**, service, message)
2. Lead saved to DB + Brevo email to hello@prayava.co
3. WhatsApp thank-you template sent (`prayava_lead_thank_you`)
4. Interactive list questions:
   - Service interest
   - Budget range
   - Timeline
   - Business type
5. Score 0–100 → HOT (≥70) / WARM (45–69) / NURTURE (<45)
6. Closing message to lead + Brevo alert to team

## Webhook (Meta)
- URL: `https://YOUR_DOMAIN/api/whatsapp/webhook`
- Verify token: `prayava_webhook_verify_2026` (env `WHATSAPP_VERIFY_TOKEN`)
- Subscribe: **messages**

## Env vars
See `.env` — BREVO_*, WHATSAPP_*

## Reply commands
- `restart` / `hi` — restart qualification on WhatsApp
