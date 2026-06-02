# Medicare by Arafat — Setup Guide

## Stack Versions
- **Next.js 16** (with Turbopack + React Compiler)
- **React 19**
- **Sanity 5** + **next-sanity 13**
- **Tailwind CSS v4** (CSS-first config — no tailwind.config.ts)
- **TypeScript 6**

## Prerequisites
- Node.js 20+
- npm or pnpm

---

## 1. Install Dependencies

```bash
cd medicare-by-arafat
npm install
```

> If you see a missing `tailwindcss-animate` error, run:
> ```bash
> npm install tailwindcss-animate
> ```

---

## 2. Set Up Sanity CMS

### Create a Sanity project (free tier):
1. Go to [sanity.io](https://sanity.io) and sign up (free)
2. Create a new project — name it "Medicare by Arafat"
3. Choose dataset name: `production`
4. Copy your **Project ID** from the Sanity dashboard

### Create a `.env.local` file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token_here

# Email (get a free Resend account at resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=madicarebyarafat01@gmail.com

# Your domain
NEXT_PUBLIC_SITE_URL=https://medicarebyarafat.com
```

> To get a Read Token: Sanity Dashboard → API → Tokens → Add API Token → Viewer

---

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 4. Access the CMS Studio

Go to [http://localhost:3000/studio](http://localhost:3000/studio) to:
- Add blog posts
- Add client testimonials  
- Add/edit services
- Add FAQs

---

## 5. Set Up Contact Form Email (Free)

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create an API key
4. Add it to `.env.local` as `RESEND_API_KEY`

---

## 6. Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect at [vercel.com](https://vercel.com).

Add all your `.env.local` variables in Vercel → Project Settings → Environment Variables.

---

## File Structure

```
medicare-by-arafat/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── blog/              # Blog listing + [slug] pages
│   │   ├── contact/           # Contact page with form
│   │   ├── privacy-policy/    # Privacy Policy (compliance)
│   │   ├── terms/             # Terms & Conditions (compliance)
│   │   ├── sms-policy/        # SMS Policy (compliance)
│   │   ├── api/contact/       # Contact form API route
│   │   └── studio/            # Embedded Sanity Studio
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, CookieBanner
│   │   ├── sections/          # Hero, Services, About, etc.
│   │   └── ui/                # shadcn/ui base components
│   ├── lib/                   # Utils, Sanity image helper
│   ├── styles/                # Global CSS
│   └── types/                 # TypeScript types
├── sanity/
│   ├── schemas/               # Post, Testimonial, Service, FAQ
│   └── lib/                   # Client, queries
├── .env.example               # Copy to .env.local
└── SETUP.md                   # This file
```

---

## Compliance Checklist ✅

- [x] Privacy Policy page (`/privacy-policy`)
- [x] Terms & Conditions page (`/terms`)
- [x] SMS Policy page (`/sms-policy`)
- [x] Cookie consent banner (auto-appears, stored in localStorage)
- [x] Email consent checkbox (required) on contact form
- [x] SMS consent checkbox (optional) with STOP/HELP language
- [x] Government affiliation disclaimer in footer
- [x] SSL ready (https enforced by Vercel)
- [x] robots.txt & sitemap.xml auto-generated
```
