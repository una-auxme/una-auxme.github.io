---
lang: de
img_src: assets\luttkus\robot_sf.png
title: Integration von Robot-SF in SLURM-Umgebung
tags: ["pm"]
date: 2024-09-10
---
Im Rahmen dieses Projektmoduls soll die Trainingsumgebung [Robot-SF](https://github.com/ll7/robot_sf_ll7) für eine effiziente Nutzung auf unserem Servercluster optimiert werden. Robot-SF ist eine Simulationsumgebung, in der ein Roboter mittels Reinforcement Learning (RL) trainiert wird, sich sicher in einer 2D-Umgebung mit Fußgängern zu bewegen.

Da RL-Methoden sehr ressourcenintensiv sind, ist es das Ziel dieses Projekts, das Training auf unseren Servern zu optimieren. Dazu soll die gesamte Trainingsumgebung für die Ausführung als SLURM-Job angepasst werden. Dies ermöglicht eine effiziente Nutzung der verfügbaren Rechenressourcen und eine bessere Skalierbarkeit des Trainings.

Zusätzlich soll das Tool Weights & Biases integriert werden, um eine umfassende Überwachung und Analyse des Trainingsprozesses zu ermöglichen. Dies wird die Optimierung und Fehlerbehebung des Trainingsablaufs erleichtern.

Durch die Umsetzung dieses Projekts wird Robot-SF für einen breiteren Einsatz auf unserem Servercluster vorbereitet, was zukünftige Forschungs- und Entwicklungsarbeiten in diesem Bereich erheblich unterstützen wird.
