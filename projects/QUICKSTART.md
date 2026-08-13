# Quick Start Guide: Creating a New Project Page

⚠️ **Updated Location**: Project pages are now in `/_pages/en/projects/` to integrate with the site theme.

## Overview

1. Create your project page in `/_pages/en/projects/`
2. Add assets to `/assets/projects/your-project/`
3. Add your project to the landing page at `/_pages/en/projects/index.md`
4. Test locally

The projects landing page is accessible via the "Projects" button in the site header.

## Step 1: Prepare Your Assets
Create a folder for your project in `/assets/projects/`:
```
/assets/projects/my-project-name/
```
Add your images, figures, and other media to this folder.

## Step 2: Create Your Project Page
1. Copy the template from:
   ```
   /_pages/en/projects/project-template.md
   ```

2. Rename it to your project:
   ```
   /_pages/en/projects/my-project-name.md
   ```

## Step 3: Update Front Matter

Edit the YAML front matter at the top:
```yaml
---
layout: single
title: "Your Project Title: Subtitle"
permalink: /en/projects/my-project-name/
lang: en
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/projects/my-project-name/header.jpg
  caption: "Photo credit: **Your Name**"  # Optional: override default (Peter Krönes)
  actions:
    - label: "📄 Paper"
      url: "https://arxiv.org/your-paper"
    - label: "💻 Code"
      url: "https://github.com/your-repo"
excerpt: "Brief one-sentence description of your work"
toc: true
toc_label: "Contents"
---
```

## Step 4: Update Content

### Project Meta
Update the authors, affiliations, and conference info in the `<div class="project-meta">` section.

### Main Sections
- **Abstract**: Replace with your abstract text
- **Video**: Update YouTube video IDs
- **Method**: Describe your approach
- **Results**: Add your figures using:
  ```markdown
  ![Description](/assets/projects/my-project-name/figure.png){: .align-center}
  {: .figure-caption}
  **Figure 1:** Your caption here.
  ```
- **Citation**: Update BibTeX

## Step 5: Test Locally
```bash
bundle exec jekyll serve
```
Visit: `http://localhost:4000/en/projects/my-project-name/`

## Step 6: Deploy
```bash
git add _pages/en/projects/my-project-name.md
git add assets/projects/my-project-name/
git commit -m "Add project page for My Project"
git push
```

## Step 7: Add to Projects Landing Page

Edit `/_pages/en/projects/index.md` and add your project card in the `projects-grid` div:

```html
<div class="project-card">
  <a href="{{ '/projects/my-project-name/' | relative_url }}">
    <div class="project-image">
      <img src="/assets/projects/my-project-name/header.jpg" alt="My Project">
      <div class="project-overlay"></div>
    </div>
    <div class="project-content">
      <h2 class="project-title">My Project Title</h2>
      <p class="project-excerpt">Brief project description from your excerpt.</p>
    </div>
  </a>
</div>
```

Your project will now appear on the main projects page (accessible via the "Projects" button in the header).

## Tips

### Add Video Embeds
```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

### Add Images with Captions
```markdown
![Alt text](/assets/projects/my-project/image.png){: .align-center}
{: .figure-caption}
**Figure 1:** Your detailed caption here.
```

### Customize Header Actions
Add or remove buttons in the header:
```yaml
header:
  actions:
    - label: "📄 Paper"
      url: "#"
    - label: "💻 Code"
      url: "#"
```

### Override Photo Credit
By default, all pages use "Photo credit: **Peter Krönes**". To override:
```yaml
header:
  caption: "Photo credit: **Jane Doe**"
```

To remove the caption entirely:
```yaml
header:
  caption: ""
```

If you don't specify a caption, the default attribution is used automatically.

## File Locations

- Template: `/_pages/en/projects/project-template.md`
- Example: `/_pages/en/projects/example-project.md`  
- Assets: `/assets/projects/your-project-name/`
- Docs: `/projects/README.md`
