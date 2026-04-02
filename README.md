# Banu Paksoy — Developer Portfolio

A modern, interactive personal portfolio built with **Next.js**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**. Features a 3D starfield background, animated UI components, and a fully responsive design.

## Live Site

Deployed and hosted at: [banupaksoy.com](https://banupaksoy.com/)

## Features

- **3D Starfield Background** — Animated particle system using React Three Fiber & Three.js
- **Animated Stat Counters** — Numbers count up on scroll with Framer Motion
- **Flip Cards** — Project cards flip to reveal app screenshots on click
- **Split-View Screenshots** — Mobility on Demand shows both web and mobile app side by side
- **Tilt Effect** — Skill cards respond to mouse movement with a 3D tilt
- **Glow Cursor** — Stat cards emit a purple radial glow that follows the cursor
- **Floating Navigation** — Sticky side nav with active section highlighting and smooth scroll
- **Scroll Progress Bar** — Gradient progress indicator at the top of the page
- **Typewriter Effect** — Rotating role titles in the hero section
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

## Featured Projects

| Project | Description | Links |
|---------|-------------|-------|
| **Mobility on Demand** | Production e-commerce & delivery platform on GCP | [Live](https://shop.mod.group/) |
| **Worm** | AI-powered college discovery platform with Gemini AI | [Live](https://wormie.app) · [GitHub](https://github.com/bpaksoy/capstone) |
| **Profi Deutsch** | AI German language coach with voice synthesis | [Live](https://sigsag-6055d.web.app/) · [GitHub](https://github.com/bpaksoy/profi-deutsch-app-2) |
| **Urbanitus Magazine** | Digital publication redesign | [Live](https://urbanitus.com) |

## Tech Stack

- **Framework:** Next.js 16, React 19
- **3D Graphics:** React Three Fiber, Three.js, Drei
- **Animation:** Framer Motion
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Icons:** React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx                    # Main portfolio page
├── layout.tsx                  # Root layout with metadata
├── globals.css                 # Global styles & animations
└── components/
    ├── ThreeBackground.tsx     # 3D starfield particle system
    ├── FlipCard.tsx            # Click-to-flip card component
    ├── TiltCard.tsx            # Mouse-tracking 3D tilt effect
    ├── GlowCard.tsx            # Cursor-following glow effect
    ├── AnimatedCounter.tsx     # Scroll-triggered number counter
    ├── FloatingNav.tsx         # Sticky side navigation
    ├── ScrollProgress.tsx      # Top scroll progress bar
    └── Typewriter.tsx          # Typing animation effect
public/
    ├── MoDstore.png            # Mobility on Demand web screenshot
    ├── MoDApp.png              # Mobility on Demand mobile screenshot
    ├── wormie_app.png          # Worm app screenshot
    ├── sigsag.png              # Profi Deutsch screenshot
    └── Urbanitus.png           # Urbanitus Magazine screenshot
```
