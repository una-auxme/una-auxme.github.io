---
layout: single
title: "Projects"
permalink: /projects/
lang: en
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/logo/AuxMe.jpg
excerpt: "Explore our latest research projects, publications, and technical demonstrations."
author_profile: false
toc: false
---

<style>
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2em;
    margin: 2em 0;
}

.project-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: rgba(255,255,255,0.05);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.4);
}

.project-card a {
    text-decoration: none;
    color: inherit;
    display: block;
}

.project-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: #000;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
}

.project-content {
    padding: 1.5em;
}

.project-title {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 0.5em;
    color: #fff;
}

.project-excerpt {
    font-size: 0.95em;
    line-height: 1.6;
    opacity: 0.85;
    color: #ddd;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<!--p style="text-align: center; font-size: 1.1em; margin: 2em 0;">
  Browse our latest research projects, publications, and technical demonstrations.
</p-->

<div class="projects-grid">
  
  <!-- ROS2SmolVLA Project -->
  <div class="project-card">
    <a href="{{ '/projects/ros2smolvla/' | relative_url }}">
      <div class="project-image">
        <img src="/assets/projects/ism2026_ros2smolvla/workbench_overview_cropped.jpg" alt="ROS2SmolVLA">
        <div class="project-overlay"></div>
      </div>
      <div class="project-content">
        <h2 class="project-title">ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots</h2>
        <p class="project-excerpt">ROS2SmolVLA enables industrial-grade lightweight robots to use small Vision-Language-Action (VLA) Models integrated with ROS 2.</p>
      </div>
    </a>
  </div>

  <!-- Add more projects here following the same pattern -->
  <!-- Example placeholder for future projects:
  <div class="project-card">
    <a href="{{ '/projects/your-project/' | relative_url }}">
      <div class="project-image">
        <img src="/assets/projects/your-project/header.jpg" alt="Project Title">
        <div class="project-overlay"></div>
      </div>
      <div class="project-content">
        <h2 class="project-title">Your Project Title</h2>
        <p class="project-excerpt">Brief description of your project.</p>
      </div>
    </a>
  </div>
  -->

</div>

---

<div style="text-align: center; margin-top: 4em; opacity: 0.7;">
  <p>Want to collaborate on a project? <a href="https://www.uni-augsburg.de/de/fakultaet/fai/informatik/prof/imech/">Contact us</a>.</p>
</div>
