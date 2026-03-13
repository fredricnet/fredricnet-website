---
title: "The Accountability Gap"
description: "How autonomous businesses fragment the chain of responsibility, and what existing cases -- from autonomous vehicles to flash crashes -- tell us about the problem."
weight: 1
linkTitle: "Accountability"
type: docs
tags:
  - accountability
  - responsibility
  - autonomous-vehicles
categories:
  - research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: 04-ethical
next: b-alignment
---

## The Problem of Many Hands

In 1984, the philosopher Dennis Thompson coined the term "the problem of many hands" to describe situations where responsibility for an outcome is distributed among so many actors that no one is effectively accountable [1]. He was writing about government bureaucracies, but the concept applies with devastating precision to autonomous businesses.

Consider a simple chain: an AI model is trained by one team, fine-tuned by another, deployed as a service by a third, integrated into an autonomous business by a fourth (or by no one -- by the code itself), and governed by thousands of pseudonymous token holders. When this system causes harm, who is responsible?

The honest answer is: everyone a little, no one enough. Each participant in the chain can plausibly argue that they contributed only a small piece of the whole, that they could not have foreseen the harmful outcome, and that the real fault lies elsewhere. This is the accountability gap, and it is not a bug in the system. It is a structural feature of distributed, autonomous architectures.

## Lessons from Autonomous Vehicles

The autonomous vehicle industry has been grappling with accountability questions for over a decade, and its experience is instructive for autonomous businesses.

When a self-driving car kills a pedestrian -- as happened in Tempe, Arizona in 2018 when an Uber autonomous vehicle struck and killed Elaine Herzberg -- the accountability question immediately fragments [2]. Was the fault in the software that failed to classify the pedestrian? In the safety driver who was watching a video on her phone? In Uber's management, which had disabled certain safety features to achieve smoother rides? In the regulatory framework that permitted autonomous vehicle testing on public roads?

The answer, as determined through multiple investigations, was "all of the above." But "all of the above" is not a satisfying accountability mechanism. The safety driver was charged with negligent homicide. Uber settled with the family. The NTSB issued recommendations. And the underlying systemic question -- who is accountable when an autonomous system operating within its design parameters causes harm -- remained unresolved.

For autonomous businesses, the AV case is a preview. When harm occurs, the instinct will be to find a human to blame. But as systems become more autonomous, the humans involved become more peripheral to the actual decision that caused the harm. The safety driver in Tempe was not driving the car. She was supposed to be watching an autonomous system drive the car. The accountability framework treated her as if she were driving, because the law did not have a framework for anything else.

## Flash Crashes and Algorithmic Accountability

Financial markets provide another set of accountability case studies. The 2010 Flash Crash, in which the Dow Jones Industrial Average plummeted nearly 1,000 points in minutes before recovering, was triggered by a confluence of algorithmic trading systems interacting in unexpected ways [3].

The SEC eventually identified a single trader, Navinder Singh Sarao, whose "spoofing" activity contributed to the crash. But the crash was not caused by Sarao alone. It was caused by the interaction of hundreds of autonomous trading algorithms, each operating within its individual parameters, collectively producing an outcome that no one designed or intended.

This is the "emergent behavior" problem: autonomous systems interacting with each other produce outcomes that cannot be predicted from the behavior of any individual system. For autonomous businesses operating in markets -- any markets, not just financial ones -- emergent behavior creates accountability challenges that are qualitatively different from those posed by individual systems.

Who is accountable when ten autonomous businesses, each acting rationally within its own parameters, collectively crash a market, corner a supply chain, or drive a competitor into bankruptcy? The individual businesses did nothing wrong. The collective outcome is harmful. Current accountability frameworks have no answer for this.

## The Fragmentation of Responsibility

The accountability gap in autonomous businesses manifests at multiple levels:

**Design responsibility.** The developers who built the AI models are responsible for the system's capabilities and limitations. But they cannot be responsible for every use of their models, especially when those models are open-source and freely available.

**Deployment responsibility.** The parties who deploy the AI system in a business context are responsible for how it is used. But in an autonomous business, "deployment" may be automated -- one AI system deploying another, with no human making the specific decision to deploy.

**Governance responsibility.** Token holders or DAO members who vote on governance proposals bear some responsibility for the business's direction. But governance participation is often low, votes are often uninformed, and the connection between a governance vote and a specific harmful outcome is usually too attenuated to support meaningful accountability.

**Operational responsibility.** The AI system itself makes operational decisions. But AI systems cannot bear moral responsibility in any meaningful sense. They do not have intentions, moral commitments, or the capacity for remorse. Holding an AI system "accountable" is like holding a weather system accountable for a flood.

The result is that responsibility is distributed across all of these levels, but concentrated at none. Each level has a plausible claim to limited responsibility. No level bears full accountability. And the harmed party is left navigating a maze of partial responsibilities that may not add up to adequate redress.

## The Moral Dimension

The accountability gap is not just a practical problem. It is a moral one.

Accountability serves multiple functions in a society. It provides redress to injured parties. It deters future harmful conduct. It expresses social values about what matters and who matters. And it maintains trust -- trust that the powerful will be held to account, that the vulnerable will be protected, that the system is not rigged.

When accountability fails, all of these functions fail with it. If an autonomous business can cause harm and no one is held responsible, the social contract frays. People lose trust not just in the specific business but in the entire system that permitted it to operate without accountability.

This is why the accountability gap is the most important ethical challenge facing autonomous businesses. Efficiency gains, cost reductions, and scalability improvements are meaningless if the system that produces them is perceived as -- or actually is -- unaccountable.

## Toward Solutions

Several approaches to closing the accountability gap have been proposed:

**Mandatory human principals.** Require every autonomous business to designate a human or set of humans who bear ultimate responsibility for the system's actions, regardless of how autonomous the system actually is [4]. This preserves the accountability chain but may be fictitious -- the designated human may have no real ability to control the system.

**Distributed accountability.** Accept that responsibility is shared across multiple parties and develop frameworks for allocating it proportionally [5]. This is more honest but harder to implement -- how do you determine each party's share of responsibility?

**Insurance-based accountability.** Shift the focus from individual accountability to collective risk management through mandatory insurance. The insurer pays for harm, premiums create incentives for safety, and the question of individual fault becomes secondary.

**Algorithmic accountability.** Require autonomous systems to maintain auditable logs of all decisions, with sufficient detail to reconstruct the reasoning process. This does not assign blame to a person, but it provides the transparency needed for after-the-fact assessment.

None of these approaches is fully satisfying. The honest assessment is that we do not yet have an accountability framework adequate to the challenge posed by autonomous businesses. Developing one will require not just legal innovation but a willingness to rethink fundamental assumptions about responsibility, agency, and moral standing.

---

### References

[1] Dennis F. Thompson, "Moral Responsibility of Public Officials: The Problem of Many Hands," *American Political Science Review* 74, no. 4 (1980): 905-916.

[2] National Transportation Safety Board, "Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian," NTSB/HAR-19/03, November 2019.

[3] U.S. Commodity Futures Trading Commission and Securities and Exchange Commission, "Findings Regarding the Market Events of May 6, 2010," September 30, 2010.

[4] Jack M. Balkin, "The Path of Robotics Law," *California Law Review Circuit* 6 (2015): 45-60.

[5] Helen Nissenbaum, "Accountability in a Computerized Society," *Science and Engineering Ethics* 2, no. 1 (1996): 25-42.
