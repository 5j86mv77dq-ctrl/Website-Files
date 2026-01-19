# Claude Code Guide - peteratkinson.co

Personal brand website for Peter Atkinson - marketing insights, speaking platform, and blog.

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `git checkout -b feature/name` | Create feature branch |
| `git push origin branch-name` | Push triggers auto-deploy (2-3 min) |

## Tech Stack

- **Framework:** Astro 5.x
- **Content:** Markdown blog posts
- **Hosting:** Cloudflare Pages (auto-deploy from GitHub)
- **Domain:** peteratkinson.co

## Project Structure (Quick View)

```
src/
├── content/blog/    # Blog posts (Markdown)
├── layouts/         # BaseLayout.astro
├── pages/           # index, about, speaking, blog/
├── components/      # Reusable components
└── styles/          # global.css
```

## Working Standards

1. **Always branch** - Create a git branch for new features/fixes
2. **Test locally** - Verify at localhost:4321 before committing
3. **Commit often** - Protect against regressions with frequent commits
4. **Push to deploy** - GitHub push triggers Cloudflare Pages build

## Blog Post Creation

Create new `.md` file in `src/content/blog/` with frontmatter:

```markdown
---
title: "Post Title"
description: "Brief description"
date: 2026-01-19
---

Your content here...
```

---

## Detailed Documentation

For comprehensive guides, see the docs folder:

- [Project Structure](docs/project-structure.md) - Complete file organization and architecture
- [Development Workflow](docs/development-workflow.md) - Commands, git workflow, testing
- [Blog Posts Guide](docs/blog-posts.md) - Creating and managing blog content
- [Deployment](docs/deployment.md) - Cloudflare Pages setup and troubleshooting
