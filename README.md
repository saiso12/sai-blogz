# Sai Soundararajan — Personal Blog

Personal portfolio and blog built with Astro, deployed to Cloudflare Pages.

## Quick Start

```bash
npm install
npm run dev      # localhost:4321
npm run build    # production build
```

## Publishing Workflow

1. Write markdown in Obsidian
2. Copy to `src/content/writing/` or `src/content/projects/`
3. `git add . && git commit -m "Add post" && git push`
4. Site rebuilds automatically (~30 seconds)

## Content Format

**Blog post** (`src/content/writing/post-name.md`):
```yaml
---
title: Post Title
date: 2025-01-15
tag: platform
draft: false
---
```

**Project** (`src/content/projects/project-name.md`):
```yaml
---
title: Project Name
description: Short description
status: in-progress  # or: shipped, paused
meta: 3 weeks in
order: 1
---
```

## Stack

Astro 4.x · Cloudflare Pages · Markdown
