---
lang: de
img_src: assets\kircher\Showroom_1.png
title: Multiple GPU Untersuchung
tags: ["ba", "ma", "pm"]
date: 2026-08-31
---

Bisher wurden GraphNetSim nur auf einer GPU trainiert oder evaluiert. Für größe System erreicht der VRAM schon jetzt seine Grenzen. Um größere System zu unterstützen, soll untersucht werden, welche Möglichkeiten zur Parallisierbarkeit auf mehreren GPUs vorhanden sind und welcher Aufwand damit verbunden ist.

Vorgehen:
- Recherche von Parallisierungsoptionen
- Gegenüberstellung der Optionen
- Auswahl des passenden Ansatzes
- MWE
- Basis-Implementierung

Vorraussetzungen:
- Vorkenntnisse in Julia sind wünschenswert
