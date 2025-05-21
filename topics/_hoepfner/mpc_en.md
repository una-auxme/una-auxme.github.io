---
lang: en
img_src: assets\hoepfner\mpc.gif
title: Comparison of Optimal Control Toolchains in Julia
additional_info: https://en.wikipedia.org/wiki/Optimal_control
tags: ["pm", "fm", "sa", "sb", "ba"]
date: 2025-05-20
---
# Topic for Student Thesis: Comparison of Optimal Control Toolchains in Julia

At the Chair of Mechatronics, we regularly deal with optimal control problems, especially in the context of model predictive control (MPC). For implementing such algorithms, the Julia programming language is of particular interest. Several packages and workflows for solving optimal control problems already exist, including:

- [*OptimalControl.jl*](https://github.com/control-toolbox/OptimalControl.jl)  
- [*ModelPredictiveControl.jl*](https://github.com/JuliaControl/ModelPredictiveControl.jl)  
- [*NLOptControl.jl*](https://github.com/JuliaMPC/NLOptControl.jl)  
- and other comparable solutions

**The goal of this thesis** is to provide a systematic overview of existing Julia-based toolchains for solving optimal control and MPC problems. Relevant packages should be identified, analyzed in terms of their structure and workflows, and compared across a set of evaluation criteria.

Potential questions and topics of interest include:

- Development status and community activity  
- Comparison of available features  
- Suitability for real-time applications  
- Compatibility with differential equation solvers ([*DifferentialEquations.jl*](https://github.com/SciML/DifferentialEquations.jl))  
- Integration with optimization backends (e.g., [*Optim.jl*](https://github.com/JuliaNLSolvers/Optim.jl), [*Optimisers.jl*](https://github.com/FluxML/Optimisers.jl))  
- Support for different model types (e.g., neural networks, FMUs, [*ModelingToolkit.jl*](https://github.com/SciML/ModelingToolkit.jl), ...)  
- Differentiability using various automatic differentiation (AD) backends ([*ForwardDiff.jl*](https://github.com/JuliaDiff/ForwardDiff.jl), [*Zygote.jl*](https://github.com/FluxML/Zygote.jl), [*Enzyme.jl*](https://github.com/EnzymeAD/Enzyme.jl),...)  
- Comparison with MPC toolboxes in other programming environments (e.g., [*do-mpc*](https://www.do-mpc.com/), MATLAB’s *Model Predictive Control Toolbox*)  
- MPC using FMUs via [*FMI.jl*](https://github.com/ThummeTo/FMI.jl)

**The scope of the work** can be flexibly adapted depending on the type of student project. Specific subtopics such as *MPC with FMUs* or *differentiability of optimal control formulations* may also be explored in more depth within a full thesis.
