---
title: "Liability Frameworks"
description: "Who pays when an autonomous business causes harm? The accountability vacuum, competing liability models, and insurance as a potential solution."
weight: 4
linkTitle: "Liability"
type: docs
tags:
  - liability
  - insurance
  - accountability
categories:
  - research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: c-eu-ai-act
next: e-compliance
---

## The Accountability Vacuum

When a traditional business causes harm, the liability chain is clear: the company is liable, its directors and officers may be personally liable, its insurer pays out, and if the company is judgment-proof, injured parties can pursue individuals up the chain. The system is imperfect, but it works because every link in the chain is a human or an entity controlled by humans.

An autonomous business breaks this chain. If an AI system makes a decision that causes harm -- a bad investment recommendation, a discriminatory hiring decision, a product defect -- who is liable? The AI cannot be sued in its own name (usually). The developers may have released the code years ago. The token holders may number in the thousands and be pseudonymous. The legal wrapper, if one exists, may have no assets beyond what the AI controls.

This is the accountability vacuum, and it is the single most significant legal obstacle to autonomous businesses [1].

## Product Liability vs. Negligence

Traditional tort law offers two primary frameworks for assigning liability, and neither maps cleanly onto autonomous businesses.

**Product liability** holds manufacturers strictly liable for defective products, regardless of fault. If a toaster starts a fire, the manufacturer pays -- no need to prove negligence. Could an autonomous business's decisions be treated as "products"? Some scholars argue yes: the outputs of an AI system are products in the same way that a manufactured good is a product, and the same strict liability principles should apply [2].

The problem is identifying the manufacturer. For a traditional AI product, the manufacturer is the company that built and sold the system. For an autonomous business built on open-source models, fine-tuned by one party, deployed by another, and governed by a DAO, the manufacturing chain is diffuse to the point of meaninglessness.

**Negligence** requires proving that someone failed to exercise reasonable care. This is more flexible than strict liability but requires identifying a specific party whose conduct fell below the applicable standard. For an autonomous business, the relevant question is: whose negligence caused the harm? The original developers, for writing flawed code? The governance token holders, for failing to implement safety measures? The AI itself, for making a bad decision?

The negligence framework struggles with AI systems because the concept of "reasonable care" was developed for human actors making human-scale decisions. An AI system processing thousands of decisions per second does not exercise "care" in any recognizable sense. It executes a function. Whether that function was designed with adequate safeguards is a question about the system's creators, not the system itself.

## Vicarious Liability

Vicarious liability -- holding one party responsible for the actions of another -- offers a more promising framework. In traditional employment law, employers are vicariously liable for the actions of their employees taken within the scope of employment. Could the same principle apply to autonomous businesses and their AI systems?

The analogy has appeal. If an autonomous business deploys an AI agent that causes harm while performing its designated function, the business entity (through its legal wrapper) could be vicariously liable, just as an employer would be liable for an employee's on-the-job negligence [3].

But vicarious liability requires a relationship -- employer-employee, principal-agent -- that does not obviously exist between an autonomous business and its own AI components. The AI is not an employee; it is the business. Holding the entity vicariously liable for its own actions is circular. It is like asking whether a person can be vicariously liable for their own arm.

## Strict Liability: The Emerging Consensus

A growing body of legal scholarship argues that strict liability -- liability without fault -- is the most appropriate framework for autonomous AI systems. The logic follows the precedent set by abnormally dangerous activities (like blasting or keeping wild animals), where liability is imposed not because anyone was negligent but because the activity itself creates risks that the actor is in the best position to manage [4].

The Harvard Journal of Law and Technology has published several influential pieces arguing for this position. Vladeck's work on autonomous vehicles established the analytical framework: when an AI system operates with sufficient autonomy that traditional notions of fault become meaningless, strict liability ensures that someone bears the cost of harm, creating incentives for safety without requiring the impossible task of proving negligence in an algorithmic black box [5].

For autonomous businesses, strict liability would mean that the entity (through its legal wrapper) is liable for any harm caused by its operations, regardless of whether anyone was "at fault." This has the virtue of simplicity and creates clear incentives: if you run an autonomous business, you pay for the damage it causes.

The objection is equally clear: strict liability without adequate insurance or capitalization means that the entity is judgment-proof. A DAO LLC with minimal assets and strict liability for potentially enormous harms is not a meaningful accountability mechanism. It is a shell.

## The MIT Computational Law Report

The MIT Computational Law Report has been a leading venue for scholarship on these questions, and its contributions deserve specific attention. Zev Eigen and colleagues have argued for a "computational liability" framework that embeds liability rules directly into the design of autonomous systems [6].

The proposal is elegant: rather than applying liability after the fact through litigation, build liability mechanisms into the system itself. An autonomous business would be required to maintain insurance, escrow funds against potential liabilities, and automatically compensate harmed parties through pre-programmed mechanisms. Smart contracts would enforce these requirements without human intervention.

This approach aligns liability with the autonomous nature of the business. If the business operates autonomously, its liability mechanisms should too. The challenge, of course, is calibrating these mechanisms. How much insurance is enough? How do you price risk for a novel business model with no actuarial history? Who decides when a harm has occurred and compensation is owed?

## Insurance as the Solution

Insurance may be the most practical answer to the liability problem, and several startups are attempting to build this market.

The AIUC (Artificial Intelligence Underwriting Consortium) model, proposed by various insurance-tech ventures, envisions a specialized insurance market for AI-related risks [7]. The core insight is that traditional liability frameworks matter less than the ability to pay claims. If an autonomous business maintains adequate insurance, the question of whether liability is strict, negligence-based, or vicarious becomes secondary. The insurer pays the claim and adjusts premiums based on the business's risk profile.

This approach has precedents. We do not spend much time debating the liability framework for automobile accidents because mandatory insurance ensures that injured parties are compensated regardless of the doctrinal basis for liability. The same principle could apply to autonomous businesses.

The practical obstacles are significant:

- **Actuarial data.** Insurance pricing requires historical data on loss frequency and severity. Autonomous businesses are too new to have meaningful loss histories.
- **Moral hazard.** If the autonomous business knows it is insured, it may take greater risks -- and unlike a human actor, it cannot be deterred by the threat of personal consequences.
- **Coverage limits.** The potential harm from an autonomous business operating at scale could exceed any reasonable insurance limit. What happens when a trading algorithm causes a flash crash that wipes out billions in value?
- **Underwriting.** Who assesses the risk of an autonomous business? Traditional underwriting relies on inspecting the business, interviewing management, and reviewing financials. These processes assume human interlocutors.

Despite these challenges, insurance is probably where the market ends up. The alternative -- leaving liability to be sorted out through litigation on a case-by-case basis -- is more expensive, slower, and less predictable for everyone involved.

## The Path Forward

The liability question for autonomous businesses will not be resolved through a single doctrinal framework. What is more likely is a layered approach:

1. **Mandatory insurance** or bonding requirements for autonomous business entities, analogous to requirements for financial institutions or contractors.
2. **Strict liability** for harms caused by autonomous operations, ensuring that the entity bears the cost of the risks it creates.
3. **Capitalization requirements** for legal wrappers, preventing the creation of judgment-proof shells that externalize risk.
4. **Computational liability mechanisms** embedded in the business's own smart contracts, providing automatic compensation for certain categories of harm.

None of these elements is sufficient on its own. Together, they might create a liability framework that is robust enough to protect the public while permissive enough to allow autonomous businesses to operate. Whether legislatures and courts will converge on this approach, or on something entirely different, remains to be seen.

---

### References

[1] Ryan Abbott, *The Reasonable Robot: Artificial Intelligence and the Law* (Cambridge University Press, 2020).

[2] David C. Vladeck, "Machines without Principals: Liability Rules and Artificial Intelligence," *Washington Law Review* 89 (2014): 117-150.

[3] F. Patrick Hubbard, "'Sophisticated Robots': Balancing Liability, Regulation, and Innovation," *Florida Law Review* 66 (2014): 1803-1872.

[4] Restatement (Third) of Torts: Liability for Physical and Emotional Harm, Section 20 (Abnormally Dangerous Activities).

[5] David C. Vladeck, "Machines without Principals."

[6] MIT Computational Law Report, various contributions on algorithmic liability, 2020-2025.

[7] Matthew Scherer, "Regulating Artificial Intelligence Systems: Risks, Challenges, Competencies, and Strategies," *Harvard Journal of Law & Technology* 29, no. 2 (2016): 353-400.
