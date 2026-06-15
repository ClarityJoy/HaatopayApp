# HaatoPay — Interactive Mockup

Interactive prototype for the HaatoPay eWallet, built as part of the HAAT Fintech PM home assessment.

## What's included

- **HAAT app context** — home, restaurant, checkout with the new HaatoPay tab visible
- **Wallet activation flow** — 30-second Tier 0 KYC (phone + SMS)
- **Wallet dashboard** — balance, recent activity, top-up, pay-in-HAAT, family
- **Order with cashback** — pay from wallet, earn 3% back, see balance grow
- **Change-to-Wallet** — convert cash change to wallet balance at checkout
- **Family Sub-Wallet** — create child wallet under parent KYC
- **Top-up methods** — credit card, Bit, bank transfer, future cash-via-courier

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- lucide-react for icons

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
cd haatopay-mockup
vercel --prod
```

### Option 2: GitHub + Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Vercel auto-detects Next.js → Deploy

No environment variables needed. Should deploy in under 60 seconds.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a desktop browser. The phone frame is centered on the page.

## Demo flow suggestion

1. Tap **"Activate wallet"** → walk through Tier 0 KYC → see ₪5 land
2. Tap **"Order with cashback"** → pay from wallet → see ₪{cashback} earn back
3. Tap **"Family Sub-Wallet"** → create Layla's wallet → see parent dashboard
4. Try paying cash with **"Change to wallet"** toggle on → see change land in balance

## Files

- `app/page.tsx` — main state + screen router
- `app/components.tsx` — demo menu, HAAT home, restaurant, bottom nav
- `app/components2.tsx` — checkout, payment success, wallet onboarding
- `app/components3.tsx` — wallet dashboard, history, top-up, family flows
