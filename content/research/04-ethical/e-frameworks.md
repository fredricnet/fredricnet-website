---
title: "Ethical Frameworks"
description: "Consequentialism, deontology, virtue ethics, and the major institutional frameworks for evaluating autonomous businesses -- IEEE, Asilomar, EU Ethics Guidelines, and corporate RAI."
weight: 5
linkTitle: "Frameworks"
type: docs
tags:
  - ethics
  - frameworks
  - ieee
  - responsible-ai
categories:
  - research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: d-transparency
next: 05-technical-challenges
---

## The Need for Frameworks

The previous sections documented specific ethical challenges: accountability gaps, alignment failures, labor displacement, transparency deficits. Each is a real problem demanding practical solutions. But practical solutions require a normative foundation -- some basis for deciding what counts as a good outcome, a just process, or an acceptable trade-off.

Ethical frameworks provide that foundation. They do not give definitive answers, but they structure the questions in ways that make reasoning possible. Without them, ethical discussions about autonomous businesses degenerate into competing intuitions, with no basis for adjudication.

This section surveys the relevant frameworks at two levels: philosophical traditions that provide foundational principles, and institutional frameworks that translate those principles into actionable guidelines.

## Consequentialism: Judging by Outcomes

Consequentialism holds that the morality of an action is determined entirely by its consequences. The most familiar version is utilitarianism: the right action is the one that produces the greatest good for the greatest number [1].

Applied to autonomous businesses, consequentialism asks a straightforward question: do they produce better outcomes than the alternatives? If an autonomous business delivers services more efficiently, at lower cost, with fewer errors, and with broader access than a human-managed competitor, then -- on a consequentialist account -- it is morally preferable, regardless of how we feel about the absence of human management.

This framework has obvious appeal for proponents of autonomous businesses. The efficiency argument is essentially consequentialist: the technology should be judged by its results, not by whether it conforms to traditional notions of how businesses should operate.

But consequentialism has well-known problems, and they apply with particular force here:

**Measurement.** Whose good counts, and how is it measured? If an autonomous business generates profits for token holders while displacing thousands of workers, is the net consequence positive or negative? The answer depends entirely on how you weight different stakeholders' interests, and consequentialism provides no principled basis for that weighting.

**Distribution.** Consequentialism in its standard form cares about aggregate welfare, not distribution. An autonomous business that creates enormous value concentrated among a few while impoverishing many produces a large aggregate gain -- and consequentialism approves. This is morally repugnant to most people, which suggests that pure consequentialism is an inadequate framework.

**Long-term uncertainty.** The consequences of autonomous businesses playing out over decades and centuries are radically uncertain. A consequentialist analysis requires predicting these consequences, which may be impossible. The framework demands information that does not exist.

## Deontology: Rules and Rights

Deontological ethics, most associated with Immanuel Kant, holds that certain actions are right or wrong regardless of their consequences. Morality is about following rules, respecting rights, and treating persons as ends in themselves rather than mere means [2].

Applied to autonomous businesses, deontology asks different questions than consequentialism:

- Do autonomous businesses respect individuals' rights? The right to explanation, the right to human oversight, the right to meaningful work -- if these are genuine rights, then autonomous businesses that violate them are wrong regardless of their efficiency.
- Do autonomous businesses treat people as ends or as means? If workers are displaced not because their work is unnecessary but because an algorithm is cheaper, are they being treated as means to the business's profit rather than as ends in themselves?
- Are there duties that require human fulfillment? If we have a duty of care to customers, patients, or clients, can that duty be discharged by an AI system? Or does the duty inherently require a human agent?

Deontological analysis tends to be more skeptical of autonomous businesses than consequentialist analysis, because it takes seriously the idea that certain things matter regardless of efficiency. The right to be treated by a human decision-maker, the right to an explanation that engages with your specific circumstances, the duty to maintain human oversight of consequential decisions -- these are deontological commitments that autonomous businesses may structurally violate.

The limitation of deontology in this context is its rigidity. A strict deontological position might prohibit autonomous businesses entirely, even in domains where they clearly produce better outcomes for everyone involved. Most people's moral intuitions are not that rigid, which is why pure deontology, like pure consequentialism, is ultimately insufficient.

## Virtue Ethics: Character and Flourishing

Virtue ethics, rooted in Aristotle, focuses not on consequences or rules but on character -- what kind of person (or institution, or society) do we want to be? The central question is whether a practice promotes human flourishing or diminishes it [3].

This framework shifts the focus from the autonomous business itself to the society that creates and permits it. Does a society in which autonomous businesses are prevalent promote human flourishing? Or does it create conditions -- mass unemployment, concentration of power, erosion of meaningful work -- that diminish it?

Virtue ethics also asks about the character of the people involved. What kind of person deploys an autonomous business? What virtues or vices does the practice cultivate? If building autonomous businesses cultivates hubris (the belief that complex social systems can be reduced to optimization problems), recklessness (deploying systems with poorly understood consequences), or indifference (treating displaced workers as acceptable collateral), then the practice is ethically problematic regardless of its outcomes.

The strength of virtue ethics is that it keeps the focus on human experience. The weakness is that it provides less actionable guidance than consequentialism or deontology. "Promote flourishing" is a worthy goal but does not tell you whether a specific autonomous business should be permitted to operate.

## IEEE Ethically Aligned Design

The IEEE's *Ethically Aligned Design* (EAD) initiative, first published in 2016 and updated through subsequent versions, is the most comprehensive attempt by a professional engineering organization to establish ethical principles for autonomous systems [4].

EAD identifies several key principles:

- **Human rights.** Autonomous systems should respect internationally recognized human rights.
- **Well-being.** The impact on human well-being should be a primary success criterion.
- **Data agency.** Individuals should have control over their data.
- **Effectiveness.** Systems should be demonstrably effective and their effectiveness measurable.
- **Transparency.** The basis for decisions should be discoverable.
- **Accountability.** Clear lines of accountability should exist.
- **Awareness of misuse.** Developers should guard against potential misuse.
- **Competence.** Those developing autonomous systems should have appropriate expertise.

For autonomous businesses, EAD provides useful design principles but limited enforcement mechanisms. It is a voluntary standard developed by engineers for engineers. Its adoption depends on professional culture rather than legal mandate.

The most valuable contribution of EAD may be its process recommendations: stakeholder engagement, impact assessment, iterative evaluation. These processes, if embedded in the development of autonomous businesses, could catch ethical problems before they scale.

## The Asilomar AI Principles

The Asilomar AI Principles, drafted at the 2017 Beneficial AI conference and signed by thousands of AI researchers and industry figures, provide a broader set of principles for AI development [5].

Several are directly relevant to autonomous businesses:

- **Shared benefit.** AI technologies should benefit and empower as many people as possible.
- **Shared prosperity.** The economic prosperity created by AI should be shared broadly.
- **Human control.** Humans should choose how and whether to delegate decisions to AI systems.
- **Non-subversion.** The power conferred by AI should respect and improve social and civic processes.
- **AI arms race.** An arms race in lethal autonomous weapons should be avoided.

The Asilomar Principles are notable for their emphasis on distribution -- not just whether AI creates value, but who captures it. For autonomous businesses, the "shared prosperity" principle directly challenges business models that concentrate returns among a small number of stakeholders while displacing workers.

Like IEEE EAD, the Asilomar Principles are voluntary and aspirational. Their influence has been primarily cultural: shaping the norms of the AI research community rather than constraining specific behaviors.

## EU Ethics Guidelines for Trustworthy AI

The European Commission's High-Level Expert Group on AI published its "Ethics Guidelines for Trustworthy AI" in 2019, establishing seven requirements for AI systems [6]:

1. **Human agency and oversight.** AI should support human autonomy and decision-making.
2. **Technical robustness and safety.** Systems should be resilient, secure, and safe.
3. **Privacy and data governance.** Privacy must be ensured throughout the AI lifecycle.
4. **Transparency.** Systems should be transparent and explainable.
5. **Diversity, non-discrimination, and fairness.** Unfair bias must be avoided.
6. **Societal and environmental well-being.** AI should benefit society and the environment.
7. **Accountability.** Mechanisms for responsibility and accountability should exist.

These guidelines fed directly into the EU AI Act and continue to influence European AI policy. For autonomous businesses operating in or serving the European market, they represent the normative foundation that regulators will apply.

The EU guidelines are notable for their emphasis on human agency and oversight as the first requirement -- a clear statement that European policy prioritizes human control over AI autonomy. This positions the EU as the most skeptical major jurisdiction toward fully autonomous business models.

## Corporate Responsible AI Programs

Beyond governmental and academic frameworks, the major technology companies have developed their own responsible AI (RAI) programs. Google, Microsoft, Meta, Anthropic, and others have published AI principles, established ethics boards (with varying degrees of independence), and implemented internal review processes.

These corporate RAI programs share common themes:

- **Fairness.** Avoiding discriminatory outcomes.
- **Transparency.** Making AI systems understandable.
- **Privacy.** Protecting user data.
- **Safety.** Preventing harmful outcomes.
- **Accountability.** Maintaining human oversight.

The credibility of corporate RAI programs is contested. Critics argue that they are primarily public relations exercises, designed to forestall regulation rather than genuinely constrain behavior [7]. The dissolution of Google's AI ethics board shortly after its formation, and the firing of prominent AI ethics researchers at multiple companies, support this skepticism.

For autonomous businesses, corporate RAI programs are relevant primarily as precedents. They demonstrate what self-regulation looks like, for better and worse. The lesson is that voluntary ethical commitments are fragile -- they persist only as long as they are compatible with the organization's primary objectives. An autonomous business optimizing for profit will treat ethical constraints the same way: as constraints to be satisfied when possible and circumvented when not.

## Synthesis: What Framework for Autonomous Businesses?

No single ethical framework is adequate to the challenge posed by autonomous businesses. Consequentialism provides the right focus on outcomes but ignores distribution and rights. Deontology takes rights seriously but risks prohibiting beneficial innovations. Virtue ethics centers human flourishing but provides limited actionable guidance.

The institutional frameworks -- IEEE EAD, Asilomar, EU Ethics Guidelines, corporate RAI -- attempt to synthesize these traditions into practical guidance. Their common elements suggest an emerging consensus:

- Human oversight must be preserved for consequential decisions.
- The benefits of autonomous operation must be broadly distributed.
- Transparency and accountability must be built into the architecture.
- Fairness and non-discrimination are non-negotiable constraints.
- Environmental and social impact must be assessed and managed.

This consensus is thin. It does not resolve the hard trade-offs -- efficiency vs. employment, autonomy vs. oversight, innovation vs. precaution. But it provides a starting point for governance frameworks that are more specific than philosophical principles and more principled than ad hoc regulation.

The challenge ahead is translating this thin consensus into thick institutions: laws, standards, enforcement mechanisms, and cultural norms that actually constrain how autonomous businesses operate. The frameworks exist. The institutions lag behind.

---

### References

[1] John Stuart Mill, *Utilitarianism* (1863). Modern treatment: Peter Singer, *Practical Ethics*, 3rd ed. (Cambridge University Press, 2011).

[2] Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785). Modern treatment: Christine M. Korsgaard, *Creating the Kingdom of Ends* (Cambridge University Press, 1996).

[3] Aristotle, *Nicomachean Ethics*. Modern treatment: Alasdair MacIntyre, *After Virtue*, 3rd ed. (University of Notre Dame Press, 2007).

[4] IEEE, *Ethically Aligned Design: A Vision for Prioritizing Human Well-being with Autonomous and Intelligent Systems*, First Edition (2019).

[5] Future of Life Institute, "Asilomar AI Principles," January 2017.

[6] European Commission High-Level Expert Group on Artificial Intelligence, "Ethics Guidelines for Trustworthy AI," April 2019.

[7] Brent Mittelstadt, "Principles Alone Cannot Guarantee Ethical AI," *Nature Machine Intelligence* 1 (2019): 501-507.
