# Projects

This folder contains individual project pages for the website.

## How It Works

Projects in this folder are displayed on the projects landing page (`/_pages/en/projects_index.md`). To add a project to the landing page:
1. Create your project file in `/projects/`
2. Add the project card to `/_pages/en/projects_index.md`
3. Update the card with your project's title, excerpt, and image

## Structure

```
projects/
├── ism2026_ros2smolvla.md    # Individual project pages
├── project-template.md       # Template (published: false)
├── your-project.md           # Add your projects here
└── README.md                 # This file
```

## Creating a New Project

1. **Copy the template**:
   ```
   Copy: projects/project-template.md
   To: projects/your-project.md
   ```

2. **Update front matter** (this populates the landing page):
   ```yaml
   ---
   layout: single
   title: "Your Project Title"  # Used on landing page card
   permalink: /projects/your-project/
   lang: en
   published: true  # Remove this line or set to true (template has false)
   header:
     overlay_image: /assets/projects/your-project/header.jpg  # Used on landing page
     caption: "Photo credit: **Your Name**"  # Optional
   excerpt: "Brief description"  # Used on landing page card
   ---
   ```

3. **Add your assets**:
   - Create `/assets/projects/your-project/`
   - Add header image, figures, etc.

4. **Edit content**:
   - Update abstract, methods, results
   - Add videos, figures, citations

5. **Test locally**:
   ```powershell
   bundle exec jekyll serve
   ```
   Visit: `http://localhost:4000/en/projects/your-project/`

## Files Location Summary

- **Landing Page**: `/_pages/en/projects_index.md`
  - Projects landing page
  
- **Project Pages**: `/projects/` (this folder)
  - Individual project markdown files
  - `project-template.md` - Template to copy (has `published: false`)
  - Automatically processed by Jekyll

- **Assets**: `/assets/projects/your-project-name/`
  - Images, videos, figures

## Important Front Matter Fields

These fields are used by the landing page:
- `title:` - Project title (displayed on card)
- `excerpt:` - Short description (displayed on card)
- `header.overlay_image:` - Header image (displayed on card)
- `permalink:` - URL path

## Notes

- All project pages should have `lang: en`
- Remove `published: false` from your project (or set to `true`) - this is only in the template
- Use permalink format: `/projects/your-project/`
- Update `/_pages/en/projects_index.md` manually to add your project card
- Template has `published: false` to prevent direct access
