# Project Pages (English)

This folder contains English project pages that integrate with the site's minimal-mistakes theme.

## Projects Landing Page

The main projects landing page should be created at `/_pages/en/projects/index.md` (with `permalink: /projects/` so it renders at `/en/projects/`) and should display all projects in a grid layout.

**To add your project to the landing page**, edit `index.md` and add a new project card:

```html
<div class="project-card">
  <a href="{{ '/projects/your-project/' | relative_url }}">
    <div class="project-image">
      <img src="/assets/projects/your-project/header.jpg" alt="Your Project">
      <div class="project-overlay"></div>
    </div>
    <div class="project-content">
      <h2 class="project-title">Your Project Title</h2>
      <p class="project-excerpt">Brief description of your project.</p>
    </div>
  </a>
</div>
```

The landing page is accessible via the "Projects" button in the site header.

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
  # caption: "Photo credit: **Your Name**"  # Optional: override default (Peter Krönes)
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

## Customizing Header Image Credit

By default, all pages inherit the photo credit "Photo credit: **Peter Krönes**" from `_config.yml`.

To use a different credit for your project page:

```yaml
header:
  overlay_image: /assets/projects/your-project/header.jpg
  caption: "Photo credit: **Jane Doe**"  # Override default attribution
```

To use no caption:

```yaml
header:
  overlay_image: /assets/projects/your-project/header.jpg
  caption: ""  # Empty caption
```

**Note:** If you don't specify a caption, the default "Peter Krönes" attribution is used automatically.

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
