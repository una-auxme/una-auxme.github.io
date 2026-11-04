---
lang: de
img_src: assets\kircher\Showroom_1.png
title: Vergleich und Implementierungen von verschiedenen Training Schedulern
tags: ["pm", "fm", "ba"]
date: 2026-08-31
---

Im Training von Graph Neural Networks ist die Auswahl des nächsten Trainingsamples entscheidend. Da es hierfür aktuell bis auf eine Random-Auswahl keine weiteren Strategien für GNNs gibt, ist die Identifikation von anderen möglichen Schedulern aus anderen Trainingsdomänen und deren Vergleich anhand eines Beispiels das Ziel der Arbeit.

Vorgehen:
- Recherche von bestehenden Sampling-Algorithmen
- Auswahl der Methoden zur Anwendung auf GNS
- Implementierung und Testung
- Laufzeitanalyse und Vergleich der Methoden

Vorraussetzungen:
- Vorkenntnisse in Julia sind wünschenswert
