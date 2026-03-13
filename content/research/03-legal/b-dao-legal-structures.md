---
title: "DAO Legal Structures"
description: "How Wyoming, the Marshall Islands, Vermont, Colorado, and other jurisdictions are creating legal wrappers for decentralized autonomous organizations."
weight: 2
linkTitle: "DAO Legal Structures"
type: docs
tags:
  - dao
  - legal-structures
  - wyoming
  - regulation
categories:
  - research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: a-legal-personhood
next: c-eu-ai-act
---

## The Legal Wrapper Problem

A DAO without a legal wrapper is, in most jurisdictions, a general partnership by default. This is catastrophic. In a general partnership, every member is personally liable for the debts and obligations of the entire organization. For a DAO with thousands of anonymous token holders, this means unlimited liability distributed across people who may not even know they are partners [1].

The legal wrapper concept emerged as the pragmatic solution: take an existing or new legal entity type and stretch it around a DAO's on-chain governance, giving the organization a legal identity without forcing it to abandon decentralization entirely. The results have been uneven, creative, and occasionally bizarre.

## Wyoming: The First Mover

Wyoming has been the most aggressive US state in crypto-friendly legislation, and its 2021 DAO LLC law was the first of its kind anywhere [2]. The law allows DAOs to register as LLCs with the state, with their smart contracts serving as the operating agreement.

The key provisions are worth examining:

- A DAO can be either "member-managed" or "algorithmically managed." The latter category explicitly contemplates fully autonomous operation.
- The smart contract, or a reference to it, can serve as the operating agreement.
- Members' liability is limited to their capital contributions, just like a traditional LLC.
- The DAO must have a registered agent in Wyoming and at least one identifiable person associated with it.

That last requirement is the compromise. Wyoming was willing to recognize algorithmic governance but not fully anonymous operation. Someone has to be reachable by the legal system. For purists in the decentralization community, this was a dealbreaker. For pragmatists, it was a reasonable trade.

The law has real limitations. It does not resolve how smart contract bugs interact with legal obligations. If the code says one thing and a court decides it should say another, which governs? The statute is silent on this, and the case law has not yet developed to fill the gap.

Despite these issues, Wyoming's DAO LLC has been widely adopted. It demonstrated that a state legislature could engage seriously with decentralized governance and produce something workable, if imperfect.

## Wyoming DUNA: The 2024 Upgrade

Recognizing the limitations of the 2021 law, Wyoming passed the Decentralized Unincorporated Nonprofit Association (DUNA) Act in 2024 [3]. This was a significant evolution.

The DUNA provides a legal wrapper specifically designed for protocol DAOs -- the kind of DAOs that govern decentralized protocols rather than operating businesses. Key features include:

- No requirement that the entity operate for profit.
- Token holders are explicitly not treated as partners or members in the traditional sense.
- The entity can hold property, enter contracts, and sue or be sued.
- Governance can be fully on-chain.

The DUNA was designed with input from prominent crypto lawyers, including a16z's legal team, and it reflects a more sophisticated understanding of how DAOs actually work than the 2021 law did. The nonprofit framing was deliberate: it sidesteps many securities law concerns that have plagued for-profit DAOs.

For autonomous businesses specifically, the DUNA is interesting because it provides a lighter-weight legal shell than the LLC model. Whether a for-profit autonomous business can or should use a nonprofit wrapper is a question the market is still sorting out.

## Marshall Islands: MIDAO

The Republic of the Marshall Islands took a different approach with its MIDAO (Marshall Islands DAO) Act of 2022, creating a DAO LLC framework that is in some ways more permissive than Wyoming's [4].

The Marshall Islands' advantages are primarily jurisdictional:

- No US securities law exposure.
- More flexible governance requirements.
- Lower regulatory overhead.
- A government that has actively courted crypto projects.

The trade-offs are real. Marshall Islands entities may face difficulties opening US bank accounts, may not be recognized by all trading partners, and operate under a legal system with far less case law to draw on. For a fully on-chain autonomous business that does not need traditional banking, these may be acceptable costs.

MIDAO has attracted particular interest from DeFi protocols that want legal personality without US regulatory exposure. The framework was developed in collaboration with the MIDAO Foundation, which provides incorporation services and ongoing compliance support.

## Vermont: BBLLC

Vermont's Blockchain-Based Limited Liability Company (BBLLC), established in 2018, was actually earlier than Wyoming's DAO LLC but took a narrower approach [5]. Rather than creating a new entity type for DAOs, Vermont modified its existing LLC statute to allow LLCs to govern themselves through blockchain technology.

A BBLLC can:

- Use blockchain-based governance for member voting and management decisions.
- Store records on a blockchain rather than in traditional corporate books.
- Reference smart contracts in its operating agreement.

The BBLLC is less radical than Wyoming's approach. It assumes there will still be identifiable members and a recognizable management structure -- it just allows that structure to be implemented on-chain. For autonomous businesses, the BBLLC is useful as a data governance and record-keeping framework but does not address the harder questions about algorithmic management.

## Colorado: Cooperative Model

Colorado's approach through its cooperative association statutes offers a different angle entirely [6]. Rather than modifying LLC or corporate law, some DAO projects have organized as cooperative associations under Colorado law, with token holders as cooperative members.

The cooperative model has philosophical appeal for many in the DAO community: it emphasizes democratic governance, one-member-one-vote principles, and shared ownership. But it also has structural limitations for autonomous businesses. Cooperatives are designed for human members making collective decisions. An autonomous business with algorithmic governance fits awkwardly into a framework that assumes democratic participation.

That said, the cooperative model has one significant advantage: it clearly distinguishes member interests from investment securities, reducing exposure to securities regulation. For DAOs that have struggled with the SEC's expansive interpretation of the Howey test, this is not a trivial benefit.

## Jurisdictional Arbitrage

The proliferation of DAO-specific legislation across jurisdictions has created opportunities for what lawyers delicately call "jurisdictional arbitrage" and what critics less delicately call "regulatory shopping."

The pattern is familiar from corporate law more broadly. Delaware dominates US corporate formation not because Delaware has better courts (though it does) but because Delaware has spent decades optimizing its laws to attract corporate formations. The same dynamic is playing out in the DAO space, with Wyoming, the Marshall Islands, Switzerland, Singapore, and the Cayman Islands all competing for DAO registrations.

For autonomous businesses, jurisdictional arbitrage introduces a specific challenge: the entity may be incorporated in one jurisdiction, operate infrastructure in another, serve customers in a third, and have token holders everywhere. Which jurisdiction's laws apply to which aspects of the business? The answer is frequently "all of them, simultaneously," which is as unworkable as it sounds.

The emerging practice is to layer legal structures: a foundation in Switzerland or the Cayman Islands for governance, a MIDAO or Wyoming LLC for operational activities, and jurisdiction-specific compliance entities where needed. This multi-wrapper approach is expensive and complex, but it reflects the genuinely multi-jurisdictional nature of decentralized operations.

## The Gap Between Law and Code

All of these legal frameworks share a fundamental tension: they attempt to map the fluid, programmable logic of smart contracts onto the rigid, precedent-based logic of law. When the code and the law disagree, something has to give.

The "code is law" position -- that smart contract execution should be treated as final and binding -- has been thoroughly discredited by events like The DAO hack of 2016, where the Ethereum community chose to override "the code" through a hard fork [7]. The lesson was clear: when the code produces outcomes that the community considers unjust, the community will intervene. Legal systems exist precisely to adjudicate such interventions.

But the opposite extreme -- treating smart contracts as mere suggestions that courts can freely override -- undermines the entire value proposition of programmable governance. If a court can simply rewrite the terms of a smart contract after the fact, there is no point in using smart contracts at all.

The working compromise, reflected in most DAO legislation, is that smart contracts can govern routine operations, but courts retain jurisdiction over disputes, fraud, and situations the code did not anticipate. This is roughly analogous to how arbitration clauses work in traditional contracts: the parties agree to resolve most disputes through a specific mechanism, but the courts remain available as a backstop.

For autonomous businesses, this compromise creates a design constraint: the governance logic must be sophisticated enough to handle routine operations autonomously but must also include mechanisms for human intervention when the legal system requires it. Purely autonomous operation remains a technical aspiration, not a legal reality.

---

### References

[1] Aaron Wright, "The Rise of Decentralized Autonomous Organizations: Opportunities and Challenges," *Stanford Journal of Blockchain Law & Policy* 4, no. 2 (2021).

[2] Wyoming Decentralized Autonomous Organization Supplement, W.S. 17-31-101 through 17-31-115 (2021).

[3] Wyoming Decentralized Unincorporated Nonprofit Association Act, W.S. 17-32-101 through 17-32-115 (2024).

[4] Marshall Islands DAO Act (2022), enacted as amendment to the Revised Business Corporations Act.

[5] Vermont Act 205, "An Act Relating to Blockchain Business Development" (2018), 11 V.S.A. Chapter 25, Subchapter 12.

[6] Colorado Uniform Limited Cooperative Association Act, C.R.S. 7-58-101 et seq.

[7] Primavera De Filippi and Aaron Wright, *Blockchain and the Law: The Rule of Code* (Harvard University Press, 2018).
