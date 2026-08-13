# Project Pages (English)

This folder contains English project pages that integrate with the site's minimal-mistakes theme.

## Creating a New Project Page

### Quick Steps

1. **Copy template**: Duplicate `project-template.md` → `your-project.md`
2. **Update front matter**: Edit title, permalink, header actions
3. **Add assets**: Create `/assets/projects/your-project/` folder
4. **Edit content**: Update abstract, methods, results, citation
5. **Test**: `bundle exec jekyll serve`
6. **View**: `http://localhost:4000/en/projects/your-project/`

## Front Matter Configuration

```yaml
---
layout: single                          # Use 'single' layout (site theme)
title: "Project Title: Subtitle"       # Page title
permalink: /en/projects/your-project/  # URL path (must be unique)
lang: en                               # Language
header:
  overlay_color: "#000"                # Header overlay color
  overlay_filter: "0.5"                # Overlay opacity
  overlay_image: /assets/projects/your-project/header.jpg  # Header image
  actions:                             # Action buttons
    - label: "📄 Paper"
      url: "https://arxiv.org/..."
    - label: "💻 Code"
      url: "https://github.com/..."
excerpt: "Brief description"           # Subtitle shown in header
author_profile: false                  # Don't show author sidebar
toc: true                             # Enable table of contents
toc_label: "Contents"                 # TOC title
toc_sticky: true                      # Sticky TOC on scroll
---
```

## Content Sections

### Project Metadata
Update the authors, affiliations, conference, and awards:
```html
<div class="project-meta">
  <div class="authors">
    <a href="#">Author Name</a>
  </div>
  <div class="affiliations">
    <a href="#">Institution</a>
  </div>
  <div style="margin-top: 1em;">
    <strong>Conference 2026</strong>
  </div>
</div>
```

### Markdown Content
Use standard markdown with heading levels:
- `##` for major sections (Abstract, Methods, Results, etc.)
- `###` for subsections

### Images
```markdown
![Alt text](/assets/projects/your-project/image.png){: .align-center}
{: .figure-caption}
**Figure 1:** Caption text here.
```

### Videos
```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

### BibTeX
```html
<div class="bibtex-box">
<pre>
@inproceedings{key2026,
    author = {Author, Name},
    title = {Paper Title},
    booktitle = {Conference},
    year = {2026}
}
</pre>
</div>
```

## Styling

The template includes embedded CSS that works with the dark theme:
- `.project-meta` - Centered metadata section
- `.video-container` - Responsive 16:9 video embeds
- `.figure-caption` - Image captions
- `.bibtex-box` - Citation code blocks
- `.award-badge` - Award badges
- `.note-box` - Notice boxes

## Assets Organization

```
assets/projects/your-project/
├── header.jpg           # Header image (1200-1600px wide)
├── results.png          # Results figures
├── ablation.png         # Additional figures
└── diagram.svg          # Diagrams (SVG preferred)
```

## Examples

- `example-project.md` - Full working example
- `project-template.md` - Clean template to copy

## Testing

```bash
# Start local server
bundle exec jekyll serve

# View your project
http://localhost:4000/en/projects/your-project/

# Check all project pages
http://localhost:4000/en/projects/
```

## Deployment

```bash
git add _pages/en/projects/your-project.md
git add assets/projects/your-project/
git commit -m "Add project page: Your Project"
git push
```

Your page will be live at: `https://una-auxme.github.io/en/projects/your-project/`
