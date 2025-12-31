---
description: "Task list for book chapter structure and implementation"
---

# Tasks: When Code Learns to Walk - Physical AI & Humanoid Robotics Book

**Input**: Design documents from `specs/1-chapter-structure/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md (to be created)

**Tests**: Code examples MUST be validated by execution before inclusion (per Constitution IV: Code-First Documentation)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each author workflow.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Exact file paths included in descriptions

## Path Conventions

- **Documentation chapters**: `docs/{section}/{nn-chapter-name}.md`
- **Code examples**: `examples/ch{nn}-{topic}/`
- **Code tests**: `examples/ch{nn}-{topic}/test_*.py`
- **Design documents**: `specs/1-chapter-structure/{document}.md`
- **Schemas**: `specs/1-chapter-structure/contracts/{schema}.json`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and book structure preparation

- [ ] T001 Create book documentation directory structure per plan.md at `docs/`
- [ ] T002 Create code examples directory structure per plan.md at `examples/`
- [ ] T003 [P] Create static assets directory at `docs/static/` for images, diagrams, and simulation outputs
- [ ] T004 [P] Initialize Docusaurus configuration file with book metadata and navigation structure at `docusaurus.config.js`
- [ ] T005 [P] Create `docs/sidebars.js` with complete chapter navigation hierarchy
- [ ] T006 [P] Create Python environment setup (requirements.txt) for code examples with dependencies: numpy, scipy, pybullet, matplotlib
- [ ] T007 [P] Create `examples/README.md` with instructions for running all code examples
- [ ] T008 [P] Create Docker configuration (`Dockerfile`, `docker-compose.yml`) for reproducible example environments
- [ ] T009 Create `docs/00-frontmatter/intro.md` with book overview and target audience
- [ ] T010 [P] Create `docs/00-frontmatter/prerequisites.md` listing assumed programming knowledge and setup requirements
- [ ] T011 [P] Create `docs/00-frontmatter/learning-guide.md` with reading paths for different skill levels (beginner → intermediate → advanced)
- [ ] T012 [P] Create `docs/00-frontmatter/glossary.md` template with placeholder terms from Physical AI domain

**Checkpoint**: Book structure ready for chapter content creation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core research, schemas, and templates that all chapters depend on

- [ ] T013 Conduct research on sim-to-real transfer techniques and populate `specs/1-chapter-structure/research.md` with: domain randomization strategies, reality gap mitigation methods, online adaptation approaches
- [ ] T014 [P] Research ROS2 architectural patterns and document findings in `specs/1-chapter-structure/research.md`: real-time communication, parameter server, node lifecycle
- [ ] T015 [P] Research Gazebo/Ignition and PyBullet best practices; document simulation platform trade-offs and recommendations in `specs/1-chapter-structure/research.md`
- [ ] T016 [P] Research real-time scheduling theory and Linux PREEMPT_RT capabilities; document latency budgets for control loops in `specs/1-chapter-structure/research.md`
- [ ] T017 [P] Research robot safety standards (ISO 13482, ISO 13849-1) and document applicable safety assurance methods in `specs/1-chapter-structure/research.md`
- [ ] T018 [P] Research energy efficiency optimization techniques in robotics and document motor power management strategies in `specs/1-chapter-structure/research.md`
- [ ] T019 Create Chapter data model schema at `specs/1-chapter-structure/contracts/chapter-schema.json` defining: scope, learning objectives (with Bloom's levels), prerequisites, constraints addressed, code examples
- [ ] T020 [P] Create Code Example schema at `specs/1-chapter-structure/contracts/code-example-schema.json` defining: simulation platform, language, estimated LOC, execution time, dependencies
- [ ] T021 [P] Create Chapter Dependency Graph schema at `specs/1-chapter-structure/contracts/dependency-graph.json` encoding complete DAG of chapter prerequisites
- [ ] T022 Create `specs/1-chapter-structure/data-model.md` documenting all chapter entities: Chapter, LearningObjective, CodeExample, Constraint Mapping, Simulation Platform
- [ ] T023 [P] Create `specs/1-chapter-structure/chapter-framework.md` template for chapter authors including: frontmatter structure, section templates, multi-level content markers (Quick Start/Core Concepts/Deep Dive), code integration patterns
- [ ] T024 [P] Create `specs/1-chapter-structure/quickstart.md` with: environment setup instructions, running first example, building docs locally, creating a new chapter
- [ ] T025 Validate `research.md` completeness: verify all 5 research questions answered with decision rationale and alternatives considered
- [ ] T026 [P] Validate schema completeness: cross-check chapter-schema.json, code-example-schema.json against plan.md chapter specifications
- [ ] T027 [P] Validate dependency-graph.json: verify no circular dependencies, confirm all 13 chapters appear exactly once as nodes

**Checkpoint**: Foundation complete - chapter authoring can now begin in parallel

---

## Phase 3: User Story 1 - Book Structure Architecture (Priority: P1)

**Goal**: Define complete chapter outline with scope, learning objectives, prerequisites, code blueprints, and constraint mappings for all 13 chapters

**Independent Test**: Can be fully validated by confirming: (a) all 13 chapters have non-overlapping scopes, (b) dependency DAG is acyclic, (c) learning objectives progress in complexity, (d) each chapter has 2-4 code examples specified

### US1 - Chapter Outline & Structure Tasks

- [ ] T028 [US1] Define scope for Chapter 1 (Rigid-Body Physics) in `docs/01-foundations/01-rigid-body-physics.md` frontmatter: 2-3 sentence scope statement, prerequisites (none), constraints (physics)
- [ ] T029 [US1] Define 3 learning objectives for Chapter 1 with action verbs at Bloom's levels 2-3 (Understand, Apply): coordinate frames, transforms, multi-body dynamics
- [ ] T030 [US1] Specify 3 code examples for Chapter 1 with platforms and complexity: pendulum (PyBullet, 50 LOC), multi-body robot (PyBullet, 120 LOC), contact dynamics (PyBullet, 150 LOC)
- [ ] T031 [P] [US1] Define scope for Chapter 2 (Control Theory) in frontmatter with prerequisites (Ch1), constraints (physics, latency)
- [ ] T032 [P] [US1] Define 3 learning objectives for Chapter 2: transfer functions, stability analysis, control design (Bloom's 3-4)
- [ ] T033 [P] [US1] Specify 3 code examples for Chapter 2: PID control (PyBullet, 100 LOC), state-space controller (100 LOC), stability analysis (80 LOC)
- [ ] T034 [P] [US1] Define scope for Chapter 3 (Kinematics) in frontmatter with prerequisites (Ch1), constraints (physics)
- [ ] T035 [P] [US1] Define 3 learning objectives for Chapter 3: DH parameters, forward/inverse kinematics, singularities (Bloom's 3-4)
- [ ] T036 [P] [US1] Specify 3 code examples for Chapter 3: DH setup (100 LOC), IK solver (120 LOC), singularity detection (90 LOC)
- [ ] T037 [P] [US1] Define scope for Chapter 4 (Sensing) in frontmatter with prerequisites (Ch1, Ch3), constraints (physics, latency, sim-to-real)
- [ ] T038 [P] [US1] Define 3 learning objectives for Chapter 4: sensor models, fusion algorithms, latency budgeting (Bloom's 3-4)
- [ ] T039 [P] [US1] Specify 3 code examples for Chapter 4: IMU simulation + Kalman filter (150 LOC), vision-based estimation (140 LOC), multi-sensor fusion (180 LOC)
- [ ] T040 [P] [US1] Define scope for Chapter 5 (Actuation) in frontmatter with prerequisites (Ch2, Ch4), constraints (latency, safety, energy)
- [ ] T041 [P] [US1] Define 3 learning objectives for Chapter 5: motor models, hierarchical control, energy trade-offs (Bloom's 3-4)
- [ ] T042 [P] [US1] Specify 3 code examples for Chapter 5: motor control loop (110 LOC), torque control + gravity compensation (130 LOC), energy monitoring (100 LOC)
- [ ] T043 [P] [US1] Define scope for Chapter 6 (Real-Time Scheduling) in frontmatter with prerequisites (Ch2, Ch5), constraints (latency)
- [ ] T044 [P] [US1] Define 3 learning objectives for Chapter 6: scheduling theory, deterministic control, latency measurement (Bloom's 3-4)
- [ ] T045 [P] [US1] Specify 3 code examples for Chapter 6: real-time loop in simulation (120 LOC), timing analysis (100 LOC), jitter measurement (80 LOC)
- [ ] T046 [P] [US1] Define scope for Chapter 7 (Safety) in frontmatter with prerequisites (Ch4, Ch5, Ch6), constraints (safety, energy)
- [ ] T047 [P] [US1] Define 3 learning objectives for Chapter 7: safety standards, fail-safe control, formal methods (Bloom's 4-5)
- [ ] T048 [P] [US1] Specify 3 code examples for Chapter 7: force limits enforcement (90 LOC), collision detection (110 LOC), automated safety testing (140 LOC)
- [ ] T049 [P] [US1] Define scope for Chapter 8 (Learning-Based Control) in frontmatter with prerequisites (Ch2, Ch5, Ch6), constraints (latency, sim-to-real, energy)
- [ ] T050 [P] [US1] Define 3 learning objectives for Chapter 8: policy gradients, reward design, domain randomization (Bloom's 3-4)
- [ ] T051 [P] [US1] Specify 3 code examples for Chapter 8: basic policy training (200 LOC), reward shaping (120 LOC), domain randomization (130 LOC)
- [ ] T052 [P] [US1] Define scope for Chapter 9 (Vision) in frontmatter with prerequisites (Ch4), constraints (latency, sim-to-real)
- [ ] T053 [P] [US1] Define 3 learning objectives for Chapter 9: camera geometry, 3D vision, real-time perception (Bloom's 3-4)
- [ ] T054 [P] [US1] Specify 3 code examples for Chapter 9: simulated camera (100 LOC), depth estimation (130 LOC), object detection (160 LOC)
- [ ] T055 [P] [US1] Define scope for Chapter 10 (RL for Embodied Systems) in frontmatter with prerequisites (Ch8, Ch9), constraints (sim-to-real, latency, energy)
- [ ] T056 [P] [US1] Define 3 learning objectives for Chapter 10: multi-task RL, hierarchical learning, generalization (Bloom's 4-5)
- [ ] T057 [P] [US1] Specify 3 code examples for Chapter 10: multi-agent RL (250 LOC), curriculum learning (200 LOC), progressive difficulty (180 LOC)
- [ ] T058 [P] [US1] Define scope for Chapter 11 (Sim-to-Real) in frontmatter with prerequisites (Ch8, Ch9, Ch10), constraints (sim-to-real, safety)
- [ ] T059 [P] [US1] Define 3 learning objectives for Chapter 11: reality gap analysis, transfer methods, online adaptation (Bloom's 4-5)
- [ ] T060 [P] [US1] Specify 3 code examples for Chapter 11: domain randomization (200 LOC), online adaptation (220 LOC), transfer validation (150 LOC)
- [ ] T061 [P] [US1] Define scope for Chapter 12 (Humanoid Locomotion) in frontmatter with prerequisites (Ch2, Ch3, Ch5, Ch6, Ch8), constraints (physics, latency, energy, safety)
- [ ] T062 [P] [US1] Define 3 learning objectives for Chapter 12: gait synthesis, balance control, trajectory planning (Bloom's 4-5)
- [ ] T063 [P] [US1] Specify 3 code examples for Chapter 12: ZMP control (180 LOC), gait generation (220 LOC), perturbation rejection (200 LOC)
- [ ] T064 [P] [US1] Define scope for Chapter 13 (Multi-Agent Systems) in frontmatter with prerequisites (Ch6, Ch8, Ch10, Ch12), constraints (latency, energy, safety, sim-to-real)
- [ ] T065 [P] [US1] Define 3 learning objectives for Chapter 13: multi-agent coordination, decentralized control, emergent behaviors (Bloom's 5-6)
- [ ] T066 [P] [US1] Specify 3 code examples for Chapter 13: formation control (240 LOC), decentralized RL (280 LOC), swarm simulation (250 LOC)
- [ ] T067 [US1] Validate chapter scopes for overlap: cross-check all 13 chapter descriptions in `docs/` to confirm no two chapters cover identical topics
- [ ] T068 [US1] Validate chapter prerequisites: verify dependency DAG matches plan.md and contains no circular dependencies
- [ ] T069 [US1] Validate learning progression: confirm Bloom's levels increase from Ch1 (level 2-3) through Ch13 (level 5-6)
- [ ] T070 [US1] Validate constraint coverage: confirm all 5 constraint types (physics, latency, safety, energy, sim-to-real) are distributed across chapters as specified in plan.md
- [ ] T071 [US1] Count and verify code examples: confirm 30+ total examples across all 13 chapters (2-3 per chapter minimum)
- [ ] T072 [US1] Update `docs/sidebars.js` with complete chapter list in correct prerequisite order
- [ ] T073 [US1] Cross-check all chapter frontmatter: verify required fields (scope, objectives, prerequisites, constraints, examples) are present and correctly formatted

**Checkpoint**: All 13 chapters fully specified with clear scope, learning objectives, prerequisites, code blueprints, and constraint mappings

---

## Phase 4: User Story 2 - Learning Objectives Validation (Priority: P1)

**Goal**: Ensure all learning objectives are action-oriented, measurable, aligned to Bloom's taxonomy, and enable independent skill assessment

**Independent Test**: Can be validated by confirming: (a) every objective uses action verb (design, implement, analyze, evaluate, simulate), (b) objectives are measurable without implementation details, (c) progression in complexity is clear, (d) prerequisites are explicitly referenced

### US2 - Learning Objective Definition Tasks

- [ ] T074 [US2] Draft Chapter 1 Quick Start learning objective: "Apply rigid-body dynamics equations to predict motion of simple pendulum in simulation"
- [ ] T075 [US2] Draft Chapter 1 Core Concepts objective: "Analyze inertia tensor effects on rotational dynamics of multi-body robot manipulator"
- [ ] T076 [US2] Draft Chapter 1 Deep Dive objective: "Evaluate constraint force formulations for contact-rich manipulation tasks"
- [ ] T077 [P] [US2] Draft Chapter 2 objectives: (Quick Start) "Apply PID control to regulate joint trajectory"; (Core) "Analyze system stability using Bode plots and root locus"; (Deep) "Design optimal controller via LQR methods"
- [ ] T078 [P] [US2] Draft Chapter 3 objectives: (QS) "Implement forward kinematics solver for 6-DOF robot"; (Core) "Analyze singularities and workspace constraints"; (Deep) "Evaluate redundancy resolution for manipulator control"
- [ ] T079 [P] [US2] Draft Chapter 4 objectives: (QS) "Apply Kalman filter to fuse IMU and encoder data"; (Core) "Analyze sensor latency and jitter effects on perception"; (Deep) "Design multi-sensor fusion system for robust state estimation"
- [ ] T080 [P] [US2] Draft Chapter 5 objectives: (QS) "Implement torque control with gravity compensation"; (Core) "Analyze energy efficiency trade-offs in motor control"; (Deep) "Design adaptive controllers for unknown payloads"
- [ ] T081 [P] [US2] Draft Chapter 6 objectives: (QS) "Implement deterministic control loop with bounded latency"; (Core) "Analyze real-time scheduling for heterogeneous tasks"; (Deep) "Evaluate latency budgets and jitter bounds for critical control"
- [ ] T082 [P] [US2] Draft Chapter 7 objectives: (QS) "Implement force limits and collision detection"; (Core) "Analyze safety standards and failure modes"; (Deep) "Design formal verification methods for safety-critical systems"
- [ ] T083 [P] [US2] Draft Chapter 8 objectives: (QS) "Implement basic policy gradient algorithm"; (Core) "Analyze reward shaping and domain randomization effects"; (Deep) "Evaluate trust region and natural gradient methods"
- [ ] T084 [P] [US2] Draft Chapter 9 objectives: (QS) "Implement camera projection and depth estimation"; (Core) "Analyze 3D vision algorithms and real-time latency"; (Deep) "Design visual SLAM and neural implicit functions"
- [ ] T085 [P] [US2] Draft Chapter 10 objectives: (QS) "Implement multi-task RL agent"; (Core) "Analyze hierarchical RL and curriculum learning"; (Deep) "Evaluate meta-learning for rapid adaptation"
- [ ] T086 [P] [US2] Draft Chapter 11 objectives: (QS) "Implement domain randomization in simulation"; (Core) "Analyze reality gap and transfer performance"; (Deep) "Design Bayesian sim-to-real and zero-shot transfer"
- [ ] T087 [P] [US2] Draft Chapter 12 objectives: (QS) "Implement ZMP control for bipedal balance"; (Core) "Analyze gait synthesis and trajectory planning"; (Deep) "Design model predictive control for whole-body control"
- [ ] T088 [P] [US2] Draft Chapter 13 objectives: (QS) "Implement two-robot formation control"; (Core) "Analyze decentralized learning and consensus"; (Deep) "Design game-theoretic multi-agent systems"
- [ ] T089 [US2] Validate objectives for action verbs: audit all 39 objectives (3 per chapter × 13) to confirm use of Bloom's verbs (understand, apply, analyze, evaluate, create)
- [ ] T090 [US2] Validate objectives for measurability: confirm each objective can be assessed by concrete demonstration (e.g., "implement X", "analyze Y") without ambiguity
- [ ] T091 [US2] Validate objectives reference prerequisites: for each Chapter N, verify that learning objectives explicitly reference or assume knowledge from prerequisite chapters
- [ ] T092 [US2] Validate progression across chapters: confirm Bloom's levels progress from Ch1 (Understand/Apply) → Ch13 (Analyze/Evaluate/Create)
- [ ] T093 [US2] Validate multi-level structure: confirm each chapter has three levels (Quick Start, Core Concepts, Deep Dive) with appropriate cognitive complexity
- [ ] T094 [US2] Cross-check objectives against code examples: verify each objective has at least one code example (T030, T033, etc.) that demonstrates the skill

**Checkpoint**: All 39 learning objectives verified as measurable, action-oriented, and scaffolded for progression

---

## Phase 5: User Story 3 - Real-World Constraints Integration (Priority: P2)

**Goal**: Map chapters to Physical AI constraints (physics, latency, safety, energy, sim-to-real) and ensure each chapter explicitly addresses relevant constraints

**Independent Test**: Can be validated by confirming: (a) each constraint type appears in 2+ chapters, (b) constraint discussion is explicit (not implicit), (c) readers understand Physical AI requires different trade-offs than pure software AI

### US3 - Constraint Mapping Tasks

- [ ] T095 [US3] Map physics constraints to chapters: identify and document in Chapter 1-3, 5, 12-13 how rigid-body dynamics, kinematics, and actuation impact design choices
- [ ] T096 [P] [US3] Map latency constraints to chapters: add explicit discussion in Ch2 (control feedback loops), Ch5 (motor response), Ch6 (scheduling), Ch8 (policy execution), Ch9 (perception), Ch12-13 (coordination)
- [ ] T097 [P] [US3] Map safety constraints to chapters: add explicit discussion in Ch5 (force limits), Ch6 (deterministic timing for safe shutdown), Ch7 (formal safety assurance), Ch12-13 (multi-agent collision avoidance)
- [ ] T098 [P] [US3] Map energy constraints to chapters: add explicit discussion in Ch5 (motor efficiency, power budgets), Ch8 (policy energy consumption), Ch10 (multi-task trade-offs), Ch12 (gait efficiency), Ch13 (swarm power management)
- [ ] T099 [P] [US3] Map sim-to-real transfer to chapters: add explicit discussion in Ch4 (sensor simulation vs. reality), Ch8-11 (domain randomization, online adaptation), Ch12 (learned vs. analytical control), Ch13 (zero-shot coordination)
- [ ] T100 [US3] Validate constraint distribution: create table in plan.md showing which chapters address each constraint type
- [ ] T101 [US3] Validate constraint explicitness: audit all chapter descriptions to confirm constraints are stated clearly (not hidden in examples)
- [ ] T102 [US3] Validate constraint integration: confirm readers can extract (from chapter sequence) that Physical AI differs fundamentally from pure software AI

**Checkpoint**: Physical AI constraints explicitly integrated into all relevant chapters

---

## Phase 6: User Story 4 - Code Example Blueprints (Priority: P2)

**Goal**: Detail code example specifications for all 30+ examples, including simulation platform, language, estimated complexity, and dependencies

**Independent Test**: Can be validated by confirming: (a) each example has platform specified, (b) dependencies on prior chapter examples are documented, (c) all examples can run in standard simulation environments

### US4 - Code Example Blueprint Tasks

- [ ] T103 [US4] Create code example directory for Chapter 1: `examples/ch01-rigid-body-physics/` with README specifying platform, dependencies, execution steps
- [ ] T104 [US4] Create template for Ch1 Example 1 (Pendulum): document expected file structure (`01_intro_pendulum.py`, test file, data outputs), expected LOC (50), simulation platform (PyBullet)
- [ ] T105 [US4] Create template for Ch1 Example 2 (Multi-Body): document file structure, expected LOC (120), PyBullet platform, dependencies (Ch1 Ex1)
- [ ] T106 [US4] Create template for Ch1 Example 3 (Contact Dynamics): document file structure, expected LOC (150), PyBullet, dependencies (Ch1 Ex1-2)
- [ ] T107 [P] [US4] Create code example directories and templates for Chapters 2-13: `examples/ch{nn}-{topic}/` with README for each
- [ ] T108 [P] [US4] Document Ch2 code examples: PID control (100 LOC, PyBullet), state-space controller (100 LOC, PyBullet), stability analysis (80 LOC, matplotlib); dependencies on Ch1
- [ ] T109 [P] [US4] Document Ch3 code examples: DH parameters (100 LOC, numpy), IK solver (120 LOC, scipy), singularity detection (90 LOC, numpy); dependencies on Ch1
- [ ] T110 [P] [US4] Document Ch4 code examples: IMU+Kalman (150 LOC, PyBullet + numpy), vision estimation (140 LOC, OpenCV), multi-sensor fusion (180 LOC); dependencies on Ch1-3
- [ ] T111 [P] [US4] Document Ch5 code examples: motor control (110 LOC, PyBullet), torque+gravity (130 LOC, numpy), energy monitoring (100 LOC); dependencies on Ch2, Ch4
- [ ] T112 [P] [US4] Document Ch6 code examples: real-time loop (120 LOC, PyBullet + threading), timing analysis (100 LOC), jitter measurement (80 LOC); dependencies on Ch2, Ch5
- [ ] T113 [P] [US4] Document Ch7 code examples: force limits (90 LOC, PyBullet), collision detection (110 LOC), safety testing (140 LOC, pytest); dependencies on Ch4-6
- [ ] T114 [P] [US4] Document Ch8 code examples: policy gradient (200 LOC, PyTorch), reward shaping (120 LOC, custom), domain randomization (130 LOC); dependencies on Ch2, Ch5, Ch6
- [ ] T115 [P] [US4] Document Ch9 code examples: camera projection (100 LOC, numpy), depth estimation (130 LOC, numpy/scipy), object detection (160 LOC, PyTorch); dependencies on Ch4
- [ ] T116 [P] [US4] Document Ch10 code examples: multi-task RL (250 LOC, PyTorch + PyBullet), curriculum learning (200 LOC), progressive difficulty (180 LOC); dependencies on Ch8-9
- [ ] T117 [P] [US4] Document Ch11 code examples: domain randomization (200 LOC), online adaptation (220 LOC, PyTorch), transfer validation (150 LOC); dependencies on Ch8-10
- [ ] T118 [P] [US4] Document Ch12 code examples: ZMP control (180 LOC, PyBullet), gait generation (220 LOC, numpy), perturbation rejection (200 LOC); dependencies on Ch2-3, Ch5-6, Ch8
- [ ] T119 [P] [US4] Document Ch13 code examples: formation control (240 LOC, PyBullet + ROS2), decentralized RL (280 LOC, PyTorch), swarm simulation (250 LOC); dependencies on Ch6, Ch8, Ch10, Ch12
- [ ] T120 [US4] Create code dependency graph: document which examples depend on prior chapter examples; update `contracts/code-dependencies.json`
- [ ] T121 [US4] Validate code platform consistency: confirm PyBullet used for foundational/core chapters (1-7), with Gazebo/Isaac Sim introduced for advanced chapters (12-13)
- [ ] T122 [US4] Validate code complexity: verify total LOC across all examples (~3500-4000) is achievable for one-book curriculum
- [ ] T123 [US4] Validate code independence: confirm each example can run independently (with clear setup instructions) despite dependencies

**Checkpoint**: All 30+ code examples blueprinted with platform, complexity, and dependencies specified

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, consistency checks, and publication preparation

- [ ] T124 [P] Create comprehensive glossary at `docs/00-frontmatter/glossary.md` with all Physical AI domain terms from chapters 1-13
- [ ] T125 [P] Create cross-reference index in `docs/00-frontmatter/cross-references.md` mapping concepts to chapters (e.g., "Transforms: see Ch1, Ch3, Ch9")
- [ ] T126 [P] Validate Docusaurus build: run `npm run build` and confirm zero warnings, all chapter links resolve, all code references are valid
- [ ] T127 [P] Validate GitHub integration: commit all tasks, push to `1-chapter-structure` branch, create PR with summary of 120+ tasks completed
- [ ] T128 Create final checklist validating all 10 Success Criteria from spec.md (FR-001 through FR-010)
- [ ] T129 [P] Final consistency audit: spot-check 3 random chapters for: consistent section structure, proper use of multi-level content markers, correct prerequisite references
- [ ] T130 [P] Peer review readiness: prepare summary document for expert review (3-5 chapters) to validate technical depth and Physical AI emphasis
- [ ] T131 [P] Code execution validation: create test script that runs representative examples from each phase (Ch1, Ch5, Ch10) to confirm platform compatibility
- [ ] T132 Create README for branch summarizing: 13 chapters defined, 39 learning objectives specified, 30+ code examples blueprinted, 120+ implementation tasks created

**Checkpoint**: Book curriculum fully defined, validated, and ready for author implementation

---

## Phase 8: Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T012) ✓
2. Complete Phase 2: Foundational (T013-T027) ✓
3. Complete Phase 3: User Story 1 - Architect Defines Complete Book Structure (T028-T073)
4. **STOP and VALIDATE**:
   - Verify all 13 chapters have non-overlapping scopes
   - Verify dependency DAG is acyclic
   - Confirm 30+ code examples specified
5. Proceed to Phase 4 (User Story 2) for learning objectives validation
6. Deploy/iterate if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready (Tests T013-T027)
2. Add User Story 1 (Architect) → Validate book structure independently
3. Add User Story 2 (Instructor) → Validate learning progression
4. Add User Story 3 (Constraints) → Validate Physical AI emphasis
5. Add User Story 4 (Code) → Validate code-first documentation
6. Each story adds value independently

### Parallel Team Strategy

With multiple authors:

1. Team completes Setup + Foundational together (T001-T027)
2. Once Foundational done:
   - Author A: User Story 1 (Chapters 1-5)
   - Author B: User Story 2 (Chapters 6-10)
   - Author C: User Story 3-4 (Chapters 11-13 + Code)
3. Stories complete and integrate independently
4. Team reunites for polish phase (T124-T132)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately (T001-T012)
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories (T013-T027)
- **User Stories (Phase 3-6)**: All depend on Foundational completion
  - US1 (Architecture) can start after Foundational - NO dependencies on other stories
  - US2 (Objectives) can start after US1 - depends on US1 chapter definitions
  - US3 (Constraints) can start after US1 - independent of US2/US4
  - US4 (Code) can start after US1 - depends on US1 chapter and code example specs
- **Polish (Phase 7)**: Depends on all desired user stories being complete (T124-T132)

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after US1 completes - depends on chapter scopes from US1
- **User Story 3 (P2)**: Can start after US1 completes - independent of US2/US4
- **User Story 4 (P2)**: Can start after US1 completes - depends on chapter and code specs

### Within Each User Story

- Tests (none in Phase 3-6 for book project) would be written first
- Outline tasks before writing tasks
- Validation tasks after all content creation

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002-T012)
- All Foundational research tasks marked [P] can run in parallel (T014-T018)
- Within US1: All chapter outline tasks marked [P] can run in parallel (T031-T066)
- Within US2: All objective drafting tasks marked [P] can run in parallel (T077-T088)
- Within US3: All constraint mapping tasks marked [P] can run in parallel (T096-T099)
- Within US4: All code template creation tasks marked [P] can run in parallel (T107-T119)
- Different user stories can be worked on in parallel by different team members after Foundational

---

## Parallel Example: User Story 1 (Architecture)

```
# Launch all chapter outline tasks together:
[P] T028: Chapter 1 scope
[P] T031: Chapter 2 scope
[P] T034: Chapter 3 scope
... (launch T028-T066 marked [P] in parallel)

# After parallel scopes complete:
Sequential: T067-T073 (validation tasks)
```

---

## Notes

- Tasks marked [P] = different files, no dependencies → can parallelize
- [Story] label = US1, US2, US3, or US4 (maps to spec.md user stories)
- Each task is completable in 15-45 minutes by experienced technical author
- Commit after each task or logical group (e.g., all Ch1 tasks, then all Ch2 tasks)
- Stop at any checkpoint (T073, T094, T102, T123) to validate story independently
- Avoid: vague tasks (no action verb), same file conflicts, cross-story dependencies that break independence
- This task list is executable: each task has enough detail for LLM/author to complete without additional context
