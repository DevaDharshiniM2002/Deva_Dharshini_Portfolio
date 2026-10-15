# Deva Dharshini M — Portfolio Website

A production-ready personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## Replacing Assets

Place your files in the `public/` folder exactly as listed below.

| Asset | Path |
|---|---|
| Profile photo | `public/images/profile.jpg` |
| Namma Scheme screenshot | `public/images/namma-scheme.png` |
| MindMitra screenshot | `public/images/mindmitra.png` |
| Breast Cancer Prediction screenshot | `public/images/breast-cancer-prediction.png` |
| CampusPay screenshot | `public/images/campuspay.png` |
| Python Web Dev certificate | `public/images/certificates/python-web-development.png` |
| Machine Learning certificate | `public/images/certificates/machine-learning.png` |
| Data Fundamentals certificate | `public/images/certificates/data-fundamentals.png` |
| C Programming certificate | `public/images/certificates/c-programming.png` |
| Resume PDF | `public/resume/Deva_Dharshini_M_Resume.pdf` |

All missing images show graceful fallback placeholders automatically.

---

## Updating Portfolio Data

All personal data (contact info, skills, projects, experience, certifications, achievements) lives in one file:

```
src/data/portfolio.ts
```

Edit that file to update any content without touching component code.

### Enabling a Live Demo button

In `src/data/portfolio.ts`, set `demoVerified: true` and provide the `demo` URL for any project that has a working deployment.

### Enabling GitHub repository links

Replace the placeholder `https://github.com/DevaDharshiniM2002` values in each project entry with the actual repository URLs.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo.
3. Vercel auto-detects Vite. Leave all settings as default.
4. Click **Deploy**.

For a custom domain, add it under Project → Settings → Domains.

---

## Contact Form

The form currently uses a `mailto:` fallback — clicking Send opens the user's email client pre-filled with the message. To enable direct in-browser delivery, integrate a service such as [Resend](https://resend.com), [EmailJS](https://www.emailjs.com), or [Formspree](https://formspree.io) and replace the `handleSubmit` logic in `src/components/Contact.tsx`. Never store API keys in frontend code — use environment variables.

---

## Project Structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects,
                Experience, Certifications, Achievements,
                Contact, Footer
  data/
    portfolio.ts  ← single source of truth for all content
  App.tsx
  main.tsx
  index.css
public/
  images/
  resume/
  favicon.svg
```
