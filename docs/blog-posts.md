# Blog Posts Guide

Creating and managing blog content on peteratkinson.co

## Blog Post Location

All blog posts are Markdown files in:

```
src/content/blog/
```

## Creating a New Post

### 1. Create the File

Create a new `.md` file in `src/content/blog/`:

```
src/content/blog/YYYY-MM-DD-title-slug.md
```

**Naming convention:**
- Use date prefix: `2026-01-19-`
- Use lowercase with hyphens: `my-post-title`
- Keep slugs concise and descriptive

### 2. Add Frontmatter

Every post must start with YAML frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
date: 2026-01-19
---
```

**Required fields:**
- `title`: Display title (shown on blog listing and post page)
- `description`: Brief summary (shown in blog listing)
- `date`: Publication date in YYYY-MM-DD format

### 3. Write Content

After the frontmatter, write your content in Markdown:

```markdown
---
title: "Marketing in the AI Era"
description: "How artificial intelligence is reshaping marketing strategy"
date: 2026-01-19
---

Your introduction paragraph here...

## First Section Heading

Content for this section...

### Subsection

More detailed content...

## Conclusion

Wrap up your thoughts...
```

## Markdown Features

### Text Formatting

```markdown
**bold text**
*italic text*
[link text](https://example.com)
```

### Code

Inline: `` `code` ``

Block:
````markdown
```javascript
const greeting = "Hello";
```
````

### Lists

```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

### Blockquotes

```markdown
> This is a quote
```

### Images

Place images in `public/` and reference:

```markdown
![Alt text](/image-name.jpg)
```

## Post URL Structure

Files automatically become URLs:
- `2026-01-19-my-post.md` → `/blog/my-post`
- `2026-01-17-artificial-intelligence.md` → `/blog/artificial-intelligence`

The date prefix is stripped from the URL slug.

## Blog Listing

Posts appear on `/blog` sorted by date (newest first). The listing shows:
- Post title (linked to full post)
- Publication date
- Description

## Example Post

```markdown
---
title: "Three Marketing Lessons from Radio"
description: "What 20 years in broadcast taught me about connecting with audiences"
date: 2026-01-20
---

After two decades in radio marketing, I've learned that the fundamentals
never change, even as the channels evolve...

## Lesson 1: Know Your Audience

The most successful campaigns start with deep audience understanding...

## Lesson 2: Consistency Builds Trust

Showing up reliably matters more than showing up spectacularly...

## Lesson 3: Stories Beat Statistics

Data informs strategy, but stories move people...

## Putting It Into Practice

These principles apply whether you're buying radio spots or running
digital campaigns...
```

## Tips

1. **Descriptive titles:** Make them clear and compelling
2. **Strong descriptions:** These appear in listings and social shares
3. **Use headings:** Break up content for readability
4. **Test locally:** Preview at localhost:4321/blog before committing
5. **Consistent dates:** Use YYYY-MM-DD format in frontmatter
