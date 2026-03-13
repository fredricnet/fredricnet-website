---
title: "Organisation Models"
description: "Legal structures for autonomous businesses — DAOs, zero-member LLCs, network states, and the jurisdictions racing to accommodate AI-operated entities."
weight: 4
linkTitle: "Organisation"
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

Here is the uncomfortable question at the heart of autonomous businesses: can a company exist without any humans in it?

The technical answer is increasingly "yes." The legal answer is "it depends on where you incorporate." And the philosophical answer opens a can of worms that will keep legal scholars busy for decades. But the practical reality is that several jurisdictions already offer legal structures that can accommodate businesses operated entirely -- or almost entirely -- by AI agents. Understanding these structures is essential for anyone serious about building autonomous businesses, because the legal wrapper determines everything from liability to tax treatment to the ability to open a bank account.

<!--more-->

## The Zero-Member LLC

The most provocative legal concept in this space comes from Shawn Bayern's work on autonomous entities operating through LLCs. Bayern demonstrated that under existing LLC law in most US states, it is possible to create an LLC, have the sole member withdraw after delegating operational authority to an algorithmic system, and end up with a legally valid entity that has no human members [1].

This is not a loophole. It is a consequence of how LLC statutes are written. LLCs are creatures of contract -- their operating agreements define how they function, and those agreements can delegate management authority to non-human systems. When the last human member withdraws, the LLC does not automatically dissolve (in most states), and the operating agreement's provisions for algorithmic management remain in effect.

Bayern's insight was that you do not need new legislation to create AI-operated legal entities. The existing infrastructure is sufficient, if you are willing to think creatively about operating agreements. The LLC becomes a legal shell animated by software rather than by humans.

The practical implications are significant. A zero-member LLC can hold property, enter contracts, maintain bank accounts, and sue or be sued. It provides limited liability, which means the AI system's errors do not automatically expose any human to unlimited financial risk. And it can operate indefinitely, without the biological constraints that limit human-operated businesses.

The obvious concern is accountability. If an AI-operated LLC causes harm, who is responsible? The LLC itself has assets that can be attached, but there is no human to hold personally liable (absent piercing the corporate veil). This is not fundamentally different from any other limited liability entity -- that is what "limited liability" means -- but it feels different when there is no human in the loop at all.

## Wyoming DAO LLC

Wyoming was the first US state to pass legislation specifically addressing decentralized autonomous organizations, with its DAO LLC statute taking effect in 2021 [2]. The law allows DAOs to register as LLCs, giving them the benefits of legal personality while preserving their decentralized governance structure.

Under the Wyoming model, a DAO LLC can be either "member-managed" or "algorithmically managed." The latter category is particularly relevant for autonomous businesses -- it explicitly contemplates entities where smart contracts, rather than human votes, drive operational decisions.

The statute requires a registered agent in Wyoming (who must be human or a registered agent service), and it imposes some disclosure requirements about the smart contracts governing the DAO. But it does not require human members or human managers. An algorithmically managed DAO LLC can operate autonomously, within the bounds of its smart contract governance.

Wyoming's approach has been influential but also criticized. The statute was written primarily with blockchain-based DAOs in mind, and some of its provisions (like requirements for on-chain governance) are awkward fits for AI agent-based systems that may not use blockchain at all. Nevertheless, it established the precedent that algorithmically governed entities can have legal standing, and that precedent matters.

## Marshall Islands MIDAO

The Republic of the Marshall Islands went further than Wyoming with its MIDAO (Marshall Islands DAO) Act, enacted in 2022 [3]. The legislation was developed in collaboration with the MIDAO Directory Foundation and creates a framework specifically designed for decentralized autonomous organizations operating internationally.

The Marshall Islands framework is notable for several reasons. First, it does not require any connection to blockchain -- it is technology-neutral, which makes it more naturally applicable to AI agent-based organizations. Second, it provides a clear legal personality to DAOs, including the ability to enter contracts, hold property, and limit member liability. Third, it is designed for international operations, recognizing that autonomous entities are unlikely to confine themselves to a single jurisdiction.

The MIDAO structure has attracted attention from projects building truly autonomous organizations precisely because of this technology neutrality. An AI-operated business can incorporate as a MIDAO entity without needing to force-fit its architecture into blockchain-centric requirements.

## Delaware Series LLC

Delaware's Series LLC is not specifically designed for autonomous businesses, but it has properties that make it unusually well-suited to multi-agent systems. A Series LLC allows a single LLC to create multiple internal "series," each with its own assets, liabilities, members, and managers -- and crucially, each series is legally shielded from the liabilities of the others [4].

For an autonomous business running multiple AI agents, each handling different business functions, the Series LLC structure provides a natural mapping. Each agent (or group of agents handling a specific function) can operate within its own series, with its own assets and its own liability boundary. If the sales agent makes a catastrophic error, the damage is contained within the sales series and does not expose the assets of the finance or operations series.

This is essentially corporate-level fault isolation -- the organizational equivalent of the fault isolation that multi-agent architectures provide at the technical level. The alignment between technical architecture and legal structure is not coincidental. Both are solving the same problem: how to contain failures in complex systems with multiple autonomous components.

## Network States and Balaji's Vision

Balaji Srinivasan's concept of the "network state" pushes organizational models into genuinely uncharted territory [5]. A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition. It is, in essence, a country that starts as a startup.

The network state concept is relevant to autonomous businesses not because AI agents are going to found countries (probably), but because it challenges the assumption that legal entities must exist within the framework of a single nation-state. If autonomous businesses operate globally, transact in cryptocurrencies, and have no physical headquarters, which jurisdiction's laws govern them?

Srinivasan's answer is that they create their own governance frameworks -- network states or network unions -- that eventually gain recognition through demonstrated competence and scale. This is speculative, but it points toward a future where autonomous businesses might exist in a legal space that does not map neatly onto any current jurisdiction.

The practical relevance today is more modest: network state thinking informs how autonomous businesses might structure their governance when existing jurisdictional categories do not fit. A community of autonomous business operators might form a network union that lobbies for favorable regulation, establishes shared standards, and provides mutual assurance -- a trade association for entities that have no human employees.

## Progressive Decentralization

In practice, most autonomous businesses will not start as fully autonomous entities. They will follow a path of progressive decentralization -- starting with heavy human oversight and gradually reducing it as the AI systems demonstrate reliability [6].

This pattern is already well-established in the crypto world, where projects typically launch with a core team making all decisions, then progressively transfer authority to token holders and smart contracts. The same approach applies to AI-operated businesses:

**Phase 1: Human-operated, AI-assisted.** Humans make all decisions, AI agents handle execution. Standard LLC or corporation structure. This is where most companies using AI tools are today.

**Phase 2: Human-supervised, AI-operated.** AI agents make routine decisions, humans handle exceptions and strategy. Standard LLC with algorithmic management provisions in the operating agreement. A growing number of startups are reaching this stage.

**Phase 3: Human-governed, AI-autonomous.** AI agents handle all operations, humans retain governance authority (board seats, veto power). DAO LLC or similar structure. A handful of experimental projects operate here.

**Phase 4: Fully autonomous.** No human involvement in operations or governance. Zero-member LLC, MIDAO, or novel legal structure. This remains largely theoretical, with a few provocative demonstrations.

Most organizations will settle somewhere in Phase 2 or 3 for the foreseeable future. Full autonomy (Phase 4) is technically achievable but raises accountability questions that current legal frameworks handle poorly. The smart approach is to push toward autonomy incrementally, building trust and legal precedent as you go.

## The Jurisdictional Race

What we are witnessing is a jurisdictional competition for autonomous business incorporation, similar to the competition for corporate charters that Delaware won in the 20th century. Wyoming, the Marshall Islands, Switzerland, Singapore, and several other jurisdictions are all positioning themselves as friendly homes for algorithmically governed entities.

The winner of this race will likely be the jurisdiction that best balances three concerns: legal clarity (so autonomous businesses know what rules apply), flexibility (so the legal framework does not become obsolete as technology evolves), and credibility (so contracts with autonomous entities are recognized and enforceable internationally).

This last point -- credibility -- is where many crypto-native jurisdictions stumble. Incorporating a DAO in a small Pacific island nation is easy. Getting a European bank to recognize that entity's contractual authority is hard. The jurisdictions that will ultimately matter are not necessarily the most permissive but the ones whose legal frameworks are respected by courts and financial institutions worldwide.

## Mapping Structure to Architecture

The organizational models discussed here are not just legal abstractions. They interact directly with the technical architecture of multi-agent systems:

| Technical Pattern | Legal Structure | Why It Fits |
|---|---|---|
| Single agent, single function | Standard LLC | Simple mapping of one agent to one entity |
| Multi-agent, role-based (CrewAI) | Series LLC | Each role gets its own liability boundary |
| Multi-agent, consensus-based | DAO LLC | Governance through algorithmic agreement |
| Agent ecosystem, cross-entity | MIDAO + A2A Protocol | International operations, technology-neutral |
| Self-replicating agents (SPAWN) | Progressive decentralization | Start human-governed, evolve toward autonomy |

The most capable autonomous businesses will be those that align their legal structure with their technical architecture, so that the liability boundaries, governance mechanisms, and operational authorities in the legal domain mirror the agent boundaries, coordination protocols, and action spaces in the technical domain.

This is not just an academic exercise. The legal structure an autonomous business chooses determines whether it can open bank accounts, whether its contracts are enforceable, whether it can hold intellectual property, and whether it can interact with the traditional business world. Getting the organizational model right is as important as getting the technology right.

## References

[1] S. Bayern, "The Implications of Modern Business-Entity Law for the Regulation of Autonomous Systems," *Stanford Technology Law Review*, vol. 19, pp. 93-112, 2015.

[2] Wyoming Legislature, "SF0038 - Decentralized Autonomous Organizations," 2021. Available: https://www.wyoleg.gov/Legislation/2021/SF0038

[3] MIDAO Directory Foundation, "Marshall Islands DAO Act," 2022. Available: https://www.midao.org

[4] Delaware Code, Title 6, Chapter 18, Subchapter IX -- Protected Series.

[5] B. Srinivasan, *The Network State: How to Start a New Country*. 1729, 2022.

[6] J. Walden, "Progressive Decentralization: A Playbook for Building Crypto Applications," a16z Crypto, 2020.

[7] Rodrigues, U. R. (2023). "DAOs and the Securities Laws." University of Georgia School of Law Research Paper.

[8] Werbach, K. & Cornell, N. (2017). "Contracts Ex Machina." Duke Law Journal, 67, 313-382.
