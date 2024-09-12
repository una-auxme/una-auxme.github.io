---
lang: de
img_src: assets\kircher\emd.png
title: Vergleich von Loss Funktionen bei KI-getriebenen Partikelsimulationen
additional_info: assets\kircher\learning_to_simulate_comp.pdf
tags: ["pm", "fm", "ba", "ma"]
date: 2024-11-10
---
Partikelmethoden unterscheiden sich von anderen Machine Learning-Ansätzen durch ihr chaotisches Verhalten. Klassiche Distanzmethoden wie der Mean Squared Error können mit diesem Umstand nicht gut umgehen. Beispielsweise können Partikel innerhalb eines Wassertröpfchens sich chaotisch bewegen, obwohl die insgesamte Geometrie sich nicht verändert. Dadurch entsteht eine Diskrepanz zwischen Trainingsdaten und gelernten Partikeln, was in einem unnatürlich großen Fehler resultiert. Ich befasse mich mit der Verbesserung von KI-gestützter Simulation von großen Partikelsystemen. Mein Arbeit basiert dabei auf dem Paper von Sanchez et al. (Link unter dem Foto).

Ein Ansatz diesen Umstand zu negieren ist die Earth Movers Distance. Dabei werden die Distanzen zwischen allen Partikeln des Trainingsdatensatzs und des Ausgangs des Neuronalen Netzes minimiert, sodass eine aussagekräftige Loss Funktion erhalten wird. Die Methodik ist dabei nicht nur auf diesen Ansatz begrenzt.

Mögliches Vorgehen:
- Recherche von Lossfunktionen im Zusammenhang mit Partikelsystemen
- Einarbeiten in das Julia-Package GNS.jl
- Implementierung der Methoden
- Gegenüberstellen von verschiedenen Ansätzen
- Validierung der Ergebnisse an einem Test-Case

Vorrausstetzungen:
- Keine
- Erste Kenntnisse in Julia oder Python hilfreich
- Interesse an Partikelsimulationen hilfreich