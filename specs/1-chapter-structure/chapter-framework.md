---
description: "Author template and framework for creating chapters"
---

# Chapter Framework: Author Template and Guidelines

This document provides the standard structure and templates that all chapter authors should follow.

## Chapter File Structure

```
docs/{section}/{nn-chapter-name}.md
├── Frontmatter (YAML)
├── Chapter Overview
├── Quick Start Section
├── Core Concepts Sections (3-8)
├── Code Examples Integration
├── Deep Dive Section
├── Practice Exercises
├── Key Takeaways
└── References
```

---

## Frontmatter Template

All chapters must begin with YAML frontmatter:

```yaml
---
sidebar_position: {position}
---

# Chapter {N}: {Title}

## Overview

{1-2 paragraph overview of what this chapter teaches}
```

**Required fields:**
- `sidebar_position`: Integer for ordering
- `title`: Chapter title

---

## Section 1: Quick Start (5-10 minutes)

### Purpose
Get learners an immediate "win" with working code in under 10 minutes.

### Structure

```markdown
## Quick Start: {Task}

### What You'll Build
{1-2 sentences describing the minimal example}

### The Code
{Code example here, ~50 LOC}

### What's Happening
{Explanation of key lines, 2-3 paragraphs}

### Try It Yourself
{1-2 modifications readers can try}

### Next Steps
{Preview of what's coming in Core Concepts}
```

### Guidelines

- **Code first**: Lead with working code, explain after
- **Minimal**: < 50 lines of code, < 5 minutes to understand
- **Executable**: Works immediately without setup
- **Visual feedback**: Produces clear output or plot
- **Confidence building**: Should feel achievable

### Code Template

```python
#!/usr/bin/env python3
"""
Quick Start Example: {Topic}

Learning Objective: {What reader can do after this}
"""

import numpy as np
import matplotlib.pyplot as plt
# ... other imports

# Set seed for reproducibility
np.random.seed(42)

def main():
    """Run the quick start example."""
    # TODO: Implementation
    pass

if __name__ == "__main__":
    main()
```

---

## Section 2: Core Concepts (20-30 minutes)

### Purpose
Develop deep understanding through theory and implementation.

### Structure

Organize into 3-8 subsections, each focusing on one concept:

```markdown
## Core Concept 1: {Title}

### Background
{Theory and context, 2-3 paragraphs}

### Mathematical Formulation
{Equations with explanations}

### Implementation
{Code with detailed comments}

### Why This Matters for Physical AI
{Connection to physics, latency, safety, energy, or sim-to-real constraints}

### Common Mistakes
- Mistake 1: Description
- Mistake 2: Description
```

### Guidelines

- **Progressive building**: Each section builds on previous
- **Balance**: Theory + code + intuition
- **Real-world connection**: Link back to physical robots
- **Depth**: Enough detail to implement yourself
- **Visual aids**: Diagrams, flowcharts, or plots

### Constraint Integration

Each Core Concept section must include:

```markdown
### Why This Matters for Physical AI

This concept directly impacts:
- **{Constraint 1}**: How/why it matters (1-2 sentences)
- **{Constraint 2}**: How/why it matters (1-2 sentences)

Real robot example: {Concrete example from practice}
```

---

## Section 3: Code Examples Integration

### Embedding Code Examples

When referencing code examples:

```markdown
### Example: {Topic}

The full implementation is in `examples/ch{NN}-{topic}/{number}_{name}.py`.

Let's walk through the key parts:

{Show relevant code snippets with explanation}

To run this example:
\`\`\`bash
cd examples/ch{NN}-{topic}
python {number}_{name}.py
\`\`\`

Expected output:
\`\`\`
{Example output}
\`\`\`
```

### Code Example Markers

Mark examples with metadata:

```markdown
!!! note "Code Example 1: Quick Start"

    **File**: `01_intro_pendulum.py`
    **Language**: Python
    **Platform**: PyBullet
    **Time**: ~5 seconds
    **LOC**: 50

    This introduces the basic concept using a simple example.
```

### Testing References

When code includes tests:

```markdown
This example includes comprehensive tests:
\`\`\`bash
pytest examples/ch{NN}-{topic}/test_{name}.py -v
\`\`\`

Tests validate:
- Correctness of physics calculations
- Numerical stability
- Expected output format
```

---

## Section 4: Deep Dive (30-60+ minutes)

### Purpose
Advanced understanding for researchers and specialists.

### Structure

```markdown
## Deep Dive: {Advanced Topic}

### Advanced Theory
{Mathematical depth, proofs if appropriate}

### Research Directions
{Open problems, current research, future work}

### Industrial Applications
{How this is used in production systems}

### Advanced Implementation
{Optimization techniques, edge cases, performance considerations}

### When to Use This Approach
{Decision criteria for practitioners}
```

### Guidelines

- **Research-ready**: Should connect to academic papers
- **Optional**: Not needed to understand basics
- **Advanced code**: May use C++, optimizations, or complex patterns
- **Citation heavy**: Provide references to papers
- **Future directions**: Point toward research opportunities

### Deep Dive Template

```markdown
## Deep Dive: {Topic}

### When This Matters

This advanced topic is relevant for:
- Researchers working on {application}
- Engineers optimizing for {constraint}
- Systems requiring {specific requirement}

If you're building [simple application], skip this section.

### State of the Art

Current approaches in the literature:

**Approach 1: {Name}**
- Pros: {advantages}
- Cons: {disadvantages}
- Best for: {use case}

[Cite: Author et al., 2024]

### Implementation Considerations

{Advanced code with discussion of trade-offs}

### Further Reading
- [Paper Title] (Author, Year)
- [Research Direction] (Organization, Year)
```

---

## Section 5: Practice Exercises

### Purpose
Encourage active learning and knowledge consolidation.

### Structure

Provide 2-5 exercises at varying difficulty:

```markdown
## Practice Exercises

### Exercise 1: {Beginner}
{Problem statement}

**Hint**: {Optional hint}

**Solution**: {Link to example solution if provided}

### Exercise 2: {Intermediate}
{Problem statement with more open-ended requirements}

### Exercise 3: {Advanced}
{Open-ended challenge}
```

### Guidelines

- **Graduated difficulty**: Easy → Medium → Hard
- **Practical focus**: Apply to real problems
- **Optional solutions**: Provide some, leave others open
- **Time estimates**: "Should take 10-15 minutes"
- **Extensions**: "Try modifying X to do Y"

### Exercise Template

```markdown
### Exercise 1: Modify the Basic Example

**Difficulty**: Beginner | **Time**: 5-10 minutes

Run `01_intro_pendulum.py` and modify it to:
1. Change the initial angle from 45° to 90°
2. Predict what happens to the final angle
3. Run and verify your prediction

What did you learn?

**Hint**: Look for the line `initial_angle = ...`

**Solution**: See `solution_ex1.py` for reference
```

---

## Section 6: Key Takeaways

### Purpose
Summarize and connect concepts.

### Structure

```markdown
## Key Takeaways

**What You Learned**:
- ✓ Concept 1 and why it matters
- ✓ Concept 2 and its implications
- ✓ Concept 3 and practical applications

**When You'll Use This**:
- In Chapter N when we discuss {related topic}
- In Chapter M to build {more complex feature}
- For [specific application domain]

**Real Robot Impact**:
This chapter's concepts directly impact:
- {Robot X}: Makes possible {capability}
- {Robot Y}: Constrains {design choice}

**Quick Reference**:
Remember these equations/concepts for later:
\`\`\`
{Key equations or formulas in box}
\`\`\`
```

---

## Section 7: References

### Structure

```markdown
## References

### Core References
[List papers/books essential to chapter]

### Further Reading
[Supplementary but not required]

### Code & Tools
[Documentation for libraries used]

### Related Chapters
- Chapter X: {Related topic}
- Chapter Y: {Prerequisite refresher}
```

---

## Multi-Level Content Markers

Use Docusaurus admonitions to mark different learning levels:

```markdown
!!! quote "Quick Start"

    For rapid practical understanding, focus on this section.
    Expected time: 5 minutes.

!!! note "Core Concept"

    This is the recommended path for most readers.
    Expected time: 20-30 minutes.

!!! info "Deep Dive"

    Advanced topic for specialized learning.
    Can be skipped by beginners.
    Expected time: 30-60 minutes.
```

### In Code Comments

```python
# QUICK START: Basic physics simulation
# For rapid example: Just run this section

# CORE CONCEPTS: Understanding the model
# Important for actual applications

# DEEP DIVE: Advanced optimization
# For researchers optimizing this algorithm
```

---

## Code Integration Patterns

### Pattern 1: Inline Code Snippet

Use for short, illustrative code:

```markdown
The basic loop looks like:

\`\`\`python
for t in range(steps):
    # Update state
    state = integrate(state, dt)
    # Apply control
    control = controller(state)
\`\`\`
```

### Pattern 2: File Reference

Link to full examples:

```markdown
The complete implementation is in
`examples/ch01-rigid-body-physics/02_core_multibody.py`:

[View on GitHub](../../examples/ch01-rigid-body-physics/02_core_multibody.py)
```

### Pattern 3: Callout

Highlight important concepts:

```markdown
!!! warning "Important"

    Always validate simulation results against:
    - Energy conservation (within numerical precision)
    - Force bounds (no infinite forces)
    - Physical plausibility (results should make sense)
```

---

## Writing Guidelines

### General
- **Active voice**: "We implement..." not "It is implemented..."
- **Clear pronouns**: Refer to the reader: "You will see..."
- **Concrete examples**: Abstract concepts need concrete examples
- **Consistent terminology**: Use glossary for domain terms
- **Progressive complexity**: Simple first, complex later

### Mathematical
- **Define notation**: x = position (meters)
- **Show units**: Always include units in equations
- **Physical interpretation**: Explain what equation means, not just the math
- **Key equations in boxes**: Highlight important formulas

### Code
- **Type hints**: All functions must have type annotations
- **Docstrings**: Every function gets a docstring
- **Comments**: Explain the "why", not just the "what"
- **Error handling**: Show how to handle common errors
- **Performance notes**: Comment on expensive operations

---

## Author Checklist

Before submitting chapter:

- [ ] **Completeness**
  - [ ] Frontmatter present (sidebar_position, title)
  - [ ] Three learning objectives (QS, Core, Deep) with Bloom levels
  - [ ] Quick Start section (< 10 min)
  - [ ] Core Concepts sections (20-30 min total)
  - [ ] Deep Dive section (optional but recommended)
  - [ ] 2-4 code examples
  - [ ] Practice exercises (2-5)
  - [ ] Key takeaways
  - [ ] References

- [ ] **Quality**
  - [ ] Grammar and spelling checked
  - [ ] All code snippets tested (run without errors)
  - [ ] Mathematical notation correct
  - [ ] Figures/diagrams have captions
  - [ ] Links are active and correct

- [ ] **Alignment**
  - [ ] Learning objectives match code examples
  - [ ] Prerequisites match other chapters
  - [ ] Constraints explicitly addressed
  - [ ] Related chapters referenced
  - [ ] Terminology uses glossary

- [ ] **Physical AI Focus**
  - [ ] At least one constraint discussed (physics, latency, safety, energy, sim-to-real)
  - [ ] Real robot implications mentioned
  - [ ] Code-first examples (no code-free chapters)
  - [ ] Production-quality code standards maintained

---

## Example Chapter Outline

```markdown
---
sidebar_position: 1
---

# Chapter 1: Rigid-Body Physics

## Overview
[Introduction paragraph]

## Quick Start: Simple Pendulum
[5-minute hands-on example]

## Core Concept 1: Newton's Laws
[Theory, code, implications]

## Core Concept 2: Inertia and Mass
[Theory, code, implications]

## Core Concept 3: Contact Dynamics
[Theory, code, implications]

## Code Examples

### Example 1: Pendulum (Quick Start)
[Code walkthrough]

### Example 2: Multi-Body Robot (Core)
[Code walkthrough]

### Example 3: Contact Dynamics (Deep)
[Code walkthrough]

## Deep Dive: Numerical Integration Methods
[Advanced topic for researchers]

## Practice Exercises
[2-5 exercises at graduated difficulty]

## Key Takeaways
[Summary and connections]

## References
[Academic papers, books, tools]
```

---

## Common Pitfalls to Avoid

❌ **Avoid**: Starting with heavy theory before showing code
✅ **Do**: Show quick example first, then explain theory

❌ **Avoid**: Code that only works in special cases
✅ **Do**: Code that's robust and handles common edge cases

❌ **Avoid**: Ignoring the Physical AI constraints
✅ **Do**: Explicitly discuss how constraints affect design

❌ **Avoid**: Making readers jump between chapters constantly
✅ **Do**: Self-contained sections with cross-references

❌ **Avoid**: Examples that can't actually run
✅ **Do**: Test-driven: examples must be executable

---

## Tools and Resources

### Writing
- Markdown editor: VSCode + Markdown plugins
- Grammar: Grammarly or similar
- Spell check: Built into most editors

### Code
- Code formatter: `black --line-length=88`
- Linter: `pylint` for Python
- Type checker: `mypy` for Python
- Tests: `pytest` for Python

### Documentation
- Docusaurus: For building the site
- MkDocs: Alternative static site generator
- Pandoc: Convert between formats

---

**Next Steps**:
1. Review `data-model.md` for data structures
2. Check `quickstart.md` for implementation guide
3. Start drafting using this template
4. Submit for review following validation checklist

---

Good luck! We're excited to have your contribution to this book!
