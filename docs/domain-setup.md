# Domain setup — www.suggaplay.com

## Vercel (done)

Both domains are attached to **bukikoshoni/sugga-play**:

- `suggaplay.com` (apex — redirects to www)
- `www.suggaplay.com` (primary)

Dashboard: [vercel.com/bukikoshoni/sugga-play/settings/domains](https://vercel.com/bukikoshoni/sugga-play/settings/domains)

## DNS records (at your registrar — e.g. GoDaddy)

Add these where you bought `suggaplay.com`:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 (or default) |
| **A** | `@` | `76.76.21.21` | 600 |

Some registrars use **ALIAS/ANAME** for apex instead of A — follow Vercel’s exact instructions in the Domains dashboard if they differ.

DNS can take **5 minutes to 48 hours** to propagate. Vercel will issue SSL automatically once verified.

## Verify

```bash
npx vercel domains verify www.suggaplay.com --scope bukikoshoni
npx vercel domains verify suggaplay.com --scope bukikoshoni
```

Or check status in Vercel → Project → Settings → Domains.

## Environment

Primary site URL:

```env
NEXT_PUBLIC_SITE_URL=https://www.suggaplay.com
```

Also set in **Vercel → Environment Variables → Production**.

## Supabase (before Step 3 — Auth)

In [Supabase Auth URL config](https://supabase.com/dashboard/project/sectgzwfazmewxppoogm/auth/url-configuration):

| Setting | Value |
|---------|-------|
| Site URL | `https://www.suggaplay.com` |
| Redirect URLs | `https://www.suggaplay.com/**` |
| | `http://localhost:3000/**` (dev) |

## After DNS propagates

- `https://www.suggaplay.com` → SuggaPlay site
- `https://suggaplay.com` → redirects to www
