# Shrijeet Ambastha — Developer Portfolio

A fast, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, styled in a clean **white and crimson red** palette and deployed on **GitHub Pages**.

**Live Site:** [https://shrijeet-ambastha.github.io/Portfolio/](https://shrijeet-ambastha.github.io/Portfolio/)

---

## Features

- **Modern White & Crimson Red Theme:** Clean editorial layout with responsive typography, custom scrollbars, and subtle hover transitions.
- **Active Scroll-Spy Navigation:** Automatically highlights the active section in the navbar as visitors scroll, complete with a mobile navigation drawer.
- **Smooth Entrance Animations:** Lightweight `IntersectionObserver`-powered scroll reveal transitions (`Reveal.jsx`) with zero external animation library overhead.
- **Interactive Certifications Slideshow:** Pre-loaded PDF certificate previews with auto-play (pauses on hover), manual slide controls, dot indicators, and external credential verification links.
- **Filterable Project Showcase:** Categorized full-stack, frontend, and enterprise projects (`All`, `Full-Stack`, `Frontend`, `Enterprise`) with tech stack tags and repository links.
- **Functional Contact Form:** Integrated with **Web3Forms** for direct email submissions without requiring a backend server.
- **One-Click Resume Download:** Direct PDF resume download configured for GitHub Pages subpath routing.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Icons:** Lucide React
- **Form Handling:** Web3Forms API
- **Deployment:** GitHub Pages (`gh-pages`)

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── certs/                  # Certificate PDFs (aws.pdf, machine-learning.pdf, etc.)
│   ├── profile.jpg             # Hero profile portrait
│   ├── resume.pdf              # Downloadable resume
│   └── favicon.ico             # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with active scroll-spy & mobile menu
│   │   ├── Hero.jsx            # Intro, CTAs, social links, and framed portrait
│   │   ├── About.jsx           # Bio and engineering highlights
│   │   ├── Skills.jsx          # Categorized technical skills
│   │   ├── Projects.jsx        # Filterable project cards
│   │   ├── Experience.jsx      # Internship, certifications, and education timeline
│   │   ├── Certifications.jsx  # PDF certificate slideshow
│   │   ├── Contact.jsx         # Contact details & Web3Forms form
│   │   ├── Footer.jsx          # Quick links & back-to-top button
│   │   └── Reveal.jsx          # IntersectionObserver entrance animation wrapper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
