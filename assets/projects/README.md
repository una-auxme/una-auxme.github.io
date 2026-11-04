# Project Assets

This folder contains assets (images, videos, data files, etc.) for project pages.

## Organization

Each project should have its own subfolder:

```
assets/projects/
├── example-project-1/
│   ├── hero-image.png
│   ├── results-figure.png
│   └── diagram.svg
├── example-project-2/
│   ├── comparison.png
│   └── ablation.png
└── README.md (this file)
```

## File Naming Conventions

Use descriptive, lowercase names with hyphens:
- ✅ `results-comparison.png`
- ✅ `ablation-study-graph.png`
- ✅ `system-architecture-diagram.svg`
- ❌ `fig1.png`
- ❌ `ResultsComparison.png`

## Recommended File Formats

- **Images**: PNG (for screenshots, graphs), JPG (for photos), SVG (for diagrams)
- **Videos**: Host on YouTube/Vimeo and embed (don't store large video files in repo)
- **Data**: JSON, CSV for interactive visualizations

## Image Size Guidelines

- Hero images: 1200-1600px wide
- Result figures: 800-1200px wide
- Thumbnails: 300-400px wide
- Keep file sizes under 500KB when possible (optimize images)

## Optimization Tips

1. Compress images before adding them to the repository
2. Use appropriate formats (PNG for graphics, JPG for photos)
3. Consider using SVG for diagrams and charts (scalable and small file size)
4. Host videos externally rather than in the repository
