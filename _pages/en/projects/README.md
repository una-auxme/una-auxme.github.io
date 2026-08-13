# Project Pages (English)

This folder contains the project landing page that displays all projects from the `_projects` collection.

## Structure

- `index.md` - Projects landing page (auto-generates cards from `/_projects/` collection)
- `README.md` - This file

## How the Landing Page Works

The landing page (`index.md`) **automatically generates** project cards from all published files in the `/_projects/` folder. It reads:
- **Title** from `title:` in front matter
- **Excerpt** from `excerpt:` in front matter
- **Header image** from `header.overlay_image:` in front matter

**No manual editing needed!** Add a project to `/_projects/`, and it appears automatically.

## Creating a New Project Page

### Quick Steps

1. **Copy template**: Copy `/_projects/project-template.md` to `/_projects/your-project.md`
2. **Update front matter**: Edit title, permalink, excerpt, header image, set `published: true`
3. **Add assets**: Create `/assets/projects/your-project/` folder
4. **Edit content**: Update abstract, methods, results, citation
5. **Done!** - The landing page updates automatically
6. **Test**: `bundle exec jekyll serve`
7. **View**: `http://localhost:4000/en/projects/your-project/`

## Important Notes

- Template file is at `/_projects/project-template.md` with `published: false`
- Remove `published: false` or set `published: true` in your project file
- The landing page only shows projects with `published: true` (or without the field)
- Project pages must be in `/_projects/` folder (Jekyll collection)
- Landing page is accessible via the "Projects" button in the site header

## File Locations

- **Landing page**: `/_pages/en/projects/index.md` (this folder)
- **Project files**: `/_projects/` (top-level folder - Jekyll collection)  
- **Template**: `/_projects/project-template.md` (has `published: false`)
- **Assets**: `/assets/projects/your-project/`

For detailed instructions on creating projects, see `/_projects/README.md`.
