---
lang: de
title: A state observer for Balanced Neural ODEs validated on real-world data
additional_info: https://iclr.cc/virtual/2025/poster/28422
tags: ["ba","pm",]
date: 2026-04-22
---
Die Energiewende stellt uns vor die Herausforderung, flexibel auf die schwankende Erzeugung aus erneuerbaren Quellen zu reagieren. Nötig dafür ist die optimale Steuerung von Energieverbrauchern, z.B. der Wärmeversorgung von Gebäuden zu Zeiten von starker Windkrafterzeugung. 

Die Anwendung von modellprädiktiver Regelung ermöglicht es, unter der Berücksichtigung der Dynamik eines Systems eine Optimierung der Stellgrößen zu erreichen. Z.B. würden dann die Wärmepumpen für die Gebäudebeheizung anspringen, wenn eine hohe Produktion erneuerbarer Energien erwartet wird (Emissionsreduktion), während gleichzeitg durch Einbeziehung der Trägheit des Gebäude (modellprädiktive Regelung) ein durchgängig komfortabler Temperaturbereich erreicht wird.

Balanced Neural ODEs können dazu dienen, aus aufgenommenen Messdaten datenbasiert ein Modell für die Dynamik von Systemen herzuleiten. 
In der Vergangenheit wurden Balanced Neural ODEs jedoch nur für die Modellordnungsreduktion von simulativ erzeuten Daten genutzt. 
Deshalb ist in diesem Modellierungsframework noch kein Zustandsschätzer für den Startzustand vorhanden. 
Eine Zustandsschätzung ist für modellprädiktive Regelung jedoch zwingend erforderlich, da die nicht zu vermeidende Abweichung des Systemmodells von dem Realsystem regelmäßig kompensiert werden muss.

In dieser Arbeit soll ein einfacher, auf dem Luenberger-Observer basierender Zustanddschätzer entwickelt werden. Je nach Vorankommen und Interesse kann darüber hinaus auch ein Kalman-Filter (hier bestehen Vorarbeiten) oder ein numerischer Zustandsschätzer (durch eine Optimierung mit dem Ersatzmodell) entwickelt werden und verglichen werden. Zur Validierung des Ansatzes stehen synthetische Daten von Beispielmodellen sowie ein Real-Datensatz aus einem gut untersuchten Bürogebäude zur Verfügung.