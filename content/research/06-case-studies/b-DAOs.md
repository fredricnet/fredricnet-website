---
title: "DAO Governance in Practice"
description: "DAO governance case studies: MakerDAO's Endgame Plan, Uniswap's fee switch debate, Lido's dual governance, ConstitutionDAO, and Nouns DAO's fork mechanism."
weight: 2
linkTitle: "DAOs in Practice"
type: docs
tags: ["DAOs", "governance", "MakerDAO", "Uniswap", "Lido", "Nouns DAO", "ConstitutionDAO"]
categories: ["case-studies"]
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: a-examples
next: c-autonomous-finance
---

## Why DAOs Matter

Decentralized Autonomous Organizations are the closest thing we have to autonomous businesses operating at scale today. They manage billions of dollars in assets, govern critical financial infrastructure, and make collective decisions without centralized authority. They are also deeply flawed --- plagued by voter apathy, plutocratic capture, governance attacks, and the fundamental tension between decentralization and effectiveness.

Studying DAO governance is essential for anyone building autonomous businesses, because DAOs have already encountered (and often failed to solve) the governance problems that autonomous AI businesses will face. The lessons are expensive and hard-won.

## MakerDAO: The Endgame Plan

MakerDAO is the oldest and most consequential DAO in DeFi. It governs the Maker Protocol, which issues DAI --- a decentralized stablecoin pegged to the US dollar, backed by cryptocurrency collateral. At its peak, MakerDAO managed over $10 billion in collateral and DAI was one of the most widely used stablecoins in DeFi [1].

### The Governance Challenge

MakerDAO's governance history is a case study in the difficulty of governing a complex financial system through token voting. MKR token holders vote on critical parameters: collateral types, stability fees (interest rates), liquidation ratios, and protocol upgrades. Each of these decisions has material financial consequences --- setting a stability fee too low attracts excess borrowing and risks the peg; setting it too high stifles growth.

The fundamental problem is expertise. Most MKR holders are not monetary policy experts. They are investors who bought the token for financial returns. Asking them to set interest rates for a multi-billion-dollar lending protocol is like asking airline shareholders to fly the plane.

### SubDAO Structure

The Endgame Plan, proposed by MakerDAO founder Rune Christensen in 2022 and progressively implemented since, represents the most ambitious DAO restructuring ever attempted. Its core innovation is the SubDAO: semi-autonomous organizational units that operate within MakerDAO's overall framework but have their own tokens, governance, and operational mandates [2].

SubDAOs are designed to solve the expertise problem through specialization. Rather than having all MKR holders vote on all decisions, SubDAOs handle specific domains: one manages real-world asset collateral, another handles protocol engineering, a third manages growth and marketing. Each SubDAO has its own token, creating localized governance where domain experts have concentrated influence.

The SubDAO structure also addresses voter fatigue. In a monolithic DAO, every governance proposal competes for the same limited attention. With SubDAOs, participants can focus on the domains they understand and care about, improving both participation rates and decision quality.

### Lessons

MakerDAO's journey illustrates several principles. First, DAO governance does not scale linearly. As the protocol grew in complexity and value, the governance burden grew faster, eventually exceeding the community's capacity. Second, progressive decentralization is preferable to instant decentralization. MakerDAO started with significant centralized control and gradually decentralized, which allowed the governance system to develop alongside the protocol. Third, governance structures must evolve. The original flat token-voting model worked for a small protocol but became dysfunctional at scale. The Endgame Plan is essentially a constitutional redesign.

## Uniswap: The Fee Switch Debate

Uniswap is the largest decentralized exchange by volume, processing billions of dollars in trades per month. Its governance, controlled by UNI token holders, has been dominated by a single, seemingly simple question: should the protocol charge fees? [3]

### The Controversy

Uniswap charges trading fees (typically 0.3% per swap) that go entirely to liquidity providers. The protocol itself --- and by extension, UNI token holders --- receives nothing. The "fee switch" is a built-in mechanism that would redirect a portion of trading fees to the Uniswap treasury, controlled by UNI governance.

For years, the fee switch has been the most debated topic in Uniswap governance. Proponents argue that the protocol needs sustainable revenue to fund development, security audits, and growth. Opponents argue that turning on the fee switch would make Uniswap less competitive (liquidity providers would receive less, potentially migrating to competitors) and could trigger regulatory scrutiny (if UNI holders receive protocol revenue, the token might be classified as a security) [4].

### Governance Dynamics

The fee switch debate reveals the pathologies of token-based governance. Large UNI holders (venture capital firms, the Uniswap Foundation, early team members) hold disproportionate voting power. Governance proposals require significant quorum thresholds (40 million UNI for binding votes), which means most proposals succeed or fail based on whether a handful of large holders participate.

Voter apathy is extreme. Typical Uniswap governance votes attract participation from less than 10% of circulating tokens. This means a small minority of holders makes decisions that affect billions of dollars in liquidity and millions of users.

The fee switch has been proposed, debated, voted on, revised, and re-proposed multiple times. As of 2026, a modified version has been implemented with a pilot program on select pools, but the full rollout remains contentious. The saga demonstrates that even a simple binary decision (fee on or fee off) can become intractable when governance is poorly structured [3].

## Lido: Dual Governance

Lido is the largest liquid staking protocol, managing over $15 billion in staked ETH. Its governance structure has evolved in response to a fundamental problem: the interests of LDO token holders (who govern the protocol) and stETH holders (who deposit their ETH and bear the economic risk) are not always aligned [5].

### The Conflict

LDO holders can vote to change protocol parameters --- fee structures, node operator sets, withdrawal mechanisms --- that directly affect stETH holders' returns and risk exposure. But stETH holders have no governance power. They are economic participants without political representation.

This creates a potential for extraction: LDO holders could vote to increase fees, reduce node operator diversity, or make decisions that benefit themselves at stETH holders' expense. The risk is not hypothetical --- governance attacks where token holders extract value from protocol users have occurred in multiple DeFi protocols.

### Dual Governance Model

Lido's response is "dual governance": a system where stETH holders have veto power over governance proposals that affect them. LDO holders propose and vote on changes as before, but stETH holders can collectively block proposals through a signaling mechanism. If enough stETH holders signal opposition, the proposal enters a dispute resolution phase [5].

This is a significant innovation in DAO governance. It separates proposal power (LDO holders) from veto power (stETH holders), creating a checks-and-balances dynamic similar to bicameral legislatures. The model acknowledges that different stakeholders have different interests and different types of legitimacy, and it gives each group appropriate governance power.

The implementation is technically complex. Measuring stETH holder sentiment requires on-chain signaling mechanisms that are resistant to manipulation. Setting veto thresholds requires balancing sensitivity (too low and minorities can block everything) against effectiveness (too high and the veto is meaningless). Lido's dual governance is still being refined, but the conceptual framework is already influencing other DAOs.

## ConstitutionDAO: Success and Failure

ConstitutionDAO was formed in November 2021 with a singular purpose: to buy a copy of the United States Constitution at a Sotheby's auction. The DAO raised approximately $47 million in ETH from over 17,000 contributors in less than a week [6].

### The Experiment

ConstitutionDAO is remarkable for what it demonstrated about collective action. In less than seven days, thousands of strangers coordinated to pool tens of millions of dollars for a shared objective. The DAO used Juicebox (a crowdfunding protocol) for fundraising, a multi-sig wallet for fund custody, and social media for coordination. No incorporation, no legal entity, no formal governance structure.

### The Failure

ConstitutionDAO lost the auction. The winning bid was $43.2 million, slightly above ConstitutionDAO's effective bidding limit (which accounted for post-purchase costs like storage, insurance, and ongoing governance). The DAO then faced the problem of returning funds to contributors.

The refund process revealed the practical limitations of DAO coordination. Gas fees (Ethereum transaction costs) consumed a significant portion of smaller contributions. Many contributors never claimed their refunds. The PEOPLE governance token, intended to become worthless after the refund, instead became a speculative asset traded on exchanges --- a memecoin born from a failed constitutional experiment.

### Lessons

ConstitutionDAO teaches two important lessons. First, DAOs can mobilize collective action at unprecedented speed and scale for clearly defined objectives. The specificity of the mission (buy this document at this auction) enabled coordination that would have been impossible for a vague or open-ended goal. Second, DAOs are poorly suited to one-shot objectives. Once the auction was lost, the DAO had no purpose, no governance structure for winding down, and no mechanism for clean dissolution. The PEOPLE token's continued existence as a speculative asset is a direct consequence of this governance gap [6].

## Nouns DAO: The Fork Mechanism

Nouns DAO is one of the most well-funded and innovative DAOs in the ecosystem. Each day, a single Noun NFT is auctioned, and the proceeds go to the Nouns DAO treasury. By 2024, the treasury had accumulated over $50 million in ETH [7].

### Governance by NFT

Nouns governance is unusual: each Noun NFT represents one vote. There are no fungible governance tokens. This creates a naturally limited voter set (one Noun per day means roughly 365 new voters per year) with clear identity (each Noun is a unique, publicly visible NFT).

The limited voter set has both advantages and disadvantages. On the positive side, Nouns governance avoids the extreme voter apathy that plagues larger DAOs --- with fewer voters, each vote matters more, and participation rates are substantially higher. On the negative side, the concentrated voting power means a small coalition of Noun holders can control governance, and the high cost of acquiring a Noun (auction prices have ranged from tens to hundreds of thousands of dollars) creates a plutocratic barrier to entry.

### The Fork

Nouns DAO's most significant governance innovation is "ragequit" or "fork" --- the ability for dissatisfied Noun holders to exit the DAO with their proportional share of the treasury. If you hold a Noun and disagree with the DAO's direction, you can burn your Noun and receive your pro-rata share of the treasury in ETH [7].

This mechanism, inspired by Moloch DAO's ragequit function, fundamentally changes governance dynamics. In a traditional corporation, minority shareholders who disagree with management have limited options: sell their shares (possibly at a loss) or launch a costly proxy fight. In Nouns DAO, exit is always available at fair value.

The fork mechanism creates a market discipline on governance. If the DAO makes decisions that destroy value or benefit insiders at the expense of the broader membership, dissatisfied members will fork, draining the treasury. The threat of exit constrains the majority from exploiting the minority, because exploitation triggers withdrawal.

In practice, Nouns DAO has experienced significant fork events. In 2023, a group of Noun holders triggered a fork, withdrawing millions of dollars from the treasury. The fork was prompted by disagreements about spending priorities and governance direction. The post-fork DAO continued to operate with a reduced treasury, and the forking members received their proportional share.

### Smart Contract Governance

All of these DAOs share a common foundation: smart contract governance. Governance proposals are submitted as on-chain transactions, votes are recorded on the blockchain, and approved proposals are executed automatically by the governance contract. This creates transparency (all governance activity is publicly auditable) and credibility (approved proposals execute without requiring trust in any intermediary).

But smart contract governance also creates rigidity. Modifying governance rules requires governance proposals, which are subject to the existing rules. Fixing a broken governance mechanism requires using that broken mechanism to approve the fix. This bootstrapping problem has plagued several DAOs and illustrates the importance of including upgrade mechanisms and emergency procedures in initial governance designs.

### Voting Mechanisms

The DAOs examined here use several voting mechanisms:

**Simple token voting** (Uniswap, early MakerDAO): one token, one vote. Simple but plutocratic.

**Delegated voting** (most major DAOs): token holders delegate their voting power to representatives. Improves participation but concentrates power in delegates.

**Conviction voting** (Gitcoin, some smaller DAOs): voting power increases with the duration of the vote. Rewards commitment but creates inertia.

**Quadratic voting** (Gitcoin Grants): voting power scales with the square root of tokens committed. Reduces plutocratic influence but is vulnerable to Sybil attacks (splitting holdings across multiple addresses).

**NFT-based voting** (Nouns): one NFT, one vote. Limits voter set but creates high barriers to entry.

No mechanism is clearly superior. Each makes different tradeoffs between inclusivity, efficiency, expertise, and resistance to manipulation. The choice of voting mechanism is itself a governance decision, and it shapes all subsequent governance outcomes.

## The Governance Frontier

These case studies reveal that DAO governance is hard --- harder than most early advocates anticipated. The challenges are not primarily technical. The smart contracts work. The voting mechanisms function. The problems are human: voter apathy, information asymmetry, misaligned incentives, coordination failures, and the persistent tension between efficiency and decentralization.

For autonomous AI businesses, these lessons are directly applicable. AI can potentially mitigate some governance failures --- it does not suffer from apathy, it can process all available information, and it can evaluate proposals against explicit criteria. But AI introduces its own governance risks: algorithmic bias, objective misalignment, and the opacity of machine decision-making.

The DAOs examined here are governance laboratories. Their experiments --- SubDAO structures, dual governance, fork mechanisms, progressive decentralization --- represent the state of the art in decentralized governance. Autonomous AI businesses will build on these foundations, and they will need to.

## References

[1] MakerDAO. "The Maker Protocol: MakerDAO's Multi-Collateral Dai (MCD) System." (2020).

[2] Christensen, R. "The Endgame Plan: A Comprehensive Restructuring of MakerDAO." MakerDAO Forum (2022).

[3] Uniswap Governance. "Fee Switch Proposal History." Uniswap Governance Forum (2022-2025).

[4] Adams, H. "Uniswap v3 Core." Uniswap Labs (2021).

[5] Lido DAO. "Lido Dual Governance: Design and Rationale." Lido Research Forum (2024).

[6] ConstitutionDAO. "ConstitutionDAO Post-Mortem." (2021).

[7] Nouns DAO. "Nouns DAO: Governance and Fork Mechanism." (2023).
