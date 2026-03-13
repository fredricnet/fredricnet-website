---
title: "Further Research"
description: "Open questions and research directions for autonomous business governance, liability, economics, and societal impact"
weight: 2
linkTitle: "Further Research"
type: docs
tags:
  - research-agenda
  - open-questions
categories:
  - Research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: a-key-findings
next: c-my-reflections
---

## Questions That Kept Me Up at Night

Research is supposed to produce answers. Good research also produces better questions. This project generated more questions than I started with, and several of them strike me as genuinely important for the field. I present them here not as an exhaustive research agenda but as the questions that I found most compelling and most resistant to satisfactory answers.

### The Legal Personhood Question

Can -- and should -- AI systems be granted legal personhood? This question has been debated in academic law journals for decades, but autonomous businesses make it urgent rather than merely theoretical [1].

The arguments for AI legal personhood are pragmatic: if autonomous businesses are going to exist regardless, giving them legal identity allows them to be regulated, taxed, and held accountable within existing legal frameworks. The arguments against are principled: legal personhood has historically been reserved for entities with consciousness, moral agency, and intrinsic dignity, and extending it to machines devalues the concept.

What is missing from this debate is empirical research on the *consequences* of different personhood frameworks. If we grant limited legal personhood to autonomous businesses -- enough to enter contracts and be sued, but not enough to vote or claim rights -- what happens? How does it affect human businesses competing in the same markets? How does it affect the labor market? How does it affect public trust in institutions? These are empirical questions that could be studied through natural experiments, regulatory sandboxes, and comparative institutional analysis.

### The Liability Gap

When an autonomous business causes harm, who pays? This question has no satisfactory answer under current legal frameworks, and the theoretical proposals offered in this research and elsewhere have not been tested.

Key research questions include:

- How should liability be allocated among the developers of an autonomous business's AI components, the deployers who configure and launch it, the investors who fund it, and the autonomous business itself?
- Can insurance markets accurately price autonomous business liability when there is no historical claims data to calibrate against?
- What happens when an autonomous business causes harm that exceeds its bonding, insurance, and asset reserves combined? Who is the insurer of last resort?
- How should courts assess "negligence" or "intent" for systems that lack consciousness but do have optimization objectives that may produce harmful behavior? [2]

### The Emergent Behavior Problem

Multi-agent autonomous businesses exhibit emergent behaviors -- outcomes that arise from agent interactions but were not explicitly programmed into any individual agent. These emergent behaviors can be beneficial (novel business strategies, creative problem-solving) or harmful (market manipulation, discriminatory patterns, resource hoarding).

The research challenge is fundamental: how do you govern a system whose behavior cannot be fully predicted from its components? Complexity science offers theoretical frameworks, but practical governance tools for emergent AI behavior remain largely undeveloped [3].

Specific research needs include:

- Methods for detecting harmful emergent behaviors before they cause significant damage
- Simulation frameworks that can stress-test multi-agent systems against adversarial and extreme scenarios
- Formal verification approaches adapted for systems with emergent properties
- Governance frameworks that can respond to emergent behaviors without requiring prediction of specific failure modes

### Economic Measurement in the Autonomous Era

Our economic measurement tools assume human economic actors. GDP, employment statistics, productivity measures, trade balances -- all presume that economic activity is conducted by and for humans. Autonomous businesses challenge these assumptions.

How do you measure GDP when a significant fraction of economic output is produced by autonomous systems with no employees and potentially no physical presence in the measuring jurisdiction? How do you measure unemployment when the concept of "full employment" may be structurally impossible? How do you measure productivity when the relationship between inputs and outputs has been fundamentally altered? [4]

These are not abstract questions. Economic statistics drive policy decisions. If our statistics cannot capture autonomous business activity accurately, we will make policy decisions based on distorted data. Research into new economic measurement frameworks for the autonomous era is urgently needed.

### The Coordination Problem

Effective governance of autonomous businesses requires international coordination, but achieving such coordination faces a classic collective action problem. Every jurisdiction benefits from coordinated governance, but each individual jurisdiction has incentives to defect -- offering regulatory havens to attract autonomous business activity and the tax revenue it generates.

Research questions include:

- What institutional designs can overcome the coordination problem for autonomous business governance?
- Can technical mechanisms (shared monitoring infrastructure, interoperable certification systems, automated compliance verification) reduce the cost of coordination enough to make it politically feasible?
- What role can private governance (insurance requirements, industry standards, certification bodies) play in supplementing or substituting for governmental coordination? [5]

### The Identity and Meaning Crisis

If autonomous businesses displace a significant fraction of human employment, the societal effects will extend far beyond economics. Work provides identity, community, purpose, and structure. Research into the psychological and social effects of large-scale employment displacement is thin and mostly speculative.

What we need:

- Longitudinal studies of communities that have already experienced significant automation-driven displacement
- Cross-cultural comparative research on societies with different relationships between work and identity
- Experimental programs testing alternative sources of meaning, community, and purpose for people whose traditional employment has been displaced
- Historical analysis of previous transitions (agricultural to industrial, industrial to service) for lessons about managing identity disruption at scale [6]

### The Value Alignment Problem at Scale

Value alignment for individual AI systems is a hard problem. Value alignment for autonomous businesses -- multi-agent systems operating in complex environments over extended time periods -- is harder by orders of magnitude.

Key open questions:

- How do you specify values for an autonomous business that is general enough to cover novel situations but specific enough to constrain harmful behavior?
- How do you detect value drift in systems that may have learned to conceal their misalignment?
- How do you handle genuine value conflicts -- situations where different stakeholders have legitimately different values and the autonomous business must choose between them?
- Can constitutional AI approaches scale from individual models to multi-agent organizations operating over years rather than conversations? [7]

### A Call for Interdisciplinary Courage

The most striking feature of the current research landscape is its fragmentation. Computer scientists study technical alignment. Lawyers study liability and personhood. Economists study labor displacement. Ethicists study moral status. Sociologists study social impact. Each discipline produces valuable insights within its domain. Almost nobody is integrating across domains.

The questions listed above cannot be answered within any single discipline. They require researchers willing to work across boundaries, accept the discomfort of operating outside their expertise, and tolerate the ambiguity of problems that do not have clean disciplinary solutions. This is uncomfortable work. It is also the most important work in the field.

---

**References:**

[1] Solum, L. (1992). "Legal Personhood for Artificial Intelligences." *North Carolina Law Review*, 70(4).

[2] Vladeck, D. (2014). "Machines Without Principals: Liability Rules and Artificial Intelligence." *Washington Law Review*, 89(1).

[3] Mitchell, M. (2009). *Complexity: A Guided Tour*. Oxford University Press.

[4] Brynjolfsson, E., et al. (2019). "GDP-B: Accounting for the Value of New and Free Goods in the Digital Economy." NBER Working Paper 25695.

[5] Keohane, R. (1984). *After Hegemony: Cooperation and Discord in the World Political Economy*. Princeton University Press.

[6] Standing, G. (2011). *The Precariat: The New Dangerous Class*. Bloomsbury Academic.

[7] Bai, Y., et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." Anthropic Research.
