---
title: "Compliance and Standards"
description: "ISO 42001, NIST AI RMF, SOC 2, and GDPR as applied to autonomous businesses -- building compliance into the architecture rather than bolting it on."
weight: 5
linkTitle: "Compliance"
type: docs
tags:
  - compliance
  - iso-42001
  - nist
  - gdpr
categories:
  - research
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: d-liability-frameworks
next: 04-ethical
---

## Compliance Without a Compliance Officer

Traditional compliance is a human activity. A compliance officer reads the regulations, interprets their requirements, designs policies and procedures, trains staff, monitors adherence, and responds to audits. Every step assumes human judgment, human communication, and human accountability.

An autonomous business has none of these. There is no compliance officer to read the regulations. There is no staff to train. There is no one to respond when the auditor calls. If compliance is to happen at all, it must be built into the system's architecture -- compliance by design rather than compliance by department.

This is not as radical as it sounds. The software industry has been moving in this direction for years. Infrastructure as code, policy as code, security as code -- the pattern of encoding human judgment into automated systems is well established. Compliance as code is the next logical step, and for autonomous businesses, it is the only option [1].

## ISO/IEC 42001: AI Management Systems

ISO/IEC 42001, published in December 2023, is the first international standard specifically for AI management systems [2]. It provides a framework for organizations that develop, provide, or use AI systems to manage the associated risks and demonstrate responsible AI practices.

The standard follows the familiar ISO management system structure (shared with ISO 9001, ISO 27001, and others):

- **Context.** Understand the organization's environment and stakeholder requirements.
- **Leadership.** Establish policy, assign roles and responsibilities.
- **Planning.** Identify risks and opportunities, set objectives.
- **Support.** Provide resources, ensure competence, manage documentation.
- **Operation.** Implement AI risk assessments, manage AI system lifecycles.
- **Performance evaluation.** Monitor, measure, audit, review.
- **Improvement.** Address nonconformities, drive continual improvement.

For autonomous businesses, ISO 42001 presents an interesting paradox. The standard assumes organizational leadership -- human leadership -- driving each of these elements. An autonomous business would need to implement these requirements programmatically: automated risk assessments, algorithmic policy enforcement, machine-readable documentation, and self-monitoring systems.

This is technically feasible. An autonomous business could maintain an AI management system that continuously assesses its own risk profile, enforces pre-defined policies, generates documentation in standard formats, and flags anomalies for review. The question is whether a certification body would accept a self-managing system as compliant with a standard designed for human-managed organizations.

As of early 2026, no autonomous business has sought ISO 42001 certification. But the standard's existence creates a target: build a system that meets these requirements, and you have a defensible claim to responsible AI management.

## NIST AI Risk Management Framework

The US National Institute of Standards and Technology published its AI Risk Management Framework (AI RMF) in January 2023, with updates continuing through 2025 [3]. Unlike ISO 42001, the NIST framework is voluntary and does not support formal certification. But it has become the de facto standard for AI risk management in the US, referenced by regulators, procurement officers, and corporate governance teams.

The framework is organized around four functions:

- **Govern.** Establish policies, define roles, create accountability structures for AI risk.
- **Map.** Understand the context in which AI systems operate, identify risks and impacts.
- **Measure.** Assess and track identified risks using quantitative and qualitative methods.
- **Manage.** Prioritize risks, implement responses, monitor outcomes.

Each function includes subcategories and specific suggested actions. For autonomous businesses, the GOVERN function is the most challenging because it explicitly calls for human accountability structures. The MAP and MEASURE functions are more naturally automatable -- risk assessment and measurement are precisely the kinds of tasks that AI systems can perform on themselves.

The NIST framework's voluntary nature is actually an advantage for autonomous businesses. Because there is no formal certification process, there is no gate-keeper to challenge the legitimacy of automated compliance. An autonomous business can document its adherence to the framework, publish that documentation, and let stakeholders judge for themselves.

## SOC 2 for AI Systems

SOC 2 (System and Organization Controls 2) reports, developed by the American Institute of Certified Public Accountants, are the standard mechanism for demonstrating that a service organization's controls meet certain trust service criteria: security, availability, processing integrity, confidentiality, and privacy [4].

SOC 2 audits are increasingly expected for AI systems that process customer data, and several of the trust service criteria map directly onto autonomous business concerns:

- **Processing integrity.** Are the system's outputs complete, valid, accurate, and timely? For an autonomous business, this means demonstrating that its AI decision-making produces reliable results.
- **Security.** Are the system's assets protected against unauthorized access? For a DAO-governed business with on-chain components, this includes smart contract security.
- **Privacy.** Is personal information collected, used, retained, and disclosed in accordance with commitments? An autonomous business processing personal data must demonstrate GDPR-equivalent privacy controls.

The challenge with SOC 2 for autonomous businesses is that the audit process itself requires human interaction. An auditor interviews management, inspects controls, and reviews documentation. There is no established process for auditing a system that has no management to interview.

One emerging approach is "continuous compliance" -- automated systems that continuously monitor control effectiveness and generate audit-ready documentation in real time [5]. Several startups are building platforms that provide continuous SOC 2 readiness monitoring for AI systems. For autonomous businesses, these platforms could serve as the compliance layer, generating the evidence that an external auditor would need to issue a report.

## GDPR and Autonomous Data Processing

The General Data Protection Regulation remains the most significant data protection law globally, and its implications for autonomous businesses are substantial [6].

Several GDPR provisions create specific challenges:

**Article 22: Automated decision-making.** Individuals have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects. An autonomous business that makes decisions affecting individuals -- credit decisions, hiring decisions, pricing decisions -- must either obtain explicit consent or provide meaningful human intervention.

This is the GDPR equivalent of the EU AI Act's human oversight requirement, and it creates the same constraint: fully autonomous operation is not permitted for decisions with significant individual impact. The autonomous business must either avoid such decisions, obtain consent for automated processing, or implement a human review mechanism.

**Data Protection Officer.** Organizations engaged in large-scale processing of personal data must appoint a Data Protection Officer. The DPO must be a natural person -- the role cannot be filled by an AI system. For an autonomous business, this means at minimum one human role is legally required.

**Data Subject Access Requests.** Individuals have the right to request access to their personal data, and the controller must respond within one month. An autonomous business must be capable of identifying, extracting, and transmitting personal data in response to individual requests, without human intervention in the routine case.

**Data Protection Impact Assessments.** High-risk processing activities require a formal impact assessment. The assessment must evaluate the necessity and proportionality of processing, the risks to individuals, and the measures in place to address those risks. An autonomous business must be capable of conducting and documenting these assessments programmatically.

## Compliance by Design

The thread connecting all of these frameworks is the concept of compliance by design -- building regulatory requirements into the system architecture rather than managing them through human processes.

For autonomous businesses, compliance by design is not a nice-to-have. It is the only viable path. The business cannot hire a compliance team. It cannot send someone to an audit interview. It cannot file a response to a regulatory inquiry by drafting a letter.

What it can do is:

- **Encode regulatory requirements as constraints** in its decision-making systems. If GDPR prohibits certain data processing activities, those prohibitions become hard constraints in the system's optimization function.
- **Generate compliance documentation automatically.** Every decision, every data processing activity, every risk assessment can be logged in a format that satisfies regulatory requirements.
- **Monitor its own compliance continuously.** Rather than periodic audits, the system continuously evaluates its own compliance posture and flags violations in real time.
- **Respond to regulatory queries programmatically.** Data subject access requests, audit inquiries, and regulatory questionnaires can be handled through standardized APIs.

This vision is technically ambitious but not unrealistic. The building blocks exist: policy-as-code frameworks, automated audit platforms, continuous monitoring systems, and standardized regulatory data formats. The integration challenge -- combining these into a coherent compliance architecture for an autonomous business -- is significant but tractable.

The deeper challenge is trust. Regulators, auditors, and the public must be willing to accept that an autonomous system can police itself. This is a social and political challenge as much as a technical one, and it will not be resolved by elegant engineering alone.

---

### References

[1] Lilian Edwards and Michael Veale, "Slave to the Algorithm? Why a 'Right to an Explanation' Is Probably Not the Remedy You Are Looking For," *Duke Law & Technology Review* 16 (2017): 18-84.

[2] ISO/IEC 42001:2023, "Information Technology -- Artificial Intelligence -- Management System."

[3] National Institute of Standards and Technology, "AI Risk Management Framework (AI RMF 1.0)," NIST AI 100-1, January 2023.

[4] AICPA, "SOC 2 -- SOC for Service Organizations: Trust Services Criteria," 2017 (updated 2022).

[5] Avi Gesser et al., "Continuous Compliance Monitoring for AI Systems," *Debevoise Data Blog*, 2024.

[6] Regulation (EU) 2016/679 (General Data Protection Regulation).
