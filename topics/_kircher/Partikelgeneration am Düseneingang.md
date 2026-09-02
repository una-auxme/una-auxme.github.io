---
lang: de
img_src: assets\kircher\Showroom_1.png
title: Implementierung von Partikelquellen für Graph Network Simulators
tags: ["pm", "ma"]
date: 2025-12-06
---
Um Partikel in einer Simulation hinzuzufügen, beispielsweise als Wasserstrahl durch eine Düse, gibt in herkömmlichen CFD-Tools viel Ansätze.

Im Gegensatzu zu dieses Tool fassen wir das Partikelsystem als NeuralODE auf, wodurch sich durch hinzufügen von Partikeln der Zustandraum ändert, was nicht ganz trivial ist und Einfluss auf die Performance hat.

Die Aufgabe dieser Arbeit ist es die bestehenden Ansätze aus CFD-Tools zu analysieren und in geeigneter Weise auf die Graph Networksimulators anzuwenden.

Vorgehen:
- Recherche von bestehenden Partikelgenerationsalgorithmen
- Auswahl der Methoden zur Anwendung auf GNS
- Implementierung und Testung
- Laufzeitanalyse und Vergleich der Methoden

Vorraussetzungen:
- Vorkenntnisse in Julia sind wünschenswert
- Erste Erfahrungen mit Partikelsimulationen sind von Nutzen
