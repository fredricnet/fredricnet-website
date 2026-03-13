---
title: "DAOs in Practice"
description: "MakerDAO, Uniswap, Lido, and the messy reality of decentralized governance"
weight: 2
linkTitle: "DAOs"
type: docs
tags:
  - DAO
  - Governance
  - DeFi
  - Smart Contracts
categories:
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: a-examples
next: c-autonomous-finance
---

## Decentralized Autonomous Organizations: Theory Meets Reality

A DAO, or Decentralized Autonomous Organization, is an organization whose rules are encoded as smart contracts on a blockchain. Decisions are made collectively by members who vote with governance tokens, and outcomes are executed automatically and transparently. No CEO, no board of directors, no central authority.

That is the theory. The practice is considerably messier, more interesting, and more instructive than any whitepaper suggests.

## How DAO Governance Works

The basic governance cycle is consistent across most DAOs:

**Rules encoded in smart contracts**: The foundational rules -- how voting works, how the treasury is managed, what constitutes a valid proposal -- are written into smart contracts. Because these rules exist on a blockchain, they are transparent and cannot be changed by a single party without community consent [1].

**Governance tokens**: Participation requires holding the DAO's governance token. Holding tokens is analogous to holding shares -- it grants voting rights, and in most DAOs, voting power is proportional to token holdings.

**Proposal and voting cycle**: Any member (usually requiring a minimum token threshold) can submit a proposal. The community discusses it on forums and Discord, then a formal on-chain vote occurs. If the proposal passes the required quorum and approval threshold, the smart contract executes the decision automatically -- transferring funds, changing parameters, or deploying new code.

This process sounds clean. In practice, it reveals fundamental tensions that have defined DAO governance for years.

## Case Studies in DAO Governance

### MakerDAO and the Endgame Plan

MakerDAO governs the DAI stablecoin, one of the most important pieces of DeFi infrastructure. For years, MakerDAO was considered the gold standard of DAO governance -- complex, deliberate, and genuinely decentralized [2].

Then came the Endgame Plan.

Proposed by founder Rune Christensen in 2022 and progressively implemented through 2024-2025, the Endgame Plan restructured MakerDAO into a system of "SubDAOs" -- semi-autonomous units responsible for specific functions (lending, real-world assets, growth). The plan also introduced AI governance tools, including AI-assisted proposal analysis and automated parameter adjustments.

**What it reveals**: The Endgame Plan is a case study in the tension between decentralization and efficiency. Christensen argued that fully decentralized governance was too slow and too vulnerable to governance attacks. The SubDAO model concentrates operational authority while maintaining high-level decentralized oversight. Critics called it "re-centralization with extra steps."

The AI governance components are particularly instructive. MakerDAO began using AI to analyze risk parameters and suggest adjustments -- a form of AI-assisted governance that stops short of full autonomy but goes further than most DAOs in integrating algorithmic decision-making.

### Uniswap: Governance at Scale

Uniswap is the largest decentralized exchange by volume, and its governance process has been both a success story and a cautionary tale [3].

**The fee switch debate**: For years, Uniswap generated billions in trading fees, all of which went to liquidity providers. UNI token holders -- the people who theoretically govern the protocol -- received nothing. Proposals to activate a "fee switch" that would direct some fees to UNI holders were debated endlessly, with legal concerns (would this make UNI a security?) preventing action.

**Voter apathy**: Uniswap governance suffers from severe voter apathy. Despite having hundreds of thousands of token holders, typical governance votes involve a few hundred wallets. Quorum requirements are regularly barely met. The practical result is that a small number of large token holders -- including the founding team and venture capital firms -- exercise disproportionate influence.

**Delegate model**: To address apathy, Uniswap adopted a delegation model where token holders can delegate their voting power to active community members. This has improved participation quality but created a new form of centralization: professional delegates who accumulate significant voting power and become de facto decision-makers.

### Lido: Dual Governance

Lido controls approximately 28% of all staked Ethereum, making it systemically important to the Ethereum network. This concentration of influence raised alarms, and Lido responded with a "dual governance" model [4].

**How dual governance works**: Lido's model gives stETH holders (the people who actually staked their ETH through Lido) a veto over LDO governance decisions. If LDO token holders pass a proposal that stETH holders oppose, the stETH holders can trigger a time-locked veto process.

**Why it matters**: Dual governance addresses a fundamental problem with token-weighted voting: the people who govern a protocol (token holders) are not always the people who use it (stakers). By giving both groups a voice, Lido creates a check-and-balance system that more closely resembles bicameral legislature than simple majority rule.

**Assessment**: Dual governance is one of the most sophisticated governance innovations in the DAO space. Its weakness is complexity -- the veto mechanism introduces delays and can create governance deadlocks. Whether the added safety justifies the reduced agility remains an open question.

### ConstitutionDAO: The Flash DAO

ConstitutionDAO was formed in November 2021 with a single purpose: raise money to buy a copy of the U.S. Constitution at a Sotheby's auction. In less than a week, the DAO raised $47 million from over 17,000 contributors [5].

**What happened**: The DAO lost the auction to hedge fund billionaire Ken Griffin. The $47 million was returned to contributors (minus gas fees, which were substantial on Ethereum at the time). ConstitutionDAO then dissolved.

**What it reveals**: ConstitutionDAO demonstrated both the power and the limitations of DAOs. On the power side: a decentralized community raised $47 million in days, with no legal entity, no bank account, and no traditional organizational structure. On the limitation side: the DAO's governance was minimal (there was nothing to govern -- the objective was singular), the smart contract had significant centralization risks (a small multisig controlled the funds), and the gas fees consumed a meaningful portion of small contributions.

ConstitutionDAO is best understood as a proof of concept for rapid, purpose-built coordination. It was not an autonomous business -- it was a fundraising flash mob. But it demonstrated that DAO infrastructure can mobilize capital at remarkable speed.

### Nouns DAO and the Fork

Nouns DAO is an experiment in perpetual funding: every day, a new Noun NFT is auctioned, and the proceeds go to the DAO treasury. By mid-2023, the treasury held approximately $50 million in ETH [6].

**The fork**: In September 2023, a supermajority of Nouns holders voted to fork the DAO, essentially allowing members to exit with their proportional share of the treasury. The fork was triggered by frustration with how treasury funds were being spent -- or rather, how slowly and inefficiently they were being allocated.

**What it reveals**: The Nouns fork is a case study in DAO exit rights. Traditional organizations make it difficult for members to exit with their share of assets. Nouns' fork mechanism provided a credible exit threat, which in theory should discipline governance. In practice, the fork drained a significant portion of the treasury, leaving the remaining DAO with fewer resources and an uncertain future.

The lesson is that exit rights are double-edged. They protect members from governance capture, but they also create instability -- any unpopular decision can trigger an exodus.

## Persistent Governance Challenges

Across all DAO case studies, several challenges recur:

**Plutocracy**: Token-weighted voting inherently favors wealthy participants. One token, one vote means one whale can outvote thousands of small holders. Attempts to address this -- quadratic voting, reputation-weighted voting, identity-based voting -- each introduce their own problems (Sybil attacks, subjectivity, privacy concerns) [7].

**Voter apathy**: Most token holders do not vote. Participation rates of 5-10% are common even for significant decisions. This means that DAOs are effectively governed by a small minority of active participants, undermining the "decentralized" part of the name.

**Governance attacks**: Bad actors can accumulate tokens specifically to pass malicious proposals. Flash loan governance attacks -- borrowing tokens for the duration of a vote -- have been demonstrated in multiple protocols.

**Legal ambiguity**: DAOs exist in a legal gray zone. They are not corporations, partnerships, or any other recognized legal entity in most jurisdictions. This creates problems for contracts, liability, taxation, and regulatory compliance. Wyoming and the Marshall Islands have passed DAO-specific legislation, but coverage remains limited [8].

**Coordination overhead**: Decentralized decision-making is slow. Proposals must be discussed, voted on, and executed through multi-step processes. For operational decisions that need to be made quickly, this overhead can be crippling.

## The DAO Governance Maturity Curve

Looking across these case studies, a maturity curve emerges:

**Phase 1 -- Token launch and enthusiasm**: High participation, simple governance, community energy. This is the honeymoon period.

**Phase 2 -- Governance fatigue**: Voter participation drops. Routine decisions become tedious. Power consolidates among active participants. The DAO begins to resemble a traditional organization with extra steps.

**Phase 3 -- Crisis and reform**: A governance failure, security incident, or treasury dispute forces the DAO to rethink its governance structure. This often leads to innovations (delegation, SubDAOs, dual governance) or dissolution.

**Phase 4 -- Institutional maturity**: The DAO develops stable governance processes, professional contributors, and clear operational procedures. Few DAOs have reached this phase. MakerDAO and Lido are the closest examples.

Understanding where a DAO sits on this curve is essential for evaluating its governance health. A Phase 1 DAO with high participation is not necessarily better governed than a Phase 3 DAO that has survived a crisis and reformed its processes.

---

**References**

[1] V. Buterin, "DAOs, DACs, DAs and More: An Incomplete Terminology Guide," blog.ethereum.org, 2014.

[2] MakerDAO, "The Maker Endgame Plan," forum.makerdao.com, 2022.

[3] Uniswap Foundation, "Uniswap Governance Report 2024," uniswap.org, 2024.

[4] Lido DAO, "Lido Dual Governance: Design and Rationale," research.lido.fi, 2024.

[5] ConstitutionDAO, "Post-Mortem," constitutiondao.com, 2021.

[6] Nouns DAO, "Nouns Fork Documentation," nouns.wtf, 2023.

[7] V. Buterin, "Moving beyond coin voting governance," vitalik.eth.limo, 2021.

[8] A. Wright and P. De Filippi, "Decentralized Blockchain Technology and the Rise of Lex Cryptographia," SSRN, 2015.
