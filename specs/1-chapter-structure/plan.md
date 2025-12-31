# Implementation Plan: Book Chapter Structure

**Branch**: `1-chapter-structure` | **Date**: 2025-12-29 | **Spec**: `specs/1-chapter-structure/spec.md`
**Input**: Feature specification from `specs/1-chapter-structure/spec.md`

## Summary

Define a 12-chapter curriculum for "When Code Learns to Walk" that systematically progresses from Physical AI foundations through advanced humanoid robotics systems. Each chapter includes detailed content outlines, learning objectives aligned to Bloom's taxonomy, code example blueprints, and explicit treatment of real-world engineering constraints (physics, latency, safety, energy, sim-to-real transfer).

## Technical Context

**Language/Version**: Python 3.10+, C++17 (for performance-critical sections)
**Primary Dependencies**: ROS2, Gazebo/Ignition, PyBullet, MuJoCo, NumPy, SciPy, PyTorch
**Storage**: N/A (documentation project)
**Testing**: pytest (for code example validation), Docusaurus build verification
**Target Platform**: Linux (primary), macOS (supported), Windows (via WSL)
**Project Type**: Documentation/book with integrated executable code examples
**Performance Goals**: Code examples execute in <5 seconds (interactive examples), <60 seconds (training/simulation examples)
**Constraints**:
  - All code examples must run in standard simulation environments without requiring specialized hardware
  - Latency and real-time constraints discussed theoretically and via simulation, not hardware-dependent
  - Energy constraints addressed through modeling and simulation, not real-power measurement
  - Safety constraints discussed and enforced in simulation with collision detection enabled
**Scale/Scope**: 12 chapters, 25–30 code examples total, ~150–200 pages of published content

## Constitution Check

**GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.**

### Principle Alignment Verification

**I. Originality & Technical Depth**
- ✓ **PASS**: Chapter planning focuses on unique Physical AI engineering challenges, not generic AI tutorials
- ✓ Each chapter emphasizes systems thinking and real-world constraints
- ✓ Code examples are designed for technical depth, not demonstration simplicity

**II. Docusaurus-Native Structure**
- ✓ **PASS**: Plan includes content organization suitable for Docusaurus (`docs/` structure)
- ✓ Frontmatter, admonitions, and cross-references designed from the start
- ✓ No retrofit requirements anticipated

**III. Progressive Learning Architecture**
- ✓ **PASS**: 12-chapter structure explicitly ordered from foundations → implementations → advanced systems
- ✓ Prerequisites clearly mapped (see Chapter Dependencies below)
- ✓ Bloom's taxonomy levels progress: Understanding (Ch 1–3) → Application (Ch 4–7) → Analysis/Creation (Ch 8–12)

**IV. Code-First Documentation (NON-NEGOTIABLE)**
- ✓ **PASS**: Every chapter includes executable code examples
- ✓ Simulation platforms standardized (PyBullet primary, Gazebo for ROS2 integration, Isaac Sim for advanced)
- ✓ Examples structured in `/examples/{chapter-name}/` with README and validation scripts

**V. Modular Content Design**
- ✓ **PASS**: Chapters designed as independent modules with explicit prerequisites
- ✓ Shared concepts (e.g., coordinate frames, transforms) centralized in Fundamentals chapter
- ✓ Cross-references use Docusaurus links, preventing duplication

**VI. Multi-Level Accessibility**
- ✓ **PASS**: Each chapter includes Quick Start, Core Concepts, and Deep Dive sections
- ✓ Intermediate readers can follow main path; advanced readers access theory sections
- ✓ Beginners skip advanced chapters and focus on fundamentals → core implementations path

**VII. Production Quality Standards**
- ✓ **PASS**: Peer review process embedded in chapter specification (code review gate before publication)
- ✓ Code examples validated by execution, not just visual inspection
- ✓ Docusaurus build serves as automated quality gate

**GATE RESULT**: ✓ ALL PRINCIPLES PASS — Proceeding to Phase 0 research.

## Project Structure

### Documentation (this feature)

```text
specs/1-chapter-structure/
├── plan.md                      # This file
├── research.md                  # Phase 0: research findings and technical decisions
├── data-model.md               # Phase 1: chapter data schema and entities
├── chapter-framework.md         # Phase 1: detailed chapter template and guidelines
├── quickstart.md               # Phase 1: how to get started implementing chapters
├── contracts/
│   ├── chapter-schema.json      # Chapter entity schema
│   ├── code-example-schema.json # Code example entity schema
│   └── dependency-graph.json    # Chapter dependency DAG
└── tasks.md                    # Phase 2: breakdown of chapter writing tasks
```

### Source Code / Documentation Structure (book repository)

```text
docs/
├── 00-frontmatter/
│   ├── intro.md
│   ├── prerequisites.md
│   ├── learning-guide.md
│   └── glossary.md

├── 01-foundations/
│   ├── 01-rigid-body-physics.md
│   ├── 02-control-theory-essentials.md
│   └── 03-robot-kinematics-basics.md

├── 02-core-implementations/
│   ├── 04-sensing-systems.md
│   ├── 05-actuation-control.md
│   ├── 06-real-time-scheduling.md
│   └── 07-safety-constraints.md

├── 03-learning-systems/
│   ├── 08-learning-control-policies.md
│   ├── 09-vision-for-robotics.md
│   ├── 10-reinforcement-learning-embodied.md
│   └── 11-sim-to-real-transfer.md

├── 04-advanced-systems/
│   ├── 12-humanoid-locomotion-planning.md
│   └── 13-multi-agent-physical-systems.md

└── static/
    ├── images/              # Diagrams and visual content
    ├── code-samples/        # Code block references
    └── simulations/         # Simulation output files and visualizations

examples/
├── ch01-rigid-body-physics/
│   ├── README.md
│   ├── 01_intro_pendulum.py
│   ├── 02_multi_body_simulation.py
│   └── test_examples.py

├── ch02-control-theory/
│   ├── README.md
│   ├── 01_pid_control.py
│   ├── 02_state_space_controller.py
│   └── test_examples.py

[... continued for all chapters ...]
```

## Phase 0: Outline & Research

### Research Requirements

**Dependency Mapping & Standards**
- ROS2 (Robot Operating System 2): architectural patterns for real-time systems
- Gazebo/Ignition: sim-to-real workflow practices and reliability
- PyBullet: Python physics engine best practices and limitations
- MuJoCo: advanced physics simulation and constraint handling
- Real-time scheduling standards (RTOS, Linux kernel capabilities)

**Technical Uncertainties to Resolve**

1. **Multi-Agent Coordination Patterns** (Chapter 13)
   - How are distributed control systems coordinated in humanoid swarms?
   - Which middleware patterns (ROS2 parameter server, message passing, centralized control) are most suitable?
   - Recommendation: Research latest multi-robot control systems literature and ROS2 multi-agent examples

2. **Sim-to-Real Transfer Techniques** (Chapter 11)
   - Which domain randomization strategies are most effective for humanoid tasks?
   - How do we handle reality gaps in vision systems and tactile sensing?
   - Recommendation: Review recent papers on sim-to-real in legged locomotion (Boston Dynamics, MIT, DeepMind)

3. **Energy Optimization Trade-offs** (Chapters 5, 12)
   - How do real humanoid robots (Atlas, Tesla Bot, Figure AI) balance energy efficiency vs. performance?
   - What are the hardware-level energy constraints that software must respect?
   - Recommendation: Collect case studies from publicly available humanoid robot documentation

4. **Latency-Sensitive Control Loops** (Chapter 6)
   - What are practical latency budgets for closed-loop humanoid control (1ms? 10ms? 100ms)?
   - How do developers test and validate real-time performance in simulation?
   - Recommendation: Research Linux real-time kernel capabilities and ROS2 real-time middleware

5. **Safety Assurance Frameworks** (Chapter 7)
   - What safety standards apply to humanoid robotics (ISO/IEC, ASIL, similar)?
   - How do simulation and formal methods address safety validation?
   - Recommendation: Review robot safety standards (ISO 13482, similar) and current industry practices

### Phase 0 Deliverables

**research.md** should contain:
- Decision matrix: For each research question above, document chosen approach, rationale, and alternatives rejected
- Resource inventory: List of key papers, repositories, and external references for each chapter
- Technical constraints derived: Latency budgets (ms), energy efficiency targets (%), safety requirements
- Simulation platform recommendations: Which chapters use PyBullet vs. Gazebo vs. Isaac Sim (with rationale)

---

## Phase 1: Design & Contracts

### Chapter Data Model

**Chapter Entity Structure**

```
Chapter {
  id: string                          # "ch01", "ch02", etc.
  title: string
  subtitle: string
  status: "draft" | "outline" | "writing" | "review" | "published"
  scope: string                       # 2-3 sentence purpose statement

  learning_objectives: LearningObjective[2-4]
  prerequisites: string[]             # ["ch00-frontmatter"] or [] for no prerequisites

  content_sections: Section[]         # Main content outline

  constraints_addressed: ConstraintType[]  # [physics, latency, safety, energy, sim-to-real]

  code_examples: CodeExample[]        # Code blueprints

  metadata: {
    estimated_reading_time_minutes: number
    estimated_word_count: number
    primary_audience_level: "beginner" | "intermediate" | "advanced"
    multi_level_sections: {
      quick_start: boolean
      core_concepts: boolean
      deep_dive: boolean
    }
  }
}

LearningObjective {
  id: string                          # "ch01-lo1", "ch01-lo2"
  verb: string                        # Bloom's taxonomy verb: understand, apply, analyze, evaluate, design, etc.
  description: string                 # Complete objective statement
  bloom_level: number                 # 1-6 (Remember, Understand, Apply, Analyze, Evaluate, Create)
  assessment_method: string           # How will this objective be validated?
}

CodeExample {
  id: string                          # "ch01-ex1", "ch01-ex2"
  name: string                        # Human-readable example name
  description: string                 # What concept does this demonstrate?
  simulation_platform: "pybullet" | "gazebo" | "isaac-sim" | "none"
  language: "python" | "cpp" | "mixed"
  estimated_lines_of_code: number
  estimated_execution_time_seconds: number
  depends_on: string[]                # ["ch01-ex1"] or other prior examples
  files: {
    main: string                      # e.g., "01_example.py"
    test: string                      # e.g., "test_01_example.py"
    readme: string                    # "README.md"
  }
}

Section {
  id: string                          # "ch01-sec1", "ch01-sec2"
  title: string
  subsections: Section[]              # Nested sections
  estimated_word_count: number
  includes_code: boolean
  includes_diagram: boolean
}

ConstraintType: "physics" | "latency" | "safety" | "energy" | "sim-to-real"
```

### Chapter Specifications (High-Level)

**Foundation Chapters (Ch 1–3): Understanding Physical AI**

**Ch 1: Rigid-Body Physics for Robotics**
- Scope: Mathematical foundations of rigid-body dynamics, transforms, and inertia
- Prerequisite: None
- Constraints: Physics
- Learning Objectives:
  - Understand coordinate frames, homogeneous transforms, and spatial notation
  - Apply Newton-Euler equations to multi-body systems
  - Analyze inertia tensors and their impact on dynamic behavior
- Code Examples:
  - Ex 1.1: Single-body pendulum in PyBullet (gravity, damping)
  - Ex 1.2: Two-link robot arm dynamics (forward/inverse kinematics)
  - Ex 1.3: Constraint forces and contact dynamics
- Multi-Level: Quick Start (pendulum), Core Concepts (multi-body), Deep Dive (constraint manifolds)

**Ch 2: Control Theory Essentials**
- Scope: Linear systems, stability, PID, state-space control
- Prerequisite: Ch 1
- Constraints: Latency, physics
- Learning Objectives:
  - Understand Laplace transforms and transfer functions
  - Apply PID control to simple mechanical systems
  - Analyze stability through pole-placement and LQR methods
- Code Examples:
  - Ex 2.1: PID control of a simulated joint
  - Ex 2.2: State-space controller design (LQR)
  - Ex 2.3: Stability analysis and tuning
- Multi-Level: Quick Start (PID), Core Concepts (Bode plots, root locus), Deep Dive (Lyapunov stability, LMIs)

**Ch 3: Robot Kinematics & Geometry**
- Scope: Forward/inverse kinematics, workspace, singularities
- Prerequisite: Ch 1
- Constraints: Physics
- Learning Objectives:
  - Understand DH parameters and their derivation
  - Implement forward and inverse kinematics algorithms
  - Analyze workspace and singularity conditions
- Code Examples:
  - Ex 3.1: DH parameter setup for 6-DOF arm
  - Ex 3.2: Inverse kinematics solver (analytical, numerical)
  - Ex 3.3: Singularity detection and avoidance
- Multi-Level: Quick Start (FK/IK solver), Core Concepts (DH parameters, numerical methods), Deep Dive (redundancy resolution, damped least-squares)

---

**Core Implementation Chapters (Ch 4–7): Real Hardware Meets Software**

**Ch 4: Sensing Systems for Embodied AI**
- Scope: Sensors (IMU, encoders, vision, tactile), calibration, data fusion
- Prerequisite: Ch 1, 3
- Constraints: Latency, physics, sim-to-real
- Learning Objectives:
  - Understand sensor characteristics (accuracy, latency, noise, calibration needs)
  - Implement sensor fusion (e.g., EKF for IMU + encoder fusion)
  - Analyze sensor-to-perception pipelines and latency budgets
- Code Examples:
  - Ex 4.1: IMU simulation and filtering (Kalman filter)
  - Ex 4.2: Vision-based joint angle estimation
  - Ex 4.3: Multi-sensor fusion (IMU + encoders + vision)
- Multi-Level: Quick Start (single sensor), Core Concepts (fusion, filtering), Deep Dive (EKF, UKF, particle filters)

**Ch 5: Actuation & Closed-Loop Control**
- Scope: Motor models, PWM/current control, force/torque control, safety limits
- Prerequisite: Ch 2, 4
- Constraints: Latency, safety, energy
- Learning Objectives:
  - Understand motor models and actuator limitations (torque, speed, power)
  - Implement hierarchical control (desired torque → motor commands)
  - Evaluate trade-offs between response speed and energy consumption
- Code Examples:
  - Ex 5.1: Motor model and PID control loop
  - Ex 5.2: Torque-controlled robot arm (gravity compensation)
  - Ex 5.3: Energy monitoring and efficiency analysis
- Multi-Level: Quick Start (simple PID + motor), Core Concepts (cascaded control, torque limits), Deep Dive (adaptive control, energy optimization)

**Ch 6: Real-Time Scheduling & Latency Management**
- Scope: Real-time OS concepts, control loop frequencies, deterministic execution
- Prerequisite: Ch 2, 5
- Constraints: Latency
- Learning Objectives:
  - Understand real-time scheduling (fixed priority, rate monotonic, deadline monotonic)
  - Implement deterministic control loops with bounded latency
  - Analyze latency budgets and bottleneck identification
- Code Examples:
  - Ex 6.1: Real-time loop in simulation (PyBullet with time-stepping)
  - Ex 6.2: Linux real-time kernel capabilities (PREEMPT_RT)
  - Ex 6.3: Latency measurement and jitter analysis
- Multi-Level: Quick Start (basic timing), Core Concepts (scheduling theory, jitter budgets), Deep Dive (RTOS, Linux kernel capabilities)

**Ch 7: Safety Constraints & Fail-Safe Operation**
- Scope: Force/torque limits, collision detection, safe shutdown, testing
- Prerequisite: Ch 4, 5, 6
- Constraints: Safety, energy
- Learning Objectives:
  - Understand safety standards and failure modes
  - Design and implement fail-safe controllers (emergency stops, limit enforcement)
  - Evaluate safety via simulation and formal methods
- Code Examples:
  - Ex 7.1: Force/torque limits in simulation
  - Ex 7.2: Collision detection and safe response
  - Ex 7.3: Automated safety testing (fault injection)
- Multi-Level: Quick Start (simple force limits), Core Concepts (safety standards, formal verification), Deep Dive (formal methods for safety assurance)

---

**Learning & Intelligence Chapters (Ch 8–11): AI Meets Physical Reality**

**Ch 8: Learning-Based Control Policies**
- Scope: Policy gradients, reward shaping, sim-to-real considerations
- Prerequisite: Ch 2, 5, 6
- Constraints: Latency, sim-to-real, energy
- Learning Objectives:
  - Understand policy gradient methods (REINFORCE, PPO, TRPO)
  - Implement and train a control policy in simulation
  - Evaluate sim-to-real gap and domain randomization strategies
- Code Examples:
  - Ex 8.1: Simple learned control policy (PyTorch + PyBullet)
  - Ex 8.2: Reward shaping for physical task
  - Ex 8.3: Domain randomization for robustness
- Multi-Level: Quick Start (basic policy training), Core Concepts (policy gradients, reward design), Deep Dive (trust regions, natural gradients, advanced exploration)

**Ch 9: Vision & Perception for Robotics**
- Scope: Camera models, 3D vision, depth estimation, object detection
- Prerequisite: Ch 4
- Constraints: Latency, sim-to-real
- Learning Objectives:
  - Understand camera geometry and projection models
  - Implement depth estimation and 3D object detection
  - Analyze vision-to-control latency and real-time constraints
- Code Examples:
  - Ex 9.1: Simulated camera and image formation
  - Ex 9.2: Depth estimation from stereo or single images
  - Ex 9.3: Object detection and pose estimation
- Multi-Level: Quick Start (simple object detection), Core Concepts (camera calibration, depth methods), Deep Dive (visual SLAM, neural implicit functions)

**Ch 10: Reinforcement Learning for Embodied Systems**
- Scope: RL for locomotion, manipulation, multi-task learning
- Prerequisite: Ch 8, 9
- Constraints: Sim-to-real, latency, energy
- Learning Objectives:
  - Understand RL for continuous control (DQN variants, actor-critic methods)
  - Implement multi-task learning for different robot capabilities
  - Evaluate generalization and adaptation in physical systems
- Code Examples:
  - Ex 10.1: RL agent for quadruped locomotion (PyBullet, 150-line trainer)
  - Ex 10.2: Multi-task learning (e.g., walk + climb)
  - Ex 10.3: Curriculum learning and progressive difficulty
- Multi-Level: Quick Start (single-task RL agent), Core Concepts (multi-task learning, hierarchical RL), Deep Dive (meta-learning, continual learning)

**Ch 11: Sim-to-Real Transfer Techniques**
- Scope: Domain randomization, reality gap mitigation, online adaptation
- Prerequisite: Ch 8, 9, 10
- Constraints: Sim-to-real, safety
- Learning Objectives:
  - Understand the reality gap and domain randomization strategies
  - Implement online adaptation algorithms
  - Analyze transfer performance and failure modes
- Code Examples:
  - Ex 11.1: Domain randomization in simulation (visual, physics)
  - Ex 11.2: Online adaptation with limited real-world data
  - Ex 11.3: Simulation-based validation of real-world performance
- Multi-Level: Quick Start (basic domain randomization), Core Concepts (adaptive methods, distribution shift), Deep Dive (Bayesian sim-to-real, zero-shot transfer)

---

**Advanced Systems Chapters (Ch 12–13): Humanoid Robotics at Scale**

**Ch 12: Humanoid Locomotion & Planning**
- Scope: Bipedal gait synthesis, balance control, trajectory planning
- Prerequisite: Ch 2, 3, 5, 6, 8
- Constraints: Physics, latency, energy, safety
- Learning Objectives:
  - Understand bipedal gait dynamics and balance conditions
  - Implement gait planning and trajectory generation
  - Design robust balance controllers (ZMP, MPC)
- Code Examples:
  - Ex 12.1: Simplified bipedal model and ZMP control
  - Ex 12.2: Walking trajectory generation (central pattern generators or optimization)
  - Ex 12.3: Perturbation rejection and robust balance
- Multi-Level: Quick Start (simple ZMP control), Core Concepts (gait synthesis, balance theory), Deep Dive (model predictive control, whole-body control)

**Ch 13: Multi-Agent Physical Systems**
- Scope: Distributed coordination, swarm robotics, emergent behaviors
- Prerequisite: Ch 6, 8, 10, 12
- Constraints: Latency, energy, safety, sim-to-real
- Learning Objectives:
  - Understand multi-agent coordination protocols and communication
  - Implement decentralized control for swarm tasks
  - Evaluate scalability and robustness in heterogeneous systems
- Code Examples:
  - Ex 13.1: Multi-robot formation control (PyBullet)
  - Ex 13.2: Decentralized learning (multi-agent RL)
  - Ex 13.3: Collective behavior and emergent patterns
- Multi-Level: Quick Start (two-robot coordination), Core Concepts (consensus algorithms, swarm theory), Deep Dive (game theory, distributed optimization)

---

### Chapter Dependency Graph (DAG)

```
Frontmatter
    ↓
Ch1: Rigid-Body Physics
    ├→ Ch2: Control Theory
    │   ├→ Ch5: Actuation Control
    │   │   ├→ Ch6: Real-Time Scheduling
    │   │   │   └→ Ch7: Safety Constraints
    │   │   └→ Ch8: Learning-Based Control
    │   │       ├→ Ch10: RL for Embodied Systems
    │   │       │   └→ Ch13: Multi-Agent Systems
    │   │       └→ Ch11: Sim-to-Real Transfer
    │   └→ Ch12: Humanoid Locomotion
    │       └→ Ch13: Multi-Agent Systems
    │
    └→ Ch3: Robot Kinematics
        ├→ Ch5: Actuation Control
        └→ Ch12: Humanoid Locomotion

Ch4: Sensing Systems (depends on Ch1, Ch3)
    ├→ Ch5: Actuation Control
    ├→ Ch9: Vision & Perception
    │   └→ Ch10: RL for Embodied Systems
    └→ Ch11: Sim-to-Real Transfer

Ch6: Real-Time Scheduling
    └→ Ch8: Learning-Based Control

Ch7: Safety Constraints (depends on Ch4, Ch5, Ch6)
    └→ Ch12: Humanoid Locomotion (optional, recommended)

Ch10: RL for Embodied Systems
    └→ Ch13: Multi-Agent Systems

Ch12: Humanoid Locomotion (depends on Ch2, Ch3, Ch5, Ch6, Ch8)
    └→ Ch13: Multi-Agent Systems
```

**Key Observations**:
- Ch1 (Physics) and Ch3 (Kinematics) are foundational; most later chapters depend on them
- Ch2 (Control) is a critical hub; 5 chapters depend on it directly
- Ch7 (Safety) is independent of learning chapters but complements them
- Ch13 (Multi-Agent) is the most advanced; requires understanding from Ch6, Ch8, Ch10, Ch12
- No circular dependencies (valid DAG)

---

## Phase 1 Deliverables

### Outputs to Create

1. **research.md**
   - Decision matrix for each research question (sim-to-real techniques, multi-agent coordination patterns, energy optimization, latency budgets, safety frameworks)
   - Resource inventory: papers, repositories, external references organized by chapter
   - Simulation platform recommendations with rationale

2. **data-model.md**
   - Complete chapter entity schema (structure detailed above)
   - Code example entity schema
   - Metadata fields and validation rules

3. **chapter-framework.md**
   - Chapter template (frontmatter, structure, sections, code integration)
   - Writing guidelines (tone, audience-level transitions, multi-level section markers)
   - Code example integration checklist

4. **quickstart.md**
   - How to get started writing chapters
   - Environment setup (Python, C++, simulation tools)
   - Running code examples and tests
   - Docusaurus build and deployment

5. **contracts/chapter-schema.json**
   - JSON schema for Chapter entity (used by code generators and validators)

6. **contracts/code-example-schema.json**
   - JSON schema for CodeExample entity

7. **contracts/dependency-graph.json**
   - Complete DAG of chapter dependencies (parseable format for tools)

---

## Constitution Recheck (Post-Design)

**After Phase 1 design completion, re-evaluate principles:**

- ✓ **I. Originality & Technical Depth**: 13 chapters planned, each with unique Physical AI challenges; no generic tutorial content
- ✓ **II. Docusaurus-Native Structure**: Chapter organization ready for `docs/` structure; cross-references, admonitions, code tabs all planned
- ✓ **III. Progressive Learning Architecture**: DAG verified; prerequisite chain sound; Bloom's levels progress logically
- ✓ **IV. Code-First Documentation**: 30+ code examples planned; each chapter has at least 2 examples; all simulation platforms specified
- ✓ **V. Modular Content Design**: Chapter dependencies form clean DAG; no circular dependencies; shared fundamentals centralized
- ✓ **VI. Multi-Level Accessibility**: Quick Start, Core Concepts, Deep Dive sections planned for all chapters
- ✓ **VII. Production Quality Standards**: Code examples, peer review gates, Docusaurus build verification all specified

**RECHECK RESULT**: ✓ ALL PRINCIPLES CONFIRMED — Design sound, proceed to Phase 2 (tasks).

---

## Next Steps

This plan is ready for:
1. **Phase 0 Research**: Create `research.md` addressing all research questions
2. **Phase 1 Completion**: Generate `data-model.md`, chapter framework, and schema contracts
3. **Phase 2 (via `/speckit.tasks`)**: Break down chapter writing into granular, assignable tasks
