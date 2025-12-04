---
lang: de
img_src: assets\kircher\Showroom_1.png
title: Differenzierbarkeit von Nachbarschaftssuche und der Earth Mover's Distance
tags: ["pm", "ma", "fm", "ba"]
date: 2025-12-06
---
Im Kontext von Deep Learning und Neuronalen Netzen ist für den Trainingsprozess unerlässlich, dass der Code vollständig differenzierbar ist, um die Gradienten für die Trainingsupdates berechnen zu können. Bei zwei Teilen ist dies aktuell noch nicht so.

In vorhergegangen studentischen Arbeiten wurde eine GPU-fähige Nachbarschaftssuche und eine Lossfunktion basierend auf der Earth Mover's Distance implementiert. Diese sind in der aktuellen Form nicht differenzierbar.

Das Ziel der Arbeit ist die Untersuchung, ob einerseits eine differenzierbare Implementierung anhand der bestehenden Modul möglich ist, oder ob andererseits in der Literatur passendere Algorithmen verfügbar sind, die es dann zu implementieren gilt.

Vorgehen:
- Einarbeitung in die Nachbarsschaftssuche und Earth Mover's Distance
- Überprüfung der Anwendbarkeit von AD und Literaturrecherche
- Implementierung und Testung

Vorraussetzungen:
- Vorkenntnisse in Julia sind wünschenswert
- Erfahrungen mit NeuralODE und AD sind von großem Vorteil
