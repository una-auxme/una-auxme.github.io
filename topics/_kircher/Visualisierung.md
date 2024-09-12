---
lang: de
img_src: assets\kircher\LIPOst.png
title: Visualsierung von Simulationsergebnissen in Julia
tags: ["sb", "sm"]
date: 2024-11-10
---
In Computational Fluid Dynamic ist es notwendig die Vielzahl von Daten zu visualisieren, um alle relevanten Ergebnisse aus den Daten zu extrahieren. Das gängigste Dateiformat ist hierbei VTK. Den Graph Network-based simulators fehlt dieses wichtige und mächtige Tool jedoch noch. Dein Auftrag, wenn du dich entschließt ihn anzunehmen, lautet: 

Mögliches Vorgehen:
- Untersuchung der bereits vorhandenen Implementierungen von VTK-Writern in Julia
- Einarbeitung in das Julia-Package GNS.jl
- Auseinandersetzen mit dem .vtk Dateiformat
- Implementierung eines eigenen VTK-Writers um Simulationsergebnisse mit einem passenden Tool (z.B. Paraview) zu visualisieren

Voraussetzungen:
- Keine
- Erste Erfahrungen mit Julia oder Python hilfreich
- Interesse an Partikelsimulationen hilfreich