---
lang: de
title: Investigation of KAN-ODEs
additional_info: https://doi.org/10.1016/j.cma.2024.117397
tags: ["ba","pm","ma"]
date: 2026-04-22
---

Die Grundlage des modernen Machine Learnings besteht auf Multilayer-Perceptrons (MLP, Neuronale Netzwerke), bei denen Gewichtungsfaktoren im Training so gelernt werden, dass das neuronale Netzwerk den gewünschten Output liefert. Das universelle Approximationstherorem besagt, dass ein neuronales Netz mit dieser Struktur jede kontinuierliche Funktion approximieren kann, wenn es nur groß genug ist. Kolmogorov und Arnold haben ein alternatives Approximationstheorem entwickelt, dass jedoch darauf beruht, dass die Aktivierungsfunktionen im neuronalen Netzwerk gelernt werden, und nicht die Gewichtungsfaktoren. 

Schon vor der Veröffentlichung des initialen Papers [1] hat das Thema "Kolmogorov Arnold Networks" (KAN) einen Hype entfacht, mit Versprechungen wie besserer Generalisierungsfähigkeit, vermeiden von katastrophalem Vergessen, höhere Genauigkeit, inbesondere im Bereich physics-informed Neural Networks, und einem geringeren Bedarf an Größe des Netzwerkes. All dies sind Eigenschaften, die grundsätzlich für meine Arbeit, die Entwicklung von schnellen Surrogatmodellen, spannend sind. 

In dieser Arbeit soll die Anwendung von KAN zum Lernen von Dynamik als Approximation einer Differentialgleichung untersucht werden (NeuralODEs mit KAN als rechte Seite anstatt MLP). Die Arbeiten [2] und [3] haben dies bereits untersucht und vielversprechende Ergebnisse auf Beispielproblemen erzielt. In dieser Arbeit sollen diese Ergebnisse auf anderen Beispielmodellen repliziert und KAN-ODEs auf andere, technische Datensätze wie den eines Wärmepumpenmodelles angewendet werden.

Wenn du dich dafür interessiert, eine spannende und potenziell sehr vielversprechende Technik des maschinellen Lernens kennenzulernen, ist diese Arbeit etwas für dich!

## Literatur

1. Liu, Ziming, Yixuan Wang, Sachin Vaidya, Fabian Ruehle, James Halverson, Marin Soljacic, Thomas Y. Hou und Max Tegmark. 2024. "KAN: Kolmogorov-Arnold Networks". https://openreview.net/forum?id=Ozo7qJ5vZi (abgerufen am 16. Mai 2025).

2. Koenig, B. C., Kim, S. und Deng, S. 2024. "KAN-ODEs: Kolmogorov-Arnold Network Ordinary Differential Equations for Learning Dynamical Systems and Hidden Physics". Computer Methods in Applied Mechanics and Engineering 432, 117397. https://doi.org/10.1016/j.cma.2024.117397

3. Liu, W., Bacsa, K., Tang, L. C. und Chatzi, E. 2025. "Structured Kolmogorov-Arnold Neural ODEs for Interpretable Learning and Symbolic Discovery of Nonlinear Dynamics". arXiv:2506.18339. https://doi.org/10.48550/arXiv.2506.18339
