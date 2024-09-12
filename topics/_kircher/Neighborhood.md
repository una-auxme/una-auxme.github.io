---
lang: de
img_src: assets\kircher\neighborhood.png
title: GPU Nachbarschaftssuche für Partikel
additional_info: assets\kircher\learning_to_simulate_comp.pdf
tags: ["pm", "fm", "ba", "ma"]
date: 2024-11-10
---
Ich befasse mich mit der Verbesserung von KI-gestützter Simulation von großen Partikelsystemen. Mein Arbeit basiert dabei auf dem Paper von Sanchez et al. (Link unter dem Foto). Ein wichtiger Bestandteil dabei ist die Nachbarschaftssuche, die für den Aufbau des Graphen benötigt wird. Dieser Schritt ist zu jedem Simulationszeitpunkt notwendig und wird aktuell immer komplett ausgeführt auch wenn sich der Graph zwischen Zeitschritten nur minimal ändert. Außerdem ist die Suche bisher nur CPU implementiert und nicht parallelisiert.

Vorgehen:
- Recherche von Nachbarschaftssuche-Algorithmen in Julia und Forschung
- Einarbeiten in das Julia-Package GNS.jl
- Implementierung der Methoden
- Gegenüberstellen von verschiedenen Ansätzen
- Validierung der Ergebnisse an einem Test-Case

Vorrausstetzungen:
- Keine
- Erste Kenntnisse in Julia oder Python hilfreich
- Interesse an Partikelsimulationen hilfreich