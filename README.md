# KidTales

Interactive comic book reader for kids featuring stories from Panchatantra, Indian mythology, Indian animation, and Greek mythology. Built with hand-crafted inline SVG characters, cinematic animations, and a Netflix-style browsing experience.

## Features

- 30+ stories across 4 categories (Panchatantra, Indian Mythology, Indian Animation, Greek Mythology)
- 500+ illustrated frames with inline SVG characters
- Swipe/keyboard navigation with page-turn animations
- Auto-play mode for hands-free reading
- Reading progress saved to localStorage
- Billboard hero section with auto-rotating featured stories
- Responsive design (mobile, tablet, desktop)
- Accessibility: keyboard navigation, aria labels, reduced motion support
- Cinematic effects: camera zoom/pan, ambient particles, weather, vignette, parallax
- Dark theme optimized for comfortable reading

## Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool
- **Framer Motion** - Page transitions and animations
- **Inline SVG** - All characters and illustrations (no external image assets)
- **Oxlint** - Linting

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
cd comics-app
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Serve with any static file server.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
comics-app/
  index.html              - Entry HTML with meta tags and font preloading
  vite.config.js          - Build config with manual chunk splitting
  src/
    main.jsx              - React entry point
    App.jsx               - Root component, routing, reading progress
    App.css               - All styles (design tokens, components, animations)
    components/
      LandingPage.jsx     - Netflix-style landing with billboard, story rows, modal
      ComicViewer.jsx     - Comic reader with swipe, keyboard, auto-play
      SceneRenderer.jsx   - Per-story scene rendering with ambient effects
      Characters.jsx      - Original SVG character components
      CharactersNew.jsx   - Extended SVG character library (30+ characters)
    data/
      stories.js          - Story aggregator
      story-*.js          - Individual story data (frames, dialogue, scenes)
  public/
    favicon.svg           - App icon
```

## Deployment

The `dist/` folder after `npm run build` is a fully static site. Deploy to:

- Vercel: `npx vercel --prod`
- Netlify: drag-and-drop `dist/` or connect repo
- GitHub Pages: push `dist/` to `gh-pages` branch
- Any static host (S3, Firebase Hosting, etc.)

## License

Private project.
