# Project Pages

⚠️ **This folder is deprecated.** Project pages have been moved to `/_pages/en/projects/` to integrate with the site's minimal-mistakes theme.

## Projects Landing Page

All projects are featured on the main projects page: `/_pages/en/projects/index.md`

This page is accessible via the **"Projects"** button in the site header (available in both English and German, both pointing to the English version).

## Creating a New Project Page

Project pages are now in: **`/_pages/en/projects/`**

### Quick Start

1. **Copy the template**: 
   ```
   /_pages/en/projects/project-template.md
   ```

2. **Rename it** to your project name (e.g., `my-awesome-project.md`)

3. **Update the front matter**:
   ```yaml
   ---
   layout: single
   title: "Your Project Title: Subtitle"
   permalink: /en/projects/your-project-name/
   lang: en
   header:
     overlay_image: /assets/projects/your-project/header.jpg
     actions:
       - label: "📄 Paper"
         url: "your-paper-url"
   excerpt: "Brief description"
   ---
   ```

4. **Create assets folder**: `/assets/projects/your-project-name/`

5. **Edit content**: Update abstract, methods, results, citation, etc.

6. **Test locally**: `bundle exec jekyll serve`

6. **Add to landing page**: Edit `/_pages/en/projects/index.md` to add your project card

7. **Access at**: `http://localhost:4000/en/projects/your-project-name/`

## Adding to the Projects Landing Page

After creating your project page, add it to the main projects page so it appears in the grid.

Edit `/_pages/en/projects/index.md` and add a project card:

```html
<div class="project-card">
  <a href="{{ '/projects/your-project-name/' | relative_url }}">
    <div class="project-image">
      <img src="/assets/projects/your-project-name/header.jpg" alt="Your Project">
      <div class="project-overlay"></div>
    </div>
    <div class="project-content">
      <h2 class="project-title">Your Project Title</h2>
      <p class="project-excerpt">Brief description matching your excerpt.</p>
    </div>
  </a>
</div>
```

The landing page will display your project with the header image, title, and excerpt in a responsive grid.

## Structure

```
_pages/
└── en/
    └── projects/
        ├── project-template.md      # Template
        ├── example-project.md       # Example
        └── your-project.md          # Your project

assets/
└── projects/
    └── your-project/
        ├── header.jpg
        ├── results.png
        └── diagram.png
```

## Key Features

- ✅ Integrates with minimal-mistakes dark theme
- ✅ Responsive design
- ✅ Table of contents
- ✅ Video embeds
- ✅ Figure support with captions
- ✅ BibTeX citations
- ✅ Header with action buttons

See `/_pages/en/projects/example-project.md` for a working example.
