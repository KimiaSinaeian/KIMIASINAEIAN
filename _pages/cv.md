---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======

- **PhD candidate, Chemical Engineering**, Yale University, 2022–present
- **BS, Chemical Engineering**, University of Tehran

Research
======

**Graduate Researcher, Computational Soft Matter Group — Yale University**

- Study homogeneous and heterogeneous ice nucleation using molecular dynamics and rare-event sampling.
- Investigate the interactions between antifreeze proteins and ice-water interfaces.
- Apply high-throughput analysis and machine-learning methods to improve reaction coordinates for molecular simulation.

Selected leadership and service
======

- STEM Career Fellow, Yale Office of Career Strategy
- Advanced Graduate Leadership Program, Yale Engineering
- Graduate Professional Experience Fellow, Yale Office of International Students & Scholars
- Alumni Chair, Graduate Student Women in Engineering (GradSWE), Yale University

Methods and tools
======

- Molecular dynamics and rare-event simulation
- Statistical thermodynamics and soft-matter modeling
- High-throughput data analysis and machine learning
- Scientific computing with Python

Skills
======

- **Programming:** Python, C++, MATLAB, Linux, Bash
- **Scientific Computing:** GROMACS, LAMMPS, PLUMED, VMD, PyMOL, Molecular Dynamics, Replica Exchange MD, Umbrella Sampling, Monte Carlo
- **Data & ML:** AlphaFold, scikit-learn, PyTorch, data pipelines, SHAP, feature engineering, model evaluation
- **Infrastructure & Workflow:** HPC, SLURM, job arrays, reproducible analysis pipelines, workflow automation, file-schema standardization, performance profiling

Publications
======

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
