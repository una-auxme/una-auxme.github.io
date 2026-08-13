---
layout: single
title: "ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots"
permalink: /projects/ros2smolvla/
lang: en
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/projects/ism2026_ros2smolvla/workbench_overview_cropped.jpg
  caption: "Photo credit: Noah Böckmann"
  actions:
    - label: "📄 Paper"
      url: "#"
    - label: "💻 Code"
      url: "https://github.com/una-auxme/ur10e_vla_docker"
    - label: "📊 arXiv"
      url: "#"
excerpt: "ROS2SmolVLA enables industrial-grade lightweight robots to use small Vision-Language-Action (VLA) Models integrated with ROS 2."
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
  <iframe src="https://www.youtube.com/embed/rlC03Z4fm88" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

**Key Insight:** SmolVLA produces feasible results in and out of distribution in a pick-and-place task.

## Method Overview

![Architecture](/assets/projects/ism2026_ros2smolvla/ros2smolvla_dataflow.png){: .align-center}
{: .figure-caption}
**Figure 1:** Data flow and architecture of ROS2SmolVLA and its components.


We present ROS2SmolVLA, a ROS 2-based interface that enables the deployment of Hugging Face’s lightweight SmolVLA model on industrial-grade Universal Robots UR10e. The framework bridges real-time robotic control with on-premise inference, allowing vision-language-action reasoning directly on edge hardware. By integrating multi-modal sensor data—visual inputs from multiple cameras, robot state feedback, and natural language instructions—ROS2SmolVLA enables adaptive, closed-loop robot behavior for tasks like pick-and-place, even in large workspaces.

### Key Components

- **ROS 2 Interface ([LeRobot-ROS2 interface](https://github.com/una-auxme/lerobot-ros)):** Acts as a lightweight broker between the LeRobot ecosystem and ROS 2, enabling seamless communication between the VLA policy and robot controllers without managing low-level hardware cycles.
- **Multi-Modal Data Acquisition ([LeRobot-camera interface](https://github.com/una-auxme/lerobot-roscam)):** Standardizes ingestion of asynchronous camera feeds from top, side, and end-effector-mounted cameras, converting them into uncompressed images compatible with SmolVLA’s input requirements.
- **Containerized Inference ([UR10e VLA Docker](https://github.com/una-auxme/ur10e_vla_docker)):** Isolates dependencies and ensures reproducibility across development, simulation, and production environments, enabling efficient execution on edge devices with consumer-grade hardware.
- **Simulation Environment ([UR10e simulation in Gazebo](https://github.com/una-auxme/ur10e_vla_sim)):** A Gazebo-based digital twin that replicates the physical robot’s kinematics, camera setup, and workspace layout, enabling pre-validation and policy testing in a simulated environment before real-world deployment.
- **Real-World Data Collection ([UR10e interface](https://github.com/una-auxme/ur10e_vla_real)):** A dedicated ROS 2 package for capturing high-fidelity, real-world training data from the physical UR10e setup, including synchronized joint states, camera streams, and action trajectories—essential for robust, sim-to-real transfer and model fine-tuning.

## Results

### Quantitative Results

The system achieved **77.72% overall success rate** in pick-and-place tasks across 9 test scenarios. In-distribution tasks reached **78.33%** pick and **92.47% place after successful pick**, while out-of-distribution cases showed **76.56% pick** but dropped to **61.22% place after pick**, primarily due to visual biases. Color and shape generalization remained limited, with gray cubes picked correctly only 20% of the time when explicitly prompted.

### Qualitative Analysis 

The model demonstrated strong spatial reasoning in familiar configurations but struggled with occlusions and novel box colors (e.g., black box detection failed in 83% of cases). A significant bias toward blue objects as a drop trigger was observed, indicating overfitting to training data textures. Despite this, the system successfully recovered from failed grasps in 75% of attempts, highlighting the value of failure-state training. Lessons learned emphasize the need for diverse training data, strategic camera cropping, and careful prompt engineering to mitigate model biases.

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

<p>This website is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>