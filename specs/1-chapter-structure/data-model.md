---
description: "Data model documentation for book chapters and code examples"
---

# Data Model: Book Entities and Relationships

This document defines the core data model entities for "When Code Learns to Walk" and their relationships.

## Entity Relationship Diagram

```
┌──────────────────┐
│     Chapter      │
├──────────────────┤
│ - id (1-13)      │
│ - title          │◄──┐
│ - section        │   │
│ - scope          │   │ Has
│ - prerequisites  │   │ Many
└──────────────────┘   │
        ▲              │
        │ Depends on   │
        │              │
        │         ┌────────────────┐
        │         │ Learning       │
        │         │ Objective      │
        │         ├────────────────┤
        │         │ - level        │
        │         │ - objective    │
        │         │ - bloomLevel   │
        │         │ - assessment   │
        │         └────────────────┘
        │              ▲
        │              │ Requires
        │              │ Knowledge
        │              │ of
        └──────────────┘


        ┌──────────────────┐
        │    Chapter       │
        ├──────────────────┤
        │   (parent)       │◄──┐
        └──────────────────┘   │
             ▲                 │
             │ Addresses       │ Has
             │ Constraints     │ Many
             │                 │
        ┌─────────────────┐    │
        │   Constraint    │    │
        │   Mapping       │    │
        ├─────────────────┤    │
        │ - type          │    │
        │ - description   │    │
        │ - chapter list  │    │
        └─────────────────┘    │
                              │
                         ┌────────────────┐
                         │  Code Example  │
                         ├────────────────┤
                         │ - id           │
                         │ - title        │
                         │ - platform     │
                         │ - language     │
                         │ - LOC          │
                         │ - time         │
                         └────────────────┘
```

---

## Core Entities

### 1. Chapter

Represents a single chapter in the book.

**Attributes:**
- `chapterNumber`: Integer (1-13)
- `title`: String (e.g., "Rigid-Body Physics")
- `section`: Enum (01-foundations, 02-core, 03-learning, 04-advanced)
- `filename`: String (e.g., "01-rigid-body-physics.md")
- `scope`: Object
  - `description`: String (2-3 sentences)
  - `topics`: Array<String> (3-8 main topics)
  - `whatWontBeCovered`: Array<String>
- `prerequisites`: Array<Integer> (chapter numbers)
- `status`: Enum (planned, drafted, reviewed, published)

**Cardinality:**
- Exactly 13 instances (chapters 1-13)
- Each chapter is unique (no duplicates)
- Total chapters = constant 13

**Constraints:**
- No circular dependencies
- Cannot depend on higher-numbered chapters (prevents loops)
- Form a Directed Acyclic Graph (DAG)

**Example:**
```yaml
Chapter:
  number: 1
  title: "Rigid-Body Physics"
  section: "01-foundations"
  prerequisites: []  # Foundation chapter
  constraints: ["physics"]
  topics:
    - "Newton's laws"
    - "Inertia and mass"
    - "Contact dynamics"
```

---

### 2. Learning Objective

Defines what learners can do after completing a chapter section.

**Attributes:**
- `objectiveId`: String (auto-generated)
- `chapterNumber`: Integer (1-13)
- `level`: Enum (quickStart, coreConcepts, deepDive)
- `objective`: String (action verb + what to demonstrate)
- `bloomLevel`: Integer (1-6, where 6=Create)
- `assessment`: String (how to assess achievement)
- `estimatedTime`: Integer (minutes)

**Bloom's Taxonomy Mapping:**
```
Level 1: Remember    (define, list, recall)
Level 2: Understand  (explain, describe, summarize)
Level 3: Apply       (implement, solve, use)
Level 4: Analyze     (compare, distinguish, examine)
Level 5: Evaluate    (critique, judge, defend)
Level 6: Create      (design, compose, plan)
```

**Cardinality:**
- 3 per chapter (Quick Start, Core, Deep Dive)
- Total: 39 objectives (13 × 3)
- Ordered by difficulty within chapter

**Constraints:**
- Bloom levels must progress: L2-3 (QS) < L3-4 (Core) < L4-5 (Deep)
- Objectives cannot be identical across levels
- Must use appropriate action verb (validate grammatically)

**Example:**
```yaml
LearningObjective:
  chapterNumber: 1
  level: "quickStart"
  objective: "Apply rigid-body dynamics equations to predict pendulum motion"
  bloomLevel: 3  # Apply
  assessment: "Run example, predict final angle ±5°"
  estimatedTime: 5
```

---

### 3. Code Example

Represents an executable code example demonstrating chapter concepts.

**Attributes:**
- `exampleId`: String (e.g., "ch01_ex1_pendulum")
- `chapterNumber`: Integer
- `number`: Integer (1-4, per chapter)
- `title`: String
- `description`: String (50-300 chars)
- `learningLevel`: Enum (quick-start, core-concepts, deep-dive)
- `simulationPlatform`: Enum (PyBullet, Gazebo, Ignition, Hybrid, None)
- `language`: Enum (Python, C++, Python+C++, Bash)
- `complexity`: Object
  - `estimatedLOC`: Integer (20-500)
  - `estimatedTime`: Integer (seconds)
  - `conceptualDifficulty`: Enum (beginner, intermediate, advanced)
- `files`: Object
  - `mainScript`: String
  - `testFile`: String (optional)
  - `configFile`: String (optional)
  - `additionalFiles`: Array<String>
- `dependencies`: Object
  - `pythonPackages`: Array<Package>
  - `priorExamples`: Array<String>

**Cardinality:**
- 2-4 per chapter (typically 3)
- Total: 30+ examples (across 13 chapters)
- Multiple examples can target same learning objective

**Constraints:**
- Each example must be independently runnable
- All dependencies must be available in base environment
- Code must follow quality standards (Black, type hints, tests)
- Execution time must meet budget (5-120 sec depending on type)

**Example:**
```yaml
CodeExample:
  exampleId: "ch01_ex1_pendulum"
  chapterNumber: 1
  number: 1
  title: "Simple Pendulum Simulation"
  learningLevel: "quick-start"
  simulationPlatform: "PyBullet"
  language: "Python"
  estimatedLOC: 50
  estimatedTime: 3
  conceptualDifficulty: "beginner"
  files:
    mainScript: "01_intro_pendulum.py"
    testFile: "test_pendulum.py"
```

---

### 4. Constraint Mapping

Documents which chapters address which Physical AI constraints.

**Attributes:**
- `constraintType`: Enum (physics, latency, safety, energy, sim-to-real)
- `definition`: String (what this constraint is)
- `chapters`: Array<Integer> (which chapters address it)
- `implications`: Array<String> (design implications)
- `examples`: Array<String> (specific examples where it matters)

**Cardinality:**
- 5 constraint types (exact count)
- Each constraint type mapped to 2-5 chapters
- Total mappings: ~18 (some chapters address multiple constraints)

**Constraints:**
- Each constraint must appear in at least 2 chapters
- Chapter 7 must address "safety"
- Chapter 6 must address "latency"
- Chapter 11 must address "sim-to-real"

**Example:**
```yaml
ConstraintMapping:
  type: "latency"
  definition: "Time delay from sensing to actuation"
  chapters: [2, 5, 6, 8, 9, 12, 13]
  implications:
    - "Limits control loop frequency"
    - "Requires predictive algorithms"
    - "Affects stability margins"
  examples:
    - "Chapter 2: Deadtime in transfer functions"
    - "Chapter 6: Real-time scheduling deadlines"
```

---

### 5. Simulation Platform

Describes simulation capabilities and usage.

**Attributes:**
- `name`: Enum (PyBullet, Gazebo, Ignition)
- `purpose`: String (use case)
- `chapters`: Array<Integer> (where used)
- `capabilities`: Object
  - `physics`: Boolean
  - `sensors`: Array<String> (IMU, Lidar, Camera, etc.)
  - `realTimeCapable`: Boolean
  - `rosIntegration`: Boolean
- `performance`: Object
  - `speedMultiplier`: Float (relative to real-time)
  - `maxSteps`: Integer (sustainable sim frequency)
  - `visualizationOverhead`: Enum (none, low, high)
- `learningCurve`: String (hours to productive)

**Cardinality:**
- 3 platform instances
- Multiple chapters use each platform
- Chapters may use multiple platforms

**Example:**
```yaml
SimulationPlatform:
  name: "PyBullet"
  purpose: "Educational physics simulation"
  chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  capabilities:
    physics: true
    sensors: ["IMU", "Distance"]
    realTimeCapable: true
    rosIntegration: false
  performance:
    speedMultiplier: 1.0
    maxSteps: 240  # Hz
  learningCurve: "1-2 hours"
```

---

## Relationships

### Chapter → Learning Objective (1:Many)

Each chapter has exactly 3 learning objectives (one per level).

```sql
SELECT * FROM LearningObjective
WHERE chapterNumber = 1
ORDER BY bloomLevel ASC
-- Returns 3 rows (Quick Start, Core, Deep Dive)
```

### Chapter → Code Example (1:Many)

Each chapter has 2-4 code examples.

```sql
SELECT * FROM CodeExample
WHERE chapterNumber = 1
ORDER BY number ASC
-- Returns 2-4 rows
```

### Code Example → Learning Objective (Many:1)

Each code example targets one learning objective (multiple examples can target same objective).

```sql
SELECT ce.title, lo.objective
FROM CodeExample ce
JOIN LearningObjective lo
  ON ce.learningLevel = lo.level
  AND ce.chapterNumber = lo.chapterNumber
-- One code example demonstrates one learning level per chapter
```

### Chapter → Constraint Mapping (Many:Many)

Chapters can address multiple constraints; constraints are addressed in multiple chapters.

```sql
SELECT c.title, cm.constraintType
FROM Chapter c
JOIN ConstraintMapping cm ON c.chapterNumber = ANY(cm.chapters)
WHERE c.chapterNumber = 5
-- Returns all constraints chapter 5 addresses
```

### Chapter → Chapter (Prerequisites)

Chapters can depend on other chapters (forms DAG).

```sql
SELECT * FROM Chapter
WHERE chapterNumber IN (
  SELECT prerequisite FROM Dependencies
  WHERE chapter = 8
)
-- Returns all prerequisites for Chapter 8
```

---

## Cardinality Summary

| Entity | Count | Per Chapter |
|--------|-------|------------|
| Chapter | 13 | - |
| Learning Objective | 39 | 3 (QS, Core, Deep) |
| Code Example | 30+ | 2-4 (avg 3) |
| Constraint Mapping | 5 | 2-5 per constraint |
| Simulation Platform | 3 | Used in multiple |

---

## Invariants (Must Always Be True)

1. **Exactly 13 chapters**: `COUNT(Chapter) = 13`
2. **All chapters numbered**: `Chapter.number IN [1..13]`
3. **No duplicates**: `UNIQUE(Chapter.number)`
4. **DAG structure**: No circular dependencies
5. **Proper progressions**: Chapters ordered by prerequisites
6. **Coverage**: All learning objectives assessed
7. **Test coverage**: All code examples have tests
8. **Constraint distribution**: Each constraint appears 2+ times
9. **Uniqueness**: No two chapters have identical scope

---

## Implementation Notes

### For Authors

When creating a new chapter, ensure:

```yaml
✓ Chapter metadata complete (title, section, scope)
✓ Three learning objectives (QS, Core, Deep)
  with increasing Bloom levels
✓ 2-4 code examples at appropriate levels
✓ Learning objectives aligned with code examples
✓ At least one constraint explicitly addressed
✓ Prerequisites documented and validated
✓ Examples tested and performance validated
```

### For Validators

When reviewing completeness:

```python
# Pseudo-code for validation
for chapter in chapters:
    assert len(chapter.learning_objectives) == 3
    assert len(chapter.code_examples) >= 2
    assert len(chapter.constraints) >= 1
    assert is_dag(chapter.prerequisites)
    assert all(example.tested for example in chapter.examples)
```

### For Tools

Data model enables:
- Automated chapter scaffolding
- Dependency visualization
- Learning path generation
- Cross-references and linking
- Quality validation
- Progress tracking

---

## Terminology Notes

- **Chapter**: A single book section (Ch 1-13)
- **Section**: A grouping of chapters (01-foundations, etc.)
- **Learning Objective**: What learners can demonstrate
- **Code Example**: Executable code teaching a concept
- **Constraint**: Physical AI design consideration (physics, latency, etc.)
- **Platform**: Simulation environment (PyBullet, Gazebo, etc.)
- **DAG**: Directed Acyclic Graph (no circular dependencies)

---

**Next**: See `chapter-framework.md` for author templates and `quickstart.md` for implementation guide.
