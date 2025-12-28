# Sai Kothapalli — Personal Blog

Personal portfolio and blog built with Astro, deployed to Cloudflare Pages.

## Tech Stack

- **Framework**: Astro 4.x (content collections, static output)
- **Styling**: Custom CSS (dark theme, olive accents)
- **Fonts**: Space Grotesk + JetBrains Mono
- **Hosting**: Cloudflare Pages
- **Content**: Markdown with frontmatter

## Project Structure

```
sai_blogz/
├── src/
│   ├── content/
│   │   ├── projects/        ← Project markdown files
│   │   └── writing/         ← Blog post markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Profile.astro
│   │   ├── Nav.astro
│   │   ├── Currently.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostItem.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/[slug].astro
│   │   └── writing/[slug].astro
│   └── styles/
│       └── global.css
├── public/
│   └── favicon.svg
└── astro.config.mjs
```

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Content Management

### Adding a Blog Post

Create a new file in `src/content/writing/`:

```markdown
---
title: Your Post Title
date: 2025-01-15
tag: platform
draft: false
---

Your content here...
```

### Adding a Project

Create a new file in `src/content/projects/`:

```markdown
---
title: Project Name
description: Short description for the card
status: in-progress  # or: shipped, paused
url: https://github.com/...  # optional external link
meta: 3 weeks in
order: 1  # display order on homepage
---

Full project details here...
```

## Obsidian Workflow

1. Write content in Obsidian with proper frontmatter
2. Copy finished `.md` files to `src/content/writing/` or `src/content/projects/`
3. `git add . && git commit -m "Add post: title" && git push`
4. Site rebuilds in ~30 seconds

### Obsidian Template

```yaml
---
title: Post Title
date: {{date:YYYY-MM-DD}}
tag: thinking
draft: true
---
```

## Deployment

### Cloudflare Pages Setup

1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages → Create Project
3. Connect GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: 20
5. Deploy

### Custom Domain

**Recommended**: Use Cloudflare Registrar (~$10/year) for seamless integration.

1. Purchase domain in Cloudflare Registrar
2. Add custom domain in Pages dashboard
3. SSL certificate auto-provisions

**Using external registrar**:
1. Add custom domain in Cloudflare Pages
2. Create CNAME record pointing to `your-project.pages.dev`
3. Wait for SSL certificate

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build and preview
npm run build && npm run preview
```

## License

MIT
