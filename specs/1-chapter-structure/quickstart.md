---
description: "Quick start guide for authors and developers"
---

# Quick Start: Implementation Guide

Get started implementing chapters and code examples for "When Code Learns to Walk" in minutes.

---

## For Chapter Authors (Getting Started)

### Step 1: Setup (5 minutes)

```bash
# Clone or navigate to project
cd path/to/hackathon

# Verify you're in right location
ls docs/00-frontmatter/  # Should see intro.md, prerequisites.md, etc.
ls specs/1-chapter-structure/  # Should see research.md, contracts/, etc.
```

### Step 2: Create Your Chapter File (2 minutes)

```bash
# Create chapter markdown file
touch "docs/01-foundations/XX-your-chapter-title.md"

# Open in editor
code "docs/01-foundations/XX-your-chapter-title.md"
```

### Step 3: Use the Framework Template (10 minutes)

Copy this starter template into your file:

```yaml
---
sidebar_position: {number}
---

# Chapter {N}: {Your Title}

## Overview

{1-2 paragraph introduction}

## Quick Start: {Simple Task}

### What You'll Build
{Brief description}

### The Code

\`\`\`python
# Your code here
\`\`\`

### What's Happening
{Explanation}

## Core Concepts

### Concept 1: {Title}
{Content and code}

### Concept 2: {Title}
{Content and code}

## Practice Exercises

### Exercise 1
{Problem statement}

## Key Takeaways

- ✓ Point 1
- ✓ Point 2

## References

[Your references]
```

### Step 4: Reference the Framework (5 minutes)

Review these templates:
- `chapter-framework.md` - Complete author guide (this section)
- `data-model.md` - Data structures and requirements
- `research.md` - Domain research findings

### Step 5: Create Code Example Files (5 minutes)

```bash
# Create example directory
mkdir -p examples/ch{NN}-your-topic

# Create example files
touch examples/ch{NN}-your-topic/01_intro_{topic}.py
touch examples/ch{NN}-your-topic/02_core_{topic}.py
touch examples/ch{NN}-your-topic/test_example.py
touch examples/ch{NN}-your-topic/README.md
```

### Step 6: Write Your Content (1-2 hours)

Follow structure from `chapter-framework.md`:
1. Quick Start (10 min)
2. Core Concepts (3-5 sections)
3. Code Examples (embedded)
4. Deep Dive (optional)
5. Exercises (5-10 min)

---

## For Code Example Implementers (Getting Started)

### Step 1: Setup Development Environment (15 minutes)

**Option A: Local Python**
```bash
cd path/to/hackathon

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # or: venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Verify installation
python -c "import pybullet, numpy, torch; print('✓ All dependencies installed')"
```

**Option B: Docker**
```bash
cd path/to/hackathon

# Build image
docker build -t code-learns-to-walk .

# Run container
docker run -it code-learns-to-walk /bin/bash
```

### Step 2: Navigate to Your Chapter (1 minute)

```bash
cd examples/ch{NN}-{topic}/
ls -la

# Should see:
# - 01_intro_*.py (Quick Start example)
# - 02_core_*.py  (Core Concepts example)
# - 03_advanced_*.py (Deep Dive example, if applicable)
# - test_*.py (Unit tests)
# - README.md
```

### Step 3: Run Your First Example (30 seconds)

```bash
# Run the Quick Start example
python 01_intro_pendulum.py

# Expected output:
# Loading physics engine...
# Simulating pendulum for 10 seconds...
# Final angle: 2.45 degrees
# ✓ Example completed successfully
```

### Step 4: Implement Code Example Template (30 minutes - 2 hours)

Use this template for each example:

```python
#!/usr/bin/env python3
"""
Chapter {N}, Example {X}: {Title}

Learning Objective:
    {What can reader do after understanding this}

Constraints Addressed:
    - {physics|latency|safety|energy|sim-to-real}

Real Robot Application:
    {How this applies to actual robots}
"""

import numpy as np
import pybullet as p
import matplotlib.pyplot as plt
from typing import Tuple

# Set seed for reproducibility
np.random.seed(42)

def initialize_physics() -> int:
    """
    Initialize PyBullet physics engine.

    Returns:
        client_id: Connection ID for physics engine
    """
    client_id = p.connect(p.GUI)  # Use p.DIRECT for headless
    p.setAdditionalSearchPath(...)  # Add URDF path if needed
    p.setGravity(0, 0, -9.81)
    return client_id

def load_robot() -> int:
    """
    Load robot model.

    Returns:
        robot_id: Unique identifier for robot in simulation
    """
    robot_id = p.loadURDF("path/to/robot.urdf")
    return robot_id

def run_simulation(steps: int = 1000) -> dict:
    """
    Run physics simulation.

    Args:
        steps: Number of simulation steps to execute

    Returns:
        results: Dictionary with simulation results
    """
    client_id = initialize_physics()
    robot_id = load_robot()

    # Data collection
    positions = []
    velocities = []

    for step in range(steps):
        # Your simulation logic here
        p.stepSimulation()

        # Collect data
        pos, vel = p.getBasePositionAndOrientation(robot_id)
        positions.append(pos)
        velocities.append(vel)

    p.disconnect(client_id)

    return {
        "positions": np.array(positions),
        "velocities": np.array(velocities),
    }

def visualize_results(results: dict) -> None:
    """
    Plot results.

    Args:
        results: Dictionary from run_simulation()
    """
    plt.figure(figsize=(12, 5))

    plt.subplot(1, 2, 1)
    plt.plot(results["positions"][:, 0])  # x position
    plt.xlabel("Step")
    plt.ylabel("X Position (m)")
    plt.title("Robot X Position")

    plt.subplot(1, 2, 2)
    plt.plot(results["velocities"][:, 0])  # x velocity
    plt.xlabel("Step")
    plt.ylabel("X Velocity (m/s)")
    plt.title("Robot X Velocity")

    plt.tight_layout()
    plt.savefig("results.png")
    plt.show()

def main():
    """Run the complete example."""
    print("Running Chapter {N}, Example {X}: {Title}")

    # Run simulation
    results = run_simulation(steps=1000)

    # Visualize
    visualize_results(results)

    # Validate results
    assert results["positions"].shape[0] == 1000
    assert results["velocities"].shape[0] == 1000

    print("✓ Example completed successfully")

if __name__ == "__main__":
    main()
```

### Step 5: Write Unit Tests (15-30 minutes)

Create `test_example.py`:

```python
import pytest
import numpy as np
from example_module import run_simulation, initialize_physics

def test_initialization():
    """Test physics engine initialization."""
    client_id = initialize_physics()
    assert client_id is not None
    # Cleanup
    import pybullet as p
    p.disconnect(client_id)

def test_simulation_runs():
    """Test that simulation completes without errors."""
    results = run_simulation(steps=100)
    assert results["positions"].shape[0] == 100
    assert results["velocities"].shape[0] == 100

def test_simulation_time_budget():
    """Test that simulation runs within time budget."""
    import time
    start = time.time()
    run_simulation(steps=1000)
    elapsed = time.time() - start

    # Should complete in under 30 seconds for Chapter 1-7
    # Could be longer for Chapters 8-13
    assert elapsed < 120.0, f"Took {elapsed}s, budget exceeded"

if __name__ == "__main__":
    pytest.main([__file__, "-v"])
```

### Step 6: Validate Code Quality (5 minutes)

```bash
# Format code with Black
black *.py --line-length=88

# Check type hints
mypy *.py --ignore-missing-imports

# Run linter
pylint *.py --disable=missing-module-docstring

# Run tests
pytest test_*.py -v

# Check execution time
time python 01_intro_example.py

# All should pass!
✓ Code formatted
✓ Type hints valid
✓ Linter passes
✓ All tests pass (100% should pass)
✓ Execution within time budget
```

### Step 7: Document Your Example (10 minutes)

Create `README.md` in your chapter directory:

```markdown
# Chapter {N}: {Topic}

## Examples

### Example 1: Quick Start

**What**: Simple introduction to the concept
**Time**: ~5 seconds to run
**LOC**: ~50 lines

```bash
python 01_intro_pendulum.py
```

### Example 2: Core Concepts

**What**: Full implementation with detailed explanation
**Time**: ~10 seconds
**LOC**: ~150 lines

```bash
python 02_core_multibody.py
```

### Example 3: Advanced (Optional)

**What**: Advanced techniques and optimizations
**Time**: ~30 seconds
**LOC**: ~300 lines

```bash
python 03_advanced_contact.py
```

## Running All Examples

```bash
# Run quick start
python 01_intro_*.py

# Run all examples
for f in 0[1-3]_*.py; do python "$f"; done

# Run tests
pytest test_*.py -v

# Validate code quality
black *.py
mypy *.py --ignore-missing-imports
```

## Concepts Covered

- Concept 1
- Concept 2
- Concept 3

## Constraints Addressed

- [x] Physics
- [ ] Latency
- [ ] Safety
- [ ] Energy
- [ ] Sim-to-Real

## Real Robot Application

{Describe how this applies to actual robots}

## Learning Path

Follow examples in order:
1. Quick Start: Get working example immediately
2. Core Concepts: Understand the implementation
3. Advanced: See optimization techniques

## Next Steps

After mastering these examples:
- See Chapter {N+1} for {related topic}
- Try Exercise 1 from main chapter text
- Modify examples to do {something new}
```

---

## Common Tasks & Solutions

### Task: Add a new Python dependency

```bash
# 1. Install locally
pip install package-name

# 2. Add to requirements.txt (keep alphabetical)
# Open requirements.txt and add:
# package-name>=1.0.0

# 3. Verify installation
pip install -r requirements.txt

# 4. Update Docker (rebuild image)
docker build -t code-learns-to-walk .
```

### Task: Add visualization to example

```python
import matplotlib.pyplot as plt

def visualize_example():
    plt.figure(figsize=(10, 6))
    plt.plot(data_x, data_y)
    plt.xlabel("Time (s)")
    plt.ylabel("Position (m)")
    plt.title("Simulation Results")
    plt.grid(True)
    plt.savefig("results.png", dpi=150)  # Save first
    plt.show()  # Then display
```

### Task: Debug simulation instability

```python
# Check physics parameters
p.setPhysicsEngineParameter(
    fixedTimeStep=0.001,  # 1ms steps (1000 Hz)
    numSubSteps=10,       # Smaller substeps for stability
    gravityAcceleration=[0, 0, -9.81]
)

# Monitor energy (should decrease slowly)
kinetic_energy = 0.5 * mass * velocity**2
potential_energy = mass * gravity * height
total_energy = kinetic_energy + potential_energy
print(f"Energy: {total_energy:.2f} J")

# Check for NaN values
assert np.all(np.isfinite(position))
assert np.all(np.isfinite(velocity))
```

### Task: Profile code performance

```python
import cProfile
import pstats

def profile_example():
    profiler = cProfile.Profile()
    profiler.enable()

    # Run your code
    result = run_simulation(steps=1000)

    profiler.disable()
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative')
    stats.print_stats(10)  # Top 10 functions

if __name__ == "__main__":
    profile_example()
```

---

## Validation Checklist

Before committing, verify:

**Code Quality**
- [ ] Code formatted with `black *.py`
- [ ] All functions have type hints
- [ ] All functions have docstrings
- [ ] Tests pass: `pytest test_*.py -v`
- [ ] 100% test pass rate (all tests must pass)

**Performance**
- [ ] Execution time < 5 seconds (Ch 1-3)
- [ ] Execution time < 30 seconds (Ch 4-7)
- [ ] Execution time < 60 seconds (Ch 8-11)
- [ ] Execution time < 120 seconds (Ch 12-13)

**Functionality**
- [ ] Runs without errors
- [ ] Produces expected output
- [ ] Reproducible (same result each run)
- [ ] Handles edge cases gracefully

**Documentation**
- [ ] Docstrings explain what/why, not just what
- [ ] Code comments explain complex logic
- [ ] README provides context
- [ ] Links to chapter content work

**Integration**
- [ ] Chapter frontmatter references this example
- [ ] Example demonstrates chapter learning objectives
- [ ] Constraints explicitly addressed
- [ ] Dependencies listed in code docstring

---

## Getting Help

### Common Issues

**"ModuleNotFoundError: No module named 'pybullet'"**
```bash
# Activate virtual environment
source venv/bin/activate
# Install dependencies
pip install -r requirements.txt
```

**"Simulation unstable / diverges"**
- Reduce timestep (use smaller dt)
- Increase numSubSteps in setPhysicsEngineParameter
- Check if model is physically valid
- Verify initial conditions are realistic

**"Code takes too long to run"**
- Profile with cProfile (see above)
- Check for nested loops
- Use vectorized NumPy instead of loops
- Reduce simulation steps for testing

**"Tests keep failing"**
- Ensure reproducibility with fixed seed
- Check for platform-specific issues
- Use assertions to find failure points
- Add print statements for debugging

### Where to Ask

1. **Quick questions**: Check existing code examples
2. **Documentation**: Review `chapter-framework.md`
3. **Research findings**: See `research.md` for domain info
4. **Data model**: Check `data-model.md` for structure
5. **GitHub issues**: Open issue for bugs or suggestions

---

## Next Steps

1. ✓ Setup environment (5-15 minutes)
2. ✓ Review `chapter-framework.md` (10 minutes)
3. ✓ Create first code example (30 minutes - 2 hours)
4. ✓ Write tests and validate (15-30 minutes)
5. ✓ Document chapter (30 minutes)
6. Submit for review!

---

**Ready?** Pick a chapter and start implementing! 🚀
