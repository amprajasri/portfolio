# Alex Morgan — Portfolio

A modular, production-ready React portfolio built with Vite.  
Refactored from a single JSX file into a clean, scalable project structure.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or later  
- **npm** v9 or later (comes bundled with Node)

### Install & Run

```bash
# 1. Clone or copy this project folder
cd alex-morgan-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # locally preview the production build
```

---

## 📁 Project Structure

```
portfolio/
├── index.html                    # Vite HTML entry point
├── vite.config.js                # Vite configuration
├── package.json                  # Project metadata & scripts
└── src/
    ├── main.jsx                  # React root mount
    ├── App.jsx                   # Root component — orchestrates layout
    ├── assets/
    │   └── globalStyles.js       # Injected <style> tag (CSS animations, utilities)
    ├── data/
    │   └── data.js               # All content: skills, education, experience, projects
    ├── hooks/
    │   └── useScrollReveal.js    # IntersectionObserver-based scroll animation hook
    ├── components/
    │   ├── Loader.jsx            # Full-screen intro overlay
    │   ├── Navbar.jsx            # Sticky top navigation
    │   ├── MobileMenu.jsx        # Full-screen mobile nav overlay
    │   ├── SectionWrapper.jsx    # Generic section layout wrapper
    │   ├── ProjectCard.jsx       # Single project thumbnail card
    │   └── ProjectModal.jsx      # Project detail modal (backdrop + card)
    └── sections/
        ├── About.jsx             # Hero section — avatar, bio, CTA buttons
        ├── Skills.jsx            # Infinite marquee skill badges
        ├── Education.jsx         # Timeline of academic credentials
        ├── Experience.jsx        # Grid of work-history cards
        ├── Projects.jsx          # Project grid + modal integration
        └── Contact.jsx           # Contact links + Earth animation
```

---

## 📦 Dependencies

### Runtime
| Package      | Version  | Purpose                          |
|-------------|----------|----------------------------------|
| `react`      | ^18.3.1  | UI library                       |
| `react-dom`  | ^18.3.1  | DOM renderer                     |

### Dev / Build
| Package                 | Version | Purpose                        |
|------------------------|---------|--------------------------------|
| `vite`                  | ^5.4.8  | Fast dev server & bundler      |
| `@vitejs/plugin-react`  | ^4.3.1  | JSX transform + Fast Refresh   |

> **Note on styling:** The project uses **vanilla CSS-in-JS** (inline styles + a global `<style>` tag injection). No Tailwind or CSS modules are required — all styles are self-contained and will work in any fresh Vite + React setup.

---

## ✨ Features

| Feature                 | Implementation                              |
|------------------------|---------------------------------------------|
| Scroll animations       | `useScrollReveal` hook (IntersectionObserver) |
| Skills marquee          | Infinite CSS animation, dual rows, hover pause |
| Project card hover      | CSS class `.proj-card` — lift + ring effect  |
| Project modal           | Backdrop blur, keyboard (Esc) dismiss        |
| Loader screen           | Dot pulse + progress bar, fades on ready     |
| Mobile hamburger menu   | Full-screen overlay with staggered link fade |
| Navbar shrink on scroll | Controlled via `window.scroll` listener      |
| Blob avatar morph       | CSS `border-radius` keyframe animation       |
| Resume download         | Blob URL → anchor click (dummy PDF)          |

---

## 🎨 Design Tokens

All colours live in `src/data/data.js` under the exported `C` object:

```js
export const C = {
  dark:    "#291C0E",   // near-black brown — headings, nav bg
  brown:   "#6E473B",   // warm mid-brown — body text, accents
  accent:  "#A78D78",   // muted tan — highlights, tags
  neutral: "#BEB5A9",   // light grey-tan — secondary text
  bg:      "#E1D4C2",   // warm cream — main background
  bgAlt:   "#F5EEE3",   // lighter cream — alternate sections
};
```

Change any value here and it propagates everywhere automatically.

---

## 🛠 Customisation

### Update personal content
Edit **`src/data/data.js`** — all text, links, projects, and job history live there. No hunting through component files.

### Add a new project
Append an object to the `PROJECTS` array in `data.js`:

```js
{
  id:    5,
  title: "My New Project",
  short: "One-line description.",
  desc:  "Longer description shown in the modal.",
  tags:  ["React", "Node.js"],
  img:   "https://images.unsplash.com/photo-xxx?w=600&q=80",
}
```

### Add a new section
1. Create `src/sections/MySection.jsx`
2. Import and place it in `src/App.jsx`

---

## 🌐 Deployment

The production build outputs to `/dist`. Deploy to any static host:

- **Vercel** — `vercel deploy` or connect the GitHub repo
- **Netlify** — drag & drop `/dist` or set build command to `npm run build`
- **GitHub Pages** — use `vite-plugin-gh-pages` or deploy `/dist` manually
