# Development Workflow

Commands, git workflow, and testing procedures.

## NPM Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at **localhost:4321** |
| `npm run start` | Alias for `npm run dev` |
| `npm run build` | Build production-ready site to `dist/` |
| `npm run preview` | Preview production build locally |

## Development Process

### 1. Start Development Server

```bash
npm run dev
```

Open http://localhost:4321 in your browser. Hot reload is enabled.

### 2. Make Changes

Edit files in `src/`. Changes appear automatically in the browser.

### 3. Test Locally

**Always verify at localhost:4321 before committing:**
- Check page renders correctly
- Test navigation links
- Verify blog posts display properly
- Check responsive design (resize browser)

## Git Workflow

### Starting New Work

**Always create a branch for new features or fixes:**

```bash
# Create and switch to new branch
git checkout -b feature/descriptive-name

# Examples:
git checkout -b feature/add-contact-page
git checkout -b fix/navigation-mobile
git checkout -b post/new-blog-article
```

### Committing Changes

**Commit early, commit often** to protect against regressions:

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add contact page with email form"

# Or stage and commit together
git commit -am "Fix mobile navigation overflow"
```

### Pushing to GitHub

```bash
# Push branch to GitHub (triggers auto-deploy)
git push origin branch-name

# First push of a new branch
git push -u origin branch-name
```

### Merging to Main

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Merge your branch
git merge feature/your-branch

# Push to main (triggers production deploy)
git push origin main

# Delete local branch (optional)
git branch -d feature/your-branch
```

## Best Practices

1. **Branch naming:** Use prefixes like `feature/`, `fix/`, `post/`, `docs/`
2. **Commit messages:** Be descriptive - "Add X" not "update"
3. **Test before push:** Always verify at localhost:4321
4. **Small commits:** Easier to review and revert if needed
5. **Pull before push:** Keep your main branch up to date

## Troubleshooting

### Port 4321 already in use

```bash
# Find and kill process on port 4321
lsof -i :4321
kill -9 <PID>
```

### Clear Astro cache

```bash
rm -rf .astro
npm run dev
```

### Rebuild node_modules

```bash
rm -rf node_modules
npm install
```
