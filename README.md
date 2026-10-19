# SwitchtoZero website

Marketing site for SwitchtoZero, built with Next.js (App Router) and hosted on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Environment variables

Set these in `.env.local` and in Vercel:

| Variable | Purpose |
| --- | --- |
| `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET` | Microsoft Graph app used to send enquiry emails |
| `MAIL_FROM` | Mailbox the enquiry emails are sent from |
| `CONTACT_TO_EMAIL` | Where enquiries are delivered (defaults to `MAIL_FROM`) |
| `GOV_API_URL`, `GOV_API_KEY` | Companies House API for the business lookup |

## Structure

```
app/          routes only: one folder per page, each with its own metadata
actions/      server code: enquiries (server action), companies lookup, mail
components/   React components, one per file, grouped by area
lib/          content, SEO helpers and pure business logic
public/       images and static files
```
