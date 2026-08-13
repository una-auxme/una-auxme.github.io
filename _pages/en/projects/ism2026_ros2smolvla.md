---
layout: single
title: "ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots"
permalink: /projects/ros2smolvla/
lang: en
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/projects/ism2026_ros2smolvla/workbench_overview_cropped.jpg
  actions:
#    - label: "📄 Paper"
#      url: "#"
    - label: "💻 Code"
      url: "https://github.com/una-auxme/ur10e_vla_docker"
#    - label: "📊 arXiv"
#      url: "#"
excerpt: "ROS2SmolVLA enables industrial-grade lightweight robots to use small Vision-Language-Action (VLA) Models integrated with ROS2."
author_profile: false
toc: false
toc_label: "Contents"
toc_sticky: true
---

<style>
.project-meta {
    text-align: center;
    margin: 2em 0;
    padding: 1.5em;
    border-radius: 8px;
    background: rgba(255,255,255,0.05);
}

.authors {
    margin: 1em 0;
    font-size: 1.1em;
}

.authors a {
    margin: 0 0.5em;
}

.award-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #000;
    padding: 0.5em 1em;
    border-radius: 20px;
    margin: 0.5em;
    font-weight: 600;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin: 2em 0;
    border-radius: 8px;
    background: rgba(255,255,255,0.05);
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.figure-caption {
    text-align: center;
    font-style: italic;
    margin-top: 1em;
    opacity: 0.8;
}

.bibtex-box {
    background: rgba(255,255,255,0.05);
    border-left: 4px solid #667eea;
    padding: 1.5em;
    margin: 1.5em 0;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    overflow-x: auto;
    border-radius: 4px;
}

.note-box {
    background: rgba(255, 193, 7, 0.1);
    border-left: 4px solid #ffc107;
    padding: 1em;
    margin: 1.5em 0;
    border-radius: 4px;
}
</style>

<div class="project-meta">
  <div class="authors">
    <a href="https://scholar.google.de/citations?user=oQEw8bsAAAAJ&hl=de">Nils Mandischer</a>
    <a>Noah Böckmann</a>
    <a>Ludwig Holl</a>
    <a href="https://scholar.google.de/citations?user=-5UzGXkAAAAJ&hl=de">Lars Mikelsons</a>
  </div>
  
  <div class="affiliations">
    <a href="https://www.uni-augsburg.de/de/fakultaet/fai/informatik/prof/imech/">University of Augsburg, Chair of Mechatronics</a> 
  </div>
  
  <div style="margin-top: 1em;">
    <strong>International Conference on Industry of the Future and Smart Manufacturing 2026</strong>
  </div>
</div>

## Abstract

Industrial demand changes the paradigms of production. Due to smaller batch sizes and more variations in products, companies face a growing challenge to adopt more adaptive production systems. In particular, robot-based automation is usually static and fails to respond to constantly changing production environments. Vision-Language-Action Models are a promising opportunity to mitigate this challenge by generating robot actions based on the observed system state. However, current research either focuses on large models that cannot be computed on premise, creating compliance and security challenges, or use lab-grade robot hardware that obscures exploitation in real industrial settings.

In this work, we adapt Hugging Face's SmolVLA for Universal Robots lightweight robots. Further, we release the open source repository ROS2SmolVLA that implements an interface for ROS~2 to SmolVLA, and makes it applicable for industrial-grade robots. By this, we allow a lenient adoption into lab and industrial environments. We validate the functionality of SmolVLA for a Universal Robots UR10e using a pick-and-place task and give implementation guidelines, particularly related to the larger robot workspace compared to the small 3D-printable robots commonly used with SmolVLA. Our findings support that SmolVLA is an interesting opportunity for small sized tasks that need to be computed on premise.

## Video

<div class="video-container">
  <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999;">
    [Your Video Embed Goes Here]
  </div>
</div>

**Key Insight:** SmolVLA produces feasible results in and out of distribution in a pick-and-place task.

## Method Overview

Describe your approach or method here. The page now uses the same styling as the rest of your site, with the dark theme and consistent formatting.

### Key Components

- **Component 1:** Description of the first key component of your method
- **Component 2:** Description of the second key component  
- **Component 3:** Description of the third key component

## Results

### Quantitative Results

<div style="background: rgba(255,255,255,0.05); padding: 3em; border-radius: 8px; text-align: center; color: #999;">
  [Place your results image here: /assets/projects/example-project/results.png]
</div>
{: .figure-caption}
**Figure 1:** Replace this with a detailed caption explaining your results. Describe what was tested, the conditions, and the key findings.

### Qualitative Analysis  

Describe qualitative results, ablation studies, or additional analyses here.

## Citation

<div class="bibtex-box">
<pre>
@inproceedings{ros2smolvla2026,
    author    = {Mandischer, Nils and B\"{o}ckmann, Noah and Holl, Ludwig and Mikelsons, Lars},
    title     = {ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots},
    booktitle = {International Conference on Industry of the Future and Smart Manufacturing, Padua \& Venice, Italy},
    year      = {2026}
}
</pre>
</div>

---

<div style="text-align: center; margin-top: 3em; opacity: 0.7;">
  <p>This website is licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>
</div>
