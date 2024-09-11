---
lang: de
img_src: assets\boborzi\instantmesh.png
title: Fine-tuning von Large Reconstruction Models für die 3D Objektgenerierung
copyright: TencentARC
tags: ["pm", "ma"]
date: 2024-09-11
---
Kann man per Knopfdruck 3D-Objekte erzeugen? Generative Modelle wie Stable Diffusion oder DALL-E können bereits beeindruckende Bilder anhand einer Beschreibung auf Knopfdruck erzeugen. Das wäre auch für 3D-Objekte interessant, und tatsächlich lassen sich Methoden der Bildgenerierung auch zur Erzeugung von 3D-Objekten nutzen. Allerdings sind die Ergebnisse oft noch nicht so überzeugend wie im Bildbereich und haben häufig eine lange Rechenzeit.

Large Reconstruction Models (zum Beispiel [InstantMesh](https://huggingface.co/spaces/TencentARC/InstantMesh)) sollen vor allem das Problem der langen Rechenzeit lösen, indem ein großes Transformermodell darauf trainiert wird, in einem Durchgang direkt ein 3D-Modell zu erzeugen.

Aus dem Bildbereich kennt man verschiedene Methoden, um große generative Modelle durch Fine-Tuning anzupassen, um einen bestimmten Stil oder eine bestimmte Art von Bildern zu erzeugen. Ähnlich soll in dieser Arbeit untersucht werden, wie ein Large Reconstruction Model mithilfe von Fine-Tuning angepasst werden könnte, um Objekte aus einer bestimmten Domäne, wie beispielsweise Fahrzeuge, besser generieren zu können.
