# Project Pages

⚠️ **This folder is deprecated.** Project pages have been moved to `/_pages/en/projects/` to integrate with the site's minimal-mistakes theme.

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

7. **Access at**: `http://localhost:4000/en/projects/your-project-name/`

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
