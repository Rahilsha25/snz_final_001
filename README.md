# SNZ Education — Website

A modern, multi-page React website for **SNZ Education** (Anand, Gujarat). Built
with React 19, Tailwind CSS, shadcn/ui components, and lucide-react icons.

## Pages

- **Home** — hero, about, services, destinations, why-choose-us, testimonials, CTA
- **About Us** — story, founder & co-founder profiles, mission & values, milestones
- **English Coaching** — IELTS / PTE / Spoken English programs
- **Student Visa** — destinations, end-to-end support, 5-step process
- **Testimonials** — photo reviews + video stories (YouTube modal player)
- **Contact** — form, contact info, office hours, Google Map

---

## 🚀 Run locally

```bash
cd frontend
yarn install
yarn start
```

The app runs at `http://localhost:3000`.

## 📦 Build for production

```bash
cd frontend
yarn build
```

The output is placed in `frontend/build/`. Because `package.json` has
`"homepage": "."` the build uses **relative paths**, so it works from any
GitHub Pages URL (project page or user page).

---

## 🌐 Deploy to GitHub Pages

This repository ships with a ready-to-use GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and publishes it to
GitHub Pages on every push to `main`/`master`.

### One-time setup

1. **Push this repo to GitHub** (the “Save to GitHub” button on Emergent works,
   or push manually).
2. On GitHub, open your repo → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any commit (or run the workflow manually via the **Actions** tab).
5. After ~1 minute, your site will be live at:
   - **Project page**: `https://<your-username>.github.io/<repo-name>/`
   - **User/Org page**: `https://<your-username>.github.io/`

### Why this works on GitHub Pages

- **HashRouter** — app uses hash-based routes (`/#/about`, `/#/contact`, …),
  so deep links never hit a 404 on GitHub’s static server.
- **Relative assets** — `"homepage": "."` in `package.json` makes CSS/JS/image
  URLs relative, so the build works under any sub-path.
- **SPA fallback** — the workflow copies `index.html` to `404.html` as a safety
  net for any non-hash URL.

---

## 🔧 Customise content

All text & data lives in **one file** for easy editing:

```
frontend/src/mock/data.js
```

From here you can update:

- Site info (email, phone, address, office hours)
- Founder & Co-Founder names, bios, photos
- Services, destinations, testimonials (photo + video YouTube IDs)
- Stats, milestones, FAQ-like sections

### Replace placeholder photos / videos

- **Founder photos** → swap the `photo` URLs in `founders` array
- **Photo testimonials** → swap the `photo` URLs in `photoTestimonials`
- **Video testimonials (Reels-style, vertical 9:16)** → set `videoUrl` to a
  self-hosted MP4 in portrait orientation. Recommended setup:
  1. Drop your MP4 files into `frontend/public/videos/` (e.g.
     `student-1.mp4`, `student-2.mp4`, …)
  2. Reference them in `mock/data.js` as relative paths:
     ```js
     videoUrl: "videos/student-1.mp4",
     poster:   "videos/student-1.jpg",  // optional thumbnail
     ```
  3. Recommended export: H.264 MP4, 1080×1920 (9:16), under ~15 MB each.
  4. Hover on a reel card to preview · click to open the full-screen
     portrait player (with play/pause, mute, prev/next).

---

## 📧 Contact form

The Contact page form is **front-end only** (shows a success toast on submit).
To wire it to a real backend later, replace the mocked `handleSubmit` inside
`frontend/src/pages/Contact.jsx` with an API call (e.g. Formspree, EmailJS, or
your own backend).

---

## 📁 Project structure

```
frontend/
  src/
    App.js                  # routes (HashRouter)
    index.css               # global styles & brand tokens
    mock/data.js            # 📝 ALL editable content
    pages/                  # Home, AboutUs, EnglishCoaching,
                            # StudentVisa, Testimonials, Contact
    components/
      layout/               # Header, Footer, WhatsAppButton, PageHero
      home/                 # Home page sections
      ui/                   # shadcn/ui primitives
.github/workflows/
  deploy.yml                # GitHub Actions → GitHub Pages
```

---

© SNZ Education · Anand, Gujarat
