---
title: "Organisation Models for Autonomous Business"
description: "DAOs, zero-member LLCs, network states, and the question of who owns an autonomous business"
weight: 4
linkTitle: "Organisation Models"
type: docs
tags:
  - Research
categories:
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: c-multiagent-systems
next: e-protocols
---

## The Ownership Question

Imagine an AI system that identifies a market opportunity, incorporates a business entity, hires contractors, delivers a product, collects revenue, and reinvests profits -- all without human direction. Who owns this business? Who is liable when something goes wrong? Who pays taxes on the revenue?

These are not hypothetical questions for a distant future. They are practical problems that existing organizational models struggle to answer. This section examines the structures that attempt to bridge the gap between traditional corporate law and the reality of increasingly autonomous business operations.

## The Zero-Member LLC: Bayern's Radical Insight

In 2015, Shyam Sundar Bayern published a paper that should have caused more alarm in legal circles than it did [1]. His argument was straightforward: under existing US law, particularly the flexible LLC statutes of states like Delaware, it is possible to create a company with no human members.

The mechanism exploits a chain of legal provisions:

1. Most LLC statutes allow another entity (not just a natural person) to serve as a member
2. An LLC can be managed by a non-member manager
3. If the sole member of an LLC is itself an LLC, and that LLC's sole member is another LLC, you can create a chain with no natural person at the end
4. Alternatively, an LLC's operating agreement can designate a software system as the manager, with no members required after initial formation

Bayern was not advocating for zero-member LLCs. He was pointing out that existing law does not clearly prohibit them, and that this gap would become practically significant as AI systems became capable of managing business operations.

The legal community's response has been mixed. Some scholars argue that LLC statutes implicitly require human participation through concepts like fiduciary duty and good faith [2]. Others note that Bayern's reading of the statutes is technically correct, even if it was not what legislators intended. The gap remains unresolved, which means the first serious attempt to create a zero-member LLC will likely trigger a legal battle that shapes the field for decades.

## DAOs: Decentralized Governance in Practice

Decentralized Autonomous Organizations offer a different answer to the ownership question: distribute it among token holders, encode governance rules in smart contracts, and let the collective make decisions through voting [3].

### The Promise

The theoretical appeal of DAOs is significant:

- **Transparent governance**: All decisions are recorded on-chain, creating an auditable history
- **Democratic participation**: Token holders vote on proposals proportional to their stake
- **Programmable rules**: Smart contracts enforce governance automatically -- no need to trust that officers will follow bylaws
- **Global participation**: Anyone with tokens can participate regardless of jurisdiction

### The Reality

Practical experience with DAOs has revealed several persistent challenges:

**Voter apathy**: Most DAO governance suffers from low participation rates. MakerDAO, one of the most established DAOs, typically sees less than 10% of token holders voting on proposals [4]. This concentrates effective decision-making in the hands of a small number of large token holders -- reproducing the very concentration of power that DAOs were designed to prevent.

**Plutocratic governance**: One-token-one-vote means wealthy participants dominate. Quadratic voting and delegation mechanisms have been proposed as solutions, but none has achieved widespread adoption.

**Smart contract rigidity**: Governance rules encoded in smart contracts are difficult to update. When circumstances change in ways the original contract did not anticipate, the organization faces a choice between a complex on-chain upgrade process and working around its own rules.

**Legal uncertainty**: Without legal personality, a DAO cannot own property, enter contracts, or limit the liability of its participants in most jurisdictions. This creates real problems -- when The DAO lost $60 million to a smart contract exploit in 2016, there was no legal entity to sue, no insurance to claim, and no established process for recovering funds [5].

### Wyoming DAO LLC

Wyoming addressed the legal personality problem in 2021 by enacting legislation allowing DAOs to register as LLCs [6]. A Wyoming DAO LLC has:

- Legal personality (can own property, enter contracts, sue and be sued)
- Limited liability for members
- The ability to encode governance rules in smart contracts rather than traditional operating agreements
- A requirement for at least one algorithmically managed function

This was a landmark -- the first time a US jurisdiction explicitly recognized that business governance could be partially algorithmic. The limitation is that Wyoming DAO LLCs still require human members who bear ultimate responsibility for the organization's actions. They decentralize governance but do not eliminate the need for human accountability.

### Marshall Islands MIDAO

The Republic of the Marshall Islands went further with the MIDAO (Marshall Islands Decentralized Autonomous Organization) Act, which provides a framework specifically designed for DAO incorporation with international recognition [7]. MIDAO entities can be formed entirely through smart contract governance, with no requirement for traditional officers or directors.

The practical value of MIDAO registration depends on international recognition. A MIDAO entity can enter contracts in jurisdictions that recognize Marshall Islands corporate law, but enforcement across borders remains untested in court.

## Network States: Organizational Emergence at Scale

Balaji Srinivasan's "network state" concept pushes organizational emergence to its logical extreme: a community that begins as an online social network, develops shared values and governance, acquires physical territory, and eventually gains diplomatic recognition as a sovereign entity [8].

The concept is relevant to autonomous business because it describes a pathway for emergent organizations to acquire the legal and territorial standing that traditional governance requires. A network state is not an autonomous business, but it could provide the jurisdictional framework within which autonomous businesses operate.

Several projects are experimenting with network state concepts:

- **Prospera** in Honduras operates as a semi-autonomous economic zone with its own regulatory framework
- **Praxis** is attempting to build a network state focused on technology and innovation
- **Cabin** operates as a decentralized city with physical locations coordinated through DAO governance

None has achieved diplomatic recognition, and the concept faces obvious challenges -- existing nation-states have limited enthusiasm for recognizing digital upstarts as sovereign equals. But the experiments illustrate the range of organizational models being explored.

## Progressive Decentralization

A more pragmatic approach, and one with real traction in the startup ecosystem, is progressive decentralization: beginning as a traditional company and gradually transitioning decision-making authority to algorithmic systems and distributed governance [9].

The model typically follows stages:

1. **Traditional startup**: Human founders, conventional corporate structure, centralized decision-making
2. **Tokenization**: Issue governance tokens, begin involving community in non-critical decisions
3. **Operational automation**: Deploy AI agents for routine business functions, maintain human oversight for strategic decisions
4. **Governance distribution**: Transfer increasing decision-making authority to token-holder voting and algorithmic governance
5. **Full autonomy** (theoretical): Complete transition to autonomous operation with no human management

Most projects claiming to follow this model are somewhere between stages 2 and 3. No major project has successfully completed stage 4, and stage 5 remains theoretical.

The value of progressive decentralization is not that it provides a guaranteed path to autonomous business but that it provides a framework for incremental progress. Each stage can be evaluated independently, and the transition can be paused or reversed if problems emerge.

## Delaware Series LLC: The Compartmentalization Strategy

Delaware's Series LLC structure deserves mention as a creative tool for autonomous business architectures [10]. A Series LLC can create separate "series" within a single legal entity, each with its own assets, liabilities, and members. Liability is compartmentalized -- the debts of one series do not affect another.

For autonomous business, this enables a model where:

- Each AI agent or agent team operates as a separate series
- Revenue and expenses are tracked per-series
- A failing agent can be "shut down" (series dissolved) without affecting others
- New agents can be "hired" (new series created) without restructuring the parent entity

This maps naturally to multi-agent system architectures where specialized agents handle different business functions. The Series LLC provides legal compartmentalization that mirrors the technical compartmentalization of the agent system.

## Mapping Models to the Emergence Spectrum

Using the Theater-Illusion-Emergence framework from the introduction:

**Theater**: Projects that claim to be DAOs or autonomous organizations but have governance tokens with no actual decision-making power, or "AI-managed" entities where a human quietly makes all decisions.

**Illusion**: Wyoming DAO LLCs and similar structures where governance is partially algorithmic but human members retain ultimate authority and make most substantive decisions. The structure enables autonomy that the practice does not yet deliver.

**Emergence**: No existing organizational model has fully demonstrated genuine emergence. The closest examples are multi-agent systems that occasionally exhibit autonomous problem-solving within traditional corporate structures -- the organizational model has not caught up with the technical capability.

The gap between available organizational models and the technical capability of AI agents is one of the central tensions in autonomous business. The agents can reason, plan, and act. The legal structures cannot yet accommodate an entity where no human is ultimately responsible. Resolving this tension is the work of the next decade.

## References

[1] Bayern, S. (2015). "The Implications of Modern Business-Entity Law for the Regulation of Autonomous Systems." Stanford Technology Law Review, 19(1), 93-112.

[2] LoPucki, L. M. (2018). "Algorithmic Entities." Washington University Law Review, 95(4), 887-953.

[3] Buterin, V. (2014). "DAOs, DACs, DAs and More: An Incomplete Terminology Guide." Ethereum Blog.

[4] Barbereau, T. et al. (2023). "DeFi, Not So Decentralized: The Measured Distribution of Voting Rights." Hawaii International Conference on System Sciences (HICSS).

[5] Siegel, D. (2016). "Understanding The DAO Attack." CoinDesk.

[6] Wyoming Legislature. (2021). SF0038 - Decentralized Autonomous Organizations. Session Laws, Chapter 96.

[7] Republic of the Marshall Islands. (2022). "Decentralized Autonomous Organization Act."

[8] Srinivasan, B. (2022). *The Network State: How To Start a New Country*. 1729.

[9] Walden, J. (2020). "Progressive Decentralization: A Playbook for Building Crypto Applications." a16z Crypto Blog.

[10] Delaware Code, Title 6, Chapter 18 - Delaware Limited Liability Company Act, Subchapter XII - Series.
