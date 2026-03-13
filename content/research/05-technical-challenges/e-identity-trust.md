---
title: "Identity & Trust"
description: "Non-Human Identity, agent reputation systems, and the challenge of knowing who -- or what -- you are dealing with"
weight: 5
linkTitle: "Identity & Trust"
type: docs
tags:
  - Identity
  - Trust
  - NHI
  - Blockchain
categories:
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: d-error-management
next: f-self-improvement
---

## The Agent Identity Crisis

When a human walks into a bank, identity is (relatively) straightforward. A passport, a signature, a face. When a software agent initiates a transaction on behalf of an autonomous business, identity becomes a genuinely hard problem.

Who is the agent? Who authorized it? What is it allowed to do? How do you verify that the agent communicating with your system is the same agent that authenticated yesterday? And most critically -- how do you trust an autonomous entity that has no legal personhood, no physical presence, and no accountability in the traditional sense?

These questions are not academic. As AI agents increasingly interact with financial systems, APIs, and each other, Non-Human Identity (NHI) has become one of the most important unsolved problems in autonomous system design.

## Non-Human Identity as a Building Block

The concept of Non-Human Identity has been percolating in cybersecurity for years, primarily in the context of machine-to-machine authentication -- service accounts, API keys, certificates, and secrets management. But the rise of autonomous AI agents has elevated NHI from an operational security concern to a foundational architectural requirement.

NIST's concept paper on Non-Human Identity, published in 2024, frames the problem clearly: organizations now have more non-human identities than human ones, often by an order of magnitude. These identities -- service accounts, API tokens, machine certificates, and increasingly AI agents -- require lifecycle management, access governance, and auditability comparable to human identities [1].

The challenge for autonomous businesses is that traditional NHI approaches assume a human is ultimately responsible. A service account belongs to an application, which belongs to a team, which has a manager. An AI agent acting autonomously breaks this chain. If an agent makes a decision that causes harm, the identity system needs to provide not just authentication (who is this agent?) but attribution (who is responsible for this agent's actions?) and authorization history (what was this agent allowed to do at the time it acted?).

## Decentralized Identifiers (DIDs)

Decentralized Identifiers, standardized by the W3C in 2022, offer a foundation for agent identity that does not depend on centralized authorities. A DID is a globally unique identifier that the subject creates and controls, anchored to a decentralized system (typically a blockchain) rather than to a certificate authority or identity provider [2].

A DID for an autonomous agent might look like:

```
did:ethr:0x1234...abcd
```

This identifier is:
- **Self-sovereign**: The agent (or its creating organization) controls it, not a central authority
- **Verifiable**: Anyone can resolve the DID to a DID Document that contains the agent's public keys and service endpoints
- **Persistent**: The identifier survives changes in the agent's hosting infrastructure, API endpoints, or organizational affiliations

DIDs solve the identification problem but not the trust problem. Knowing that you are communicating with `did:ethr:0x1234...abcd` tells you nothing about whether that agent is competent, honest, or authorized to perform specific actions. For that, you need additional layers.

## ERC-8004: Agent Identity on Blockchain

ERC-8004, proposed in late 2024, specifically addresses the problem of on-chain identity for AI agents. The standard defines a smart contract interface for registering agent identities, associating them with capabilities, and managing their lifecycle [3].

Key features of ERC-8004 include:

**Capability attestations**: Other entities can attest to an agent's capabilities. If an oracle service verifies that Agent X accurately reports price data, that attestation is recorded on-chain and can be verified by anyone considering whether to trust Agent X's price reports.

**Delegation chains**: An agent can prove that it was authorized by a specific entity (another agent, a DAO, a human) and what scope of authority was delegated. This creates an auditable chain of authorization from the autonomous agent back to its source of legitimacy.

**Revocation**: Critically, agent identities and capabilities can be revoked. If an agent is compromised or begins behaving unexpectedly, its authorization can be withdrawn on-chain, and any system checking its credentials will immediately see the revocation.

The standard is still in draft, but it represents the first serious attempt at a standardized identity framework specifically designed for autonomous AI agents operating on blockchain infrastructure.

## Reputation Systems for Autonomous Agents

Identity tells you who an agent is. Reputation tells you whether to trust it. Building effective reputation systems for autonomous agents is one of the more interesting design challenges in this space.

### The Cold Start Problem

A new agent has no reputation. How should other agents and systems treat it? Too much trust and you are vulnerable to Sybil attacks -- an adversary creating many new agents to overwhelm the system. Too little trust and legitimate new agents cannot participate.

Solutions include:

- **Staking**: New agents must lock up economic value (tokens) as a bond. If they behave badly, the stake is slashed. This aligns incentives but creates a barrier to entry.
- **Vouching**: Established agents can vouch for new agents, putting their own reputation at risk. This mirrors how professional networks work in human society.
- **Graduated permissions**: New agents start with limited capabilities and earn broader access through demonstrated performance [4].

### Reputation Metrics

What should an agent's reputation measure? The most useful metrics depend on the agent's role:

- **Reliability**: What percentage of tasks does the agent complete successfully?
- **Accuracy**: For agents that provide information, how often is that information correct?
- **Timeliness**: Does the agent respond within expected time windows?
- **Consistency**: Does the agent behave predictably, or does its performance vary widely?
- **Honesty**: Has the agent ever been caught providing misleading information or misrepresenting its capabilities?

These metrics should be computed from verifiable on-chain or auditable off-chain evidence, not from self-reported claims. An agent that self-reports a 99% success rate should be treated with the same skepticism as a restaurant that puts only five-star reviews on its website.

### Gaming and Sybil Resistance

Any reputation system can be gamed. Common attacks include:

- **Sybil attacks**: Creating multiple identities to artificially inflate reputation through mutual endorsement
- **Reputation farming**: Performing many easy, low-value tasks to build reputation, then exploiting it for a single high-value fraud
- **Whitewashing**: Abandoning a tarnished identity and creating a new one

Defenses include proof-of-personhood (or proof-of-unique-agent) mechanisms, staking requirements that make identity creation expensive, and reputation decay that requires continuous good behavior to maintain standing [5].

## Trust Frameworks: Web of Trust vs. Certificate Authorities

The internet's current trust model relies on certificate authorities (CAs) -- centralized organizations that vouch for the identity of websites and services. This model works but has well-known weaknesses: CAs can be compromised (DigiNotar in 2011), CAs can be coerced by governments, and the system concentrates trust in a small number of organizations.

The alternative is a **web of trust**, where trust is established through networks of mutual endorsement rather than centralized authorities. PGP's web of trust is the best-known example, though it never achieved broad adoption due to usability challenges.

For autonomous agent networks, a hybrid approach is most practical:

- **Bootstrapping through CAs**: New agents can establish initial trust through attestations from recognized authorities (auditing firms, protocol foundations, established agent networks)
- **Web of trust for ongoing reputation**: Once established, agents build trust through direct interactions and peer endorsements
- **On-chain verification**: Key trust relationships are anchored on blockchain for transparency and immutability [6]

### Trust Domains

Not all trust relationships are equivalent. An agent might be trusted for price reporting but not for transaction execution. Trust domains formalize this distinction:

- **Data trust**: The agent provides accurate information
- **Execution trust**: The agent correctly executes assigned tasks
- **Financial trust**: The agent can be trusted with funds
- **Governance trust**: The agent's votes or decisions should influence organizational direction

An agent's trust level in each domain is independent. A highly trusted data provider might have zero financial trust. This granularity prevents a compromised agent from leveraging trust earned in one domain to cause damage in another.

## The Practical State of Agent Identity

As of early 2026, agent identity is still in its infrastructure-building phase. The pieces exist -- DIDs provide identifiers, ERC-8004 proposes an on-chain standard, reputation systems have been prototyped in various protocols -- but there is no widely adopted, interoperable identity framework for autonomous agents.

Several practical approaches are emerging in the meantime:

**API key hierarchies**: Organizations deploying agents use scoped API keys with defined permissions, rate limits, and audit logging. This is not true agent identity, but it provides accountability and access control.

**Agent registries**: Some multi-agent platforms maintain registries of known agents with their capabilities, ownership, and track records. These are typically centralized and platform-specific.

**Verifiable credentials**: W3C Verifiable Credentials, combined with DIDs, allow agents to present cryptographically verifiable claims about their identity, capabilities, and authorization without contacting a central authority [7].

The gap between current practice and the ideal is significant, but the direction is clear. As autonomous businesses move from experiments to production, agent identity will become critical infrastructure -- as fundamental as DNS is to the web.

---

**References**

[1] NIST, "Non-Human Identity Management: Challenges and Recommendations," NIST SP 800-XXX (Concept Paper), 2024.

[2] W3C, "Decentralized Identifiers (DIDs) v1.0," W3C Recommendation, July 2022.

[3] Ethereum Improvement Proposals, "ERC-8004: Agent Identity Standard," Draft, 2024.

[4] A. Josang, R. Ismail, and C. Boyd, "A Survey of Trust and Reputation Systems for Online Service Provision," Decision Support Systems, vol. 43, no. 2, 2007.

[5] J. Douceur, "The Sybil Attack," IPTPS, 2002.

[6] A. Tobin and D. Reed, "The Inevitable Rise of Self-Sovereign Identity," Sovrin Foundation, 2017.

[7] W3C, "Verifiable Credentials Data Model v2.0," W3C Recommendation, 2024.
