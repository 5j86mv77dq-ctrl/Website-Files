# Deployment

Cloudflare Pages deployment for peteratkinson.co

## Overview

The site uses **Cloudflare Pages** for hosting with automatic deployments from GitHub.

**Domain:** peteratkinson.co

## How Deployment Works

1. Push changes to GitHub
2. Cloudflare Pages detects the push
3. Runs `npm run build`
4. Deploys to Cloudflare's global CDN
5. Site is live (typically 2-3 minutes)

## Deployment Triggers

### Production Deploy (main branch)

```bash
git checkout main
git merge feature/your-branch
git push origin main
```

Pushes to `main` deploy to **peteratkinson.co**

### Preview Deploys (other branches)

Pushes to other branches create preview URLs:
- `feature-name.peteratkinson-co.pages.dev`

Useful for testing before merging to main.

## Monitoring Deployments

### Cloudflare Dashboard

1. Log into Cloudflare dashboard
2. Go to Pages → your project
3. View deployment history and status
4. Check build logs if issues occur

### Build Status

- **Success:** Site updated, visible at peteratkinson.co
- **Failed:** Check build logs for errors

## Build Configuration

Cloudflare Pages settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | (auto-detected or specify in environment) |

## Common Issues

### Build Fails

**Check build logs in Cloudflare dashboard:**

1. Syntax errors in Astro files
2. Missing dependencies
3. Invalid frontmatter in blog posts
4. Broken imports

**Test locally first:**

```bash
npm run build
```

If it builds locally, it should build on Cloudflare.

### Changes Not Appearing

1. **Check deployment status** in Cloudflare dashboard
2. **Clear browser cache** or hard refresh (Cmd+Shift+R)
3. **Wait 2-3 minutes** for deployment to complete
4. **Check the correct branch** was pushed

### DNS Issues

If site is unreachable:
1. Check Cloudflare DNS settings
2. Verify domain is properly configured
3. Check for SSL certificate issues

## Environment Variables

If needed, set environment variables in Cloudflare Pages dashboard:
- Settings → Environment variables
- Add for both Production and Preview environments

## Rollback

If a deployment causes issues:

1. Go to Cloudflare Pages dashboard
2. Find the last working deployment
3. Click "Rollback to this deployment"

Or revert in git:

```bash
git revert HEAD
git push origin main
```

## Performance

Cloudflare Pages provides:
- Global CDN distribution
- Automatic SSL
- Edge caching
- Fast page loads worldwide

## Costs

Cloudflare Pages free tier includes:
- Unlimited sites
- Unlimited bandwidth
- 500 builds per month
- Automatic SSL

More than sufficient for a personal blog.
