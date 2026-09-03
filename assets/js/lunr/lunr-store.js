var store = [{
        "title": "Iterative Data Generation for training of Balanced Neural ODEs",
        "excerpt":"Die Energiewende stellt uns vor die Herausforderung, Energie effizient zu nutzen und flexibel auf die schwankende Erzeugung aus erneuerbaren Quellen zu reagieren. Hochaufgelöste Simulationen physikalischer Systeme (z. B. CFD) sind für die Optimierung dieser Prozesse unverzichtbar – aber oft zu rechenintensiv für den praktischen Einsatz in iterativen Optimierungen. Die Lösung: Model...","categories": [],
        "tags": ["ba","pm","sm"],
        "url": "/aka/iterative_data_generation.html",
        "teaser": null
      },{
        "title": "Linear Controllers Development for nonlinear models via Koopman Operator",
        "excerpt":"Ein klassisches Prolem in praktischer und simulativer Anwendung ist die Parametrisierung von PID-Reglern. Diese sind notwendig, um Zielgrößen einzuregeln, die von bestimmten Stellgrößen abhängen. Für lineare Systeme besteht eine große Menge regelungstechnischer Theorie, optimale und stabile Regler zu entwickeln. In der Praxis herrschen jedoch nichtlineare Systeme vor, für die, ungeachtet...","categories": [],
        "tags": ["ba","pm","sm","ma"],
        "url": "/aka/linear_controllers.html",
        "teaser": null
      },{
        "title": "Comparison of Data Generation Methods for training of Balanced Neural ODEs",
        "excerpt":"Die Energiewende stellt uns vor die Herausforderung, Energie effizient zu nutzen und flexibel auf die schwankende Erzeugung aus erneuerbaren Quellen zu reagieren. Hochaufgelöste Simulationen physikalischer Systeme (z. B. CFD) sind für die Optimierung dieser Prozesse unverzichtbar – aber oft zu rechenintensiv für den praktischen Einsatz in iterativen Optimierungen. Die Lösung: Model...","categories": [],
        "tags": ["ba","pm","sm"],
        "url": "/aka/data_generation_comparison.html",
        "teaser": null
      },{
        "title": "Investigation of KAN-ODEs",
        "excerpt":"Die Grundlage des modernen Machine Learnings besteht auf Multilayer-Perceptrons (MLP, Neuronale Netzwerke), bei denen Gewichtungsfaktoren im Training so gelernt werden, dass das neuronale Netzwerk den gewünschten Output liefert. Das universelle Approximationstherorem besagt, dass ein neuronales Netz mit dieser Struktur jede kontinuierliche Funktion approximieren kann, wenn es nur groß genug ist....","categories": [],
        "tags": ["ba","pm","ma"],
        "url": "/aka/kan_odes.html",
        "teaser": null
      },{
        "title": "A state observer for Balanced Neural ODEs validated on real-world data",
        "excerpt":"Die Energiewende stellt uns vor die Herausforderung, flexibel auf die schwankende Erzeugung aus erneuerbaren Quellen zu reagieren. Nötig dafür ist die optimale Steuerung von Energieverbrauchern, z.B. der Wärmeversorgung von Gebäuden zu Zeiten von starker Windkrafterzeugung. Die Anwendung von modellprädiktiver Regelung ermöglicht es, unter der Berücksichtigung der Dynamik eines Systems eine...","categories": [],
        "tags": ["ba","pm"],
        "url": "/aka/state_observer.html",
        "teaser": null
      },{
        "title": "Representation of uncertainties with Balanced Neural ODEs",
        "excerpt":"Unsicherheiten begegnen uns überall: in Wettervorhersagen, durch Rundungsfehler im Computer, Bauteiltoleranzen oder Messungenauigkeiten. In Simulationen werden sie jedoch häufig nur am Rande beruecksichtigt. Die am Lehrstuhl fuer Mechatronik entwickelten Balanced Neural ODEs nutzen Methoden des probabilistischen Machine Learnings, um effizient und robust Ersatzmodelle fuer komplexe physikalische Systeme zu erzeugen. Bisher...","categories": [],
        "tags": ["ba","pm","ma"],
        "url": "/aka/uncertainty_modeling.html",
        "teaser": null
      },{
        "title": "Konditionierung von Diffusion Modellen",
        "excerpt":"Du findest generative Modelle wie Stable Diffusion oder DALL-E, die anhand von Text detailreiche Bilder erzeugen können, spannend und hast Interesse, dich in aktuelle Machine-Learning-Themen einzuarbeiten? In dieser Arbeit hast du die Möglichkeit, Methoden wie Stable Diffusion und SV3D genauer kennenzulernen. Stable Diffusion ermöglicht es, Bilder anhand von Text oder...","categories": [],
        "tags": ["pm","ma"],
        "url": "/boborzi/Diffusion.html",
        "teaser": null
      },{
        "title": "Fine-tuning von Large Reconstruction Models für die 3D Objektgenerierung",
        "excerpt":"Kann man per Knopfdruck 3D-Objekte erzeugen? Generative Modelle wie Stable Diffusion oder DALL-E können bereits beeindruckende Bilder anhand einer Beschreibung auf Knopfdruck erzeugen. Das wäre auch für 3D-Objekte interessant, und tatsächlich lassen sich Methoden der Bildgenerierung auch zur Erzeugung von 3D-Objekten nutzen. Allerdings sind die Ergebnisse oft noch nicht so...","categories": [],
        "tags": ["pm","ma"],
        "url": "/boborzi/LRM.html",
        "teaser": null
      },{
        "title": "Implementierung von Partikelquellen für Graph Network Simulators",
        "excerpt":"Um Partikel in einer Simulation hinzuzufügen, beispielsweise als Wasserstrahl durch eine Düse, gibt in herkömmlichen CFD-Tools viel Ansätze. Im Gegensatzu zu dieses Tool fassen wir das Partikelsystem als NeuralODE auf, wodurch sich durch hinzufügen von Partikeln der Zustandraum ändert, was nicht ganz trivial ist und Einfluss auf die Performance hat....","categories": [],
        "tags": ["pm","ma"],
        "url": "/kircher/Partikelgeneration%20am%20D%C3%BCseneingang.html",
        "teaser": null
      },{
        "title": "Multiple GPU Untersuchung",
        "excerpt":"Bisher wurden GraphNetSim nur auf einer GPU trainiert oder evaluiert. Für größe System erreicht der VRAM schon jetzt seine Grenzen. Um größere System zu unterstützen, soll untersucht werden, welche Möglichkeiten zur Parallisierbarkeit auf mehreren GPUs vorhanden sind und welcher Aufwand damit verbunden ist. Vorgehen: Recherche von Parallisierungsoptionen Gegenüberstellung der Optionen...","categories": [],
        "tags": ["ba","ma","pm"],
        "url": "/kircher/Multiple_GPU.html",
        "teaser": null
      },{
        "title": "Vergleich und Implementierungen von verschiedenen Training Schedulern",
        "excerpt":"Im Training von Graph Neural Networks ist die Auswahl des nächsten Trainingsamples entscheidend. Da es hierfür aktuell bis auf eine Random-Auswahl keine weiteren Strategien für GNNs gibt, ist die Identifikation von anderen möglichen Schedulern aus anderen Trainingsdomänen und deren Vergleich anhand eines Beispiels das Ziel der Arbeit. Vorgehen: Recherche von...","categories": [],
        "tags": ["pm","fm","ba"],
        "url": "/kircher/Schedulerstrategien.html",
        "teaser": null
      },{
        "title": "Anwendung von GraphNetSim auf weitere Use Cases",
        "excerpt":"Bisher wurden GraphNetSim nur auf einen Standarddatensatz mit schiefen Ebenen und für ballistische Würfe mit Tröpfen eingesetzt. Um die Anwendbarkeit auf andere Szenarien zu überprüfen, soll in dieser studentischen Arbeit ein weiteres Szenario betrachtet werden. Dabei handelt es sich entweder um einen Rührstab in einem Tank oder um eine Wellenbewegung,...","categories": [],
        "tags": ["ba","ma"],
        "url": "/kircher/Use%20Cases.html",
        "teaser": null
      },{
        "title": "Vorhersage von Leistungsfähigkeit von Menschen durch GPT Modelle",
        "excerpt":"Am Lehrstuhl für Mechatronik untersuchen wir Mensch-Roboter Interaktion von einem besonderen Blickwinkel. Jeder Mensch besitzt Fähigkeiten. Diese lassen sich bereits über arbeitsmedizinische Dokumentationsverfahren bewerten. Gleichsam lassen sich Anforderungen an einen Arbeitsprozess definieren. Über den Vergleich von Fähigkeiten und Anforderungen lässt sich dann auswerten, in welchen Bereichen eine Person eingesetzt werden...","categories": [],
        "tags": ["ma"],
        "url": "/mandischer/capability_gpt.html",
        "teaser": null
      },{
        "title": "Automatisierte Bereitstellung von IMBA-Anforderungsprofilerstellung",
        "excerpt":"Die Arbeit wird gemeinsam mit der iqpr – Institut für Qualitätssicherung in Prävention und Rehabilitation GmbH durchgeführt. Die Arbeit kann als externe Arbeit durchgeführt werden. Die Förderung der Teilhabe am Arbeitsleben von behinderten oder von Behinderung bedrohten Menschen ist in unterschiedlichen Kontexten nach wie vor eingeschränkt. Zum einen mangelt es...","categories": [],
        "tags": ["ba","ma"],
        "url": "/mandischer/iqpr.html",
        "teaser": null
      },{
        "title": "Reharobotik für Armfunktionstraining nach Schlaganfall",
        "excerpt":"Gemeinsam mit dem Therapiezentrum Burgau wollen wir zeitnah mit der Entwicklung eines Reharoboters starten, der zur teilautomatisierten Therapie im Armfunktionstraining nach Schlaganfall eingesetzt werden soll. Thema 1 Für Medizinsysteme ist Sicherheit von höchster Bedeutung. Insbesondere bei Lähmungen sind technische Fehler in der Roboterbewegung fatal, da die Patientinnen und Patienten im...","categories": [],
        "tags": ["ma"],
        "url": "/mandischer/reha.html",
        "teaser": null
      },{
        "title": "Virtual Reality in der robotergestützten Reha",
        "excerpt":"Gemeinsam mit dem Therapiezentrum Burgau erforschen wir, wie Roboter in der Rehabilitation nach Schlaganfall eingesetzt werden können. Ein wichtiger Aspekt dabei ist die Usability und die Akzeptanz durch die Patientinnen und Patienten. Im Rahmen der Studien- oder Abschlussarbeit soll untersucht werden, inwiefern Mixed Reality zur Unterstützung der Therapie eingesetzt werden...","categories": [],
        "tags": ["pm","ba","ma"],
        "url": "/mandischer/reha_vr.html",
        "teaser": null
      },{
        "title": "SciML against AML",
        "excerpt":"Jeder sechste Mensch stirbt laut WHO an Krebs. Dem gegenüber steht der stetige wissenschalftliche Fortschritt auf dem Gebiet der Krebsforschung, sodass viele Krebsarten geheilt werden können wenn sie frühzeitig erkannt und effektiv behandelt werden. Der Lehrstuhl Mechatronik startet 2025 zusammen mit dem Universitätsklinikum Augsburg Forschung im Bereich der Akuten myeloischen...","categories": [],
        "tags": ["sb","sm"],
        "url": "/thummerer/aml.html",
        "teaser": null
      },{
        "title": "Software für Scientific Machine Learning (SciML)",
        "excerpt":"Wenn mächtige, aber schwerfällige Simulationsmodelle aus der Industrie und nagelneue, flinke Methoden aus dem maschinellen Lernen zusammen kommen, dann kollidideren Welten - dank FMI.jl und FMIFlux.jl bekommt man davon aber (fast) nichts mit. Damit das so bleibt - und wir im Idealfall das “fast” im vorhergehenden Satz bald komplett streichen...","categories": [],
        "tags": ["pm","fm"],
        "url": "/thummerer/sciml.html",
        "teaser": null
      },{
        "title": "Weiterentwicklung unserer Softwarepakete für Graph Neural Networks",
        "excerpt":"Die Programmiersprache Julia wächst aktuell stark in ihrer Anwendung sowohl in der Forschung als auch in der Industrie bei großen Unternehmen wie beispielsweise ASML und Bosch. Dabei arbeitet unser Lehrstuhl aktiv an der (Weiter-)entwicklung unser aktuellen Softwarepakete für Julia, besonders im Bereich Graph Neural Networks. Dabei gibt es immer aktuelle...","categories": [],
        "tags": ["pm","ba","ma"],
        "url": "/trommer/software.html",
        "teaser": null
      },{
        "title": "Weiterentwicklung der Methodik von Graph Neural Networks",
        "excerpt":"Graph Neural Networks (GNNs) eignen sich hervorragend als Surrogatmodelle für graphbasierte Simulationen, denen komplexe physikalische Phänomene zugrunde liegen. Durch das Lernen lokaler Zusammenhänge können sie auch bei sich ändernden Geometrien oder Topologien des Graphen weiterverwendet werden, ohne dass ein erneutes Training erforderlich ist. In dieser Arbeit soll die Methodik des...","categories": [],
        "tags": ["pm","ba","ma"],
        "url": "/trommer/methods.html",
        "teaser": null
      },{
        "title": "Datengetriebene Beobachter",
        "excerpt":"Du hast Kenntnisse in der Regelungstechnik und Interesse an der Integration von KI-Methoden in die Regelungs-/Steuerungsmethoden? In der Regelungstechnik ist ein Beobachter ein System, das aus bekannten Eingangsgrößen (z.B. Stellgrößen oder messbaren Störgrößen) und Ausgangsgrößen (Messgrößen) eines beobachteten Bezugssystems nicht messbare Größen (Zustände) rekonstruiert. Für nichtlineare Systeme mit teilweiser unbekannter...","categories": [],
        "tags": ["sa","ma"],
        "url": "/zhang/Data-Driven%20Observer.html",
        "teaser": null
      },{
        "title": "Datengetriebene Model Predictive Control",
        "excerpt":"Du hast Kenntnisse in der Regelungstechnik und Interesse an der Integration von KI-Methoden in die Regelungs-/Steuerungsmethoden? Model Predictive Control ist eine Reglungstechnik, bei der ein System – wie z. B. ein Auto, eine Drohne oder eine Industrieanlage – in die Zukunft “blickt”, um zu entscheiden, was es als Nächstes tun...","categories": [],
        "tags": ["sa","ma"],
        "url": "/zhang/Data-Driven%20MPC.html",
        "teaser": null
      }]
