---
lang: de
img_src: assets\hoepfner\mpc.gif
title: Vergleich von Optimal-Control-Toolchains in Julia
additional_info: https://en.wikipedia.org/wiki/Optimal_control
tags: ["pm", "fm", "sa", "sb", "ba"]
date: 2025-05-20
---
Am Lehrstuhl für Mechatronik beschäftigen wir uns regelmäßig mit Optimal-Control-Problemen, insbesondere im Kontext modellprädiktiver Regelung (MPC). Für die Umsetzung solcher Algorithmen ist die Programmiersprache *Julia* besonders interessant. Es existieren bereits mehrere Pakete und Workflows zur Lösung von Optimal-Control-Problemen, z. B.:

- [*OptimalControl.jl*](https://github.com/control-toolbox/OptimalControl.jl)  
- [*ModelPredictiveControl.jl*](https://github.com/JuliaControl/ModelPredictiveControl.jl)  
- [*NLOptControl.jl*](https://github.com/JuliaMPC/NLOptControl.jl)  
- ...

**Ziel der Arbeit** ist es, einen systematischen Überblick über bestehende Julia-Toolchains zur Lösung von Optimal-Control- und MPC-Problemen zu gewinnen. Dazu sollen relevante Pakete identifiziert, in ihrer Funktionsweise analysiert und hinsichtlich ausgewählter Kriterien verglichen werden.

Mögliche Fragestellungen sind u. a.:

- Entwicklungsstand und Community-Aktivität  
- Funktionsumfang und unterstützte Features  
- Eignung für echtzeitfähige Anwendungen  
- Kompatibilität mit DGL-Lösern ([*DifferentialEquations.jl*](https://github.com/SciML/DifferentialEquations.jl))
- Anbindung an Optimierungs-Backends wie [*Optim.jl*](https://github.com/JuliaNLSolvers/Optim.jl), [*Optimisers.jl*](https://github.com/FluxML/Optimisers.jl)  
- Unterstützung verschiedener Modellarten (z. B. neuronale Netze, FMUs, [*ModelingToolkit.jl*](https://github.com/SciML/ModelingToolkit.jl),...)  
- Differenzierbarkeit mit verschiedenen AD-Backends ([*ForwardDiff.jl*](https://github.com/JuliaDiff/ForwardDiff.jl), [*Zygote.jl*](https://github.com/FluxML/Zygote.jl), [*Enzyme.jl*](https://github.com/EnzymeAD/Enzyme.jl),...)  
- Vergleich mit MPC-Toolboxen anderer Sprachen, z. B. [*do-mpc*](https://www.do-mpc.com/), MATLABs *Model Predictive Control Toolbox*  
- Umsetzung von MPC-Strategien mit FMUs über [*FMI.jl*](https://github.com/ThummeTo/FMI.jl)

**Der Umfang der Arbeit** kann flexibel gestaltet werden und richtet sich nach dem gewählten Format. Einzelne Teilaspekte wie *MPC mit FMUs* oder *Differenzierbarkeit von OC-Formulierungen* lassen sich auch im Rahmen einer vertieften Abschlussarbeit gesondert bearbeiten.
