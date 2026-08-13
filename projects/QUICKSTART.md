# Quick Start Guide: Creating a New Project Page

⚠️ **Updated Location**: Project pages are now in `/_pages/en/projects/` to integrate with the site theme.

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

## File Locations

- Template: `/_pages/en/projects/project-template.md`
- Example: `/_pages/en/projects/example-project.md`  
- Assets: `/assets/projects/your-project-name/`
- Docs: `/projects/README.md`
