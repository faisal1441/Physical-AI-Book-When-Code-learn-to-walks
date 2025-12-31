# Feature Specification: Executable Code Examples for Physical AI Book

**Feature Branch**: `2-code-examples`
**Created**: 2025-12-29
**Status**: Draft
**Input**: Code example blueprints from `specs/1-chapter-structure/plan.md`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Developers Implement Foundational Code Examples (Priority: P1)

A software engineer or roboticist needs to develop and validate runnable, well-documented code examples for foundational chapters (1–3: rigid-body physics, control theory, kinematics) that teach core concepts through executable simulation.

**Why this priority**: Foundational examples establish patterns and dependencies for all downstream examples. Without solid foundations, advanced examples (Ch 8–13) will inherit technical debt and inconsistency.

**Independent Test**: Can be validated by verifying that: (a) all 9 examples (3 per chapter × 3 chapters) execute without errors, (b) examples demonstrate concepts clearly via output/visualization, (c) code is well-commented and adheres to style guide, (d) each example has passing unit tests.

**Acceptance Scenarios**:

1. **Given** Chapter 1 code example blueprint (pendulum simulation), **When** implemented, **Then** the script runs successfully within 5 seconds and produces correct physics output
2. **Given** a foundational example, **When** reviewed for documentation, **Then** inline comments explain Physics/control concepts, not just code mechanics
3. **Given** all 9 foundational examples, **When** analyzed, **Then** they use consistent coding patterns, imports, and output formatting
4. **Given** foundational examples complete, **When** integrated into book, **Then** readers can execute them with one command (docker or local env)

---

### User Story 2 - Developers Implement Core Implementation Examples (Priority: P1)

A robotics engineer needs to develop code examples for core implementation chapters (4–7: sensing, actuation, real-time scheduling, safety) that demonstrate hands-on control of robotic systems with realistic constraints.

**Why this priority**: Core examples form the bridge between theory (Ch 1–3) and advanced systems (Ch 8–13). These examples introduce real-world constraints (latency, safety, energy) that readers must understand before approaching learning-based systems.

**Independent Test**: Can be validated by confirming: (a) all 12 core examples run without errors, (b) each example explicitly demonstrates its constraint (latency budget met, safety limits enforced), (c) examples integrate seamlessly with foundational code, (d) all core examples have integration tests validating constraint adherence.

**Acceptance Scenarios**:

1. **Given** a real-time scheduling example from Chapter 6, **When** executed, **Then** timing jitter is within specified budget (e.g., <10% variation)
2. **Given** a safety constraint example from Chapter 7, **When** tested with collision scenarios, **Then** force limits are enforced and system stops safely
3. **Given** all core examples, **When** integrated, **Then** they use consistent simulation platforms (PyBullet primary) and reuse foundational setup code
4. **Given** core examples complete, **When** reviewed, **Then** each demonstrates measurable performance (latency, energy, safety) with clear metrics

---

### User Story 3 - Developers Implement Learning System Examples (Priority: P2)

An AI/ML engineer needs to develop code examples for learning chapters (8–11: learning-based control, vision, reinforcement learning, sim-to-real transfer) that train and validate policies in simulation with realistic training time and convergence metrics.

**Why this priority**: Learning examples demonstrate the most complex concepts and require careful handling of training dynamics, domain randomization, and sim-to-real gaps. These examples enable readers to experiment with advanced techniques.

**Independent Test**: Can be validated by confirming: (a) all 12 learning examples train successfully with convergence within specified time budgets, (b) examples demonstrate sim-to-real concepts (domain randomization, online adaptation), (c) trained models can be saved/loaded and transferred between examples, (d) performance metrics match expected ranges.

**Acceptance Scenarios**:

1. **Given** a policy gradient example from Chapter 8, **When** trained, **Then** it converges to reasonable performance within 60 seconds of simulation time
2. **Given** a sim-to-real example from Chapter 11, **When** domain randomization applied, **Then** policy robustness improves measurably (e.g., success rate increases 20%+)
3. **Given** all learning examples, **When** analyzed, **Then** they share consistent training infrastructure (PyTorch, optimization loops, logging)
4. **Given** learning examples complete, **When** integrated with foundational code, **Then** trained models are reusable across related examples

---

### User Story 4 - Developers Implement Advanced System Examples (Priority: P2)

A robotics systems engineer needs to develop code examples for advanced chapters (12–13: humanoid locomotion, multi-agent systems) that demonstrate sophisticated control and coordination in simulation with validated performance metrics.

**Why this priority**: Advanced examples showcase the culmination of foundational and learning concepts. These examples inspire advanced readers and demonstrate the book's value for real-world applications.

**Independent Test**: Can be validated by confirming: (a) all 6 advanced examples execute successfully, (b) examples demonstrate complex behaviors (bipedal walking, swarm coordination) with clear metrics, (c) examples reuse learned policies from learning chapters where applicable, (d) performance is validated against specified criteria.

**Acceptance Scenarios**:

1. **Given** a humanoid locomotion example, **When** executed, **Then** the simulated robot walks stably with measurable metrics (stride length, energy consumption, stability margin)
2. **Given** a multi-agent example, **When** tested, **Then** agents coordinate effectively and emergent behavior is observable
3. **Given** advanced examples, **When** analyzed, **Then** they integrate findings from Ch 1–11 (physics, control, learning, sim-to-real)
4. **Given** all advanced examples complete, **When** reviewed, **Then** they serve as starting points for reader research and customization

---

### User Story 5 - QA Engineers Validate Code Examples (Priority: P1)

A QA or validation engineer needs to systematically test all 30+ code examples across different environments (Linux, macOS, Docker) to ensure reproducibility, correctness, and compliance with book standards.

**Why this priority**: Code validation ensures readers trust the examples and can reproduce results. Without systematic validation, code errors undermine the book's credibility.

**Independent Test**: Can be validated by confirming: (a) all 30+ examples run successfully on Linux, macOS, and Docker, (b) code follows style guide (Black for Python, linting passes), (c) outputs match expected results (regression testing), (d) documentation is complete and accurate.

**Acceptance Scenarios**:

1. **Given** any code example, **When** executed in Docker environment, **Then** it produces identical output to local execution
2. **Given** all examples, **When** linted, **Then** zero style violations are found
3. **Given** all examples, **When** tested with pytest, **Then** 100% pass rate
4. **Given** examples integrated into book, **When** published, **Then** readers can execute all examples without external setup

---

### Edge Cases

- What happens if a code example depends on a prior example that fails? (Graceful error messaging with clear dependency chain)
- How do we handle long-running examples (training RL agents)? (Provide pre-trained models and reduced-scope training for quick validation)
- What if simulation platforms have different behaviors (PyBullet vs Gazebo)? (Specify which platform for each example; note behavioral differences explicitly)
- How do we ensure reproducibility with random seeds? (Document all random seeds; provide deterministic test scenarios)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: All 30+ code examples MUST be runnable with zero external dependencies beyond specified simulation platforms (PyBullet, Gazebo, Isaac Sim)
- **FR-002**: Each code example MUST produce deterministic output when run with fixed random seeds for reproducibility
- **FR-003**: Code examples MUST follow Python style guide (Black formatter, 88-char line limit, type hints where applicable)
- **FR-004**: Each code example MUST include inline comments explaining Physical AI concepts, not just code mechanics
- **FR-005**: Code examples MUST include docstrings (module, class, function level) explaining purpose and usage
- **FR-006**: All code examples MUST pass automated linting (pylint, flake8) with zero errors
- **FR-007**: Each code example MUST have unit tests validating core functionality (physics accuracy, control performance, learning convergence)
- **FR-008**: Code examples MUST include README.md per chapter specifying: platform, dependencies, execution time, expected output
- **FR-009**: Examples for learning chapters MUST include pre-trained models (or clear instructions to train) to reduce reader wait time
- **FR-010**: All code examples MUST execute successfully in Docker environment matching local environment behavior
- **FR-011**: Code examples MUST demonstrate real-world constraints: physics-accurate, latency-aware, safety-enforced, energy-modeled where applicable
- **FR-012**: Code examples MUST be independent yet composable: each example runs standalone, but related examples can build on previous results

### Key Entities

- **CodeExample**: Executable Python/C++ script demonstrating a concept, with platform, dependencies, runtime, test suite
- **ExampleTest**: Unit or integration test validating example correctness, performance, constraint adherence
- **ExampleDependency**: Relationship between examples (e.g., Example 5.2 uses trained model from Example 8.1)
- **EnvironmentSetup**: Specification for execution environment (Docker, local Python, C++ compiler)
- **OutputValidation**: Specification for expected output (physics accuracy, convergence metrics, timing constraints)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 30+ code examples execute successfully without errors on Linux, macOS, and Docker (100% pass rate)
- **SC-002**: 100% of examples have docstrings and inline comments meeting quality standards (reviewed by domain expert)
- **SC-003**: 100% of examples pass automated linting (pylint, flake8, Black formatting) with zero violations
- **SC-004**: 100% of examples have unit tests; test pass rate ≥ 95% (allowing for stochastic learning examples with variance)
- **SC-005**: Foundational examples (Ch 1–3) execute in <5 seconds; core examples in <30 seconds; learning examples in <60 seconds
- **SC-006**: Learning examples (Ch 8–11) converge to expected performance within 60 seconds of simulation time
- **SC-007**: All examples produce deterministic output when executed with fixed random seeds (reproducibility test)
- **SC-008**: 100% of examples have pre-trained models OR clear instructions to train within <60 seconds
- **SC-009**: Example dependency graph is acyclic (no circular dependencies between examples)
- **SC-010**: Code coverage for all examples ≥ 70% (measured via pytest-cov or equivalent)

## Assumptions

### Development Environment

- Developers have Python 3.10+ and PyBullet/Gazebo installed or access to Docker
- Examples are developed iteratively: skeleton code first, then full implementation, then tests, then documentation
- Code reviews occur before merging (pull request workflow)

### Simulation Platforms

- PyBullet is primary platform (Ch 1–7 examples); Gazebo/Isaac Sim used for advanced examples (Ch 8–13) where noted
- Physics accuracy of PyBullet is sufficient for educational examples (not real-world control validation)
- Platform differences (e.g., contact modeling) documented where they affect example behavior

### Testing Strategy

- Unit tests validate core functionality; integration tests validate constraint adherence and multi-example workflows
- Stochastic examples (RL training) use fixed seeds for deterministic testing; variance documented
- Performance tests validate timing constraints (latency budgets, training convergence)

### Code Quality Standards

- All code follows PEP 8 (Black formatter, 88-char line limit)
- Type hints used for public function signatures (not mandatory for internal helpers)
- Docstrings follow NumPy/SciPy style
- Examples are self-contained: no external data files required (generated or embedded)

### Documentation

- Each chapter has README.md summarizing all examples: platform, dependencies, execution order, expected outputs
- Examples are runnable with single command: `python example_name.py` (for local) or via Docker
- Pre-trained models stored in `examples/ch{nn}-{topic}/models/` (committed to repo or downloadable)

---

**Feature Status**: Ready for detailed code example implementation planning
**Next Steps**: Proceed to `/speckit.plan` to design code example implementation strategy, then `/speckit.tasks` for granular task breakdown
