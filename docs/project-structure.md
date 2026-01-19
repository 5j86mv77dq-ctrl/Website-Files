# Project Structure

Complete file organization for peteratkinson.co

## Directory Overview

```
Website-Files/
├── src/                    # Source code
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (Markdown files)
│   │   └── config.ts       # Content schema validation
│   ├── layouts/            # Page templates
│   │   └── BaseLayout.astro
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Home page (/)
│   │   ├── about.astro     # About page (/about)
│   │   ├── speaking.astro  # Speaking page (/speaking)
│   │   └── blog/
│   │       ├── index.astro # Blog listing (/blog)
│   │       └── [slug].astro # Individual posts (/blog/post-name)
│   ├── components/         # Reusable components
│   └── styles/
│       └── global.css      # Site-wide styles
├── public/                 # Static assets (images, fonts, etc.)
├── docs/                   # Documentation (you are here)
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and scripts
└── claude.md               # Quick reference guide
```

## Key Directories

### `src/content/blog/`

Blog posts as Markdown files. Naming convention: `YYYY-MM-DD-title-slug.md`

Current posts:
- `2026-1-16-welcome.md`
- `2026-01-17-artificial-intelligence.md`

### `src/layouts/`

**BaseLayout.astro** - Main wrapper for all pages
- Props: `title` (required), `description` (optional)
- Includes: header, navigation, main content slot, footer
- Navigation links: Home, Blog, About, Speaking

### `src/pages/`

Astro uses file-based routing:
- `index.astro` → `/`
- `about.astro` → `/about`
- `speaking.astro` → `/speaking`
- `blog/index.astro` → `/blog`
- `blog/[slug].astro` → `/blog/any-post-slug`

### `src/components/`

Reusable Astro components. Currently empty - add components here as needed.

### `public/`

Static assets served at root URL. Place images, favicons, and other assets here.

## Configuration Files

### `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://peteratkinson.co',
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
```

### `src/content/config.ts`

Defines the blog collection schema:
- `title`: string (required)
- `description`: string (required)
- `date`: date (required)

## Styling

Global styles in `src/styles/global.css`:
- CSS custom properties for colors
- Georgia serif for headings, system fonts for body
- Mobile breakpoint at 768px
- Styles for header, nav, blog lists, articles, footer
