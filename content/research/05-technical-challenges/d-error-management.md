---
title: "Error Management"
description: "Cascading failures, circuit breakers, and what Knight Capital teaches us about autonomous systems"
weight: 4
linkTitle: "Error Management"
type: docs
tags:
  - Error Management
  - Resilience
  - Multi-Agent Systems
categories:
date: 2026-03-13
lastmod: 2026-03-13
draft: false
toc: true
comments: false
image:
prev: c-reliability
next: e-identity-trust
---

## When One Agent's Mistake Becomes Everyone's Problem

In a traditional software system, errors are usually contained. A bug in the billing module does not crash the authentication system. Microservice architectures enforce this isolation by design -- each service has its own process, its own memory, its own failure domain.

Multi-agent autonomous systems break this assumption. Agents communicate, delegate, share context, and build on each other's outputs. When Agent A produces an incorrect result and passes it to Agent B, which incorporates it into a decision sent to Agent C, you have a cascading failure that is qualitatively different from a software bug. Each agent in the chain may behave correctly given its inputs -- the error is in the system, not in any individual component.

Understanding and managing these cascading failures is essential for any autonomous business that operates with more than one agent.

## The Knight Capital Cautionary Tale

On August 1, 2012, Knight Capital Group -- one of the largest market makers in the United States -- deployed a software update to its automated trading system. The deployment went wrong. An old piece of code, intended for testing and never meant to run in production, was accidentally activated. In 45 minutes, the system executed millions of erroneous trades, accumulating a $440 million loss. Knight Capital was effectively bankrupt by lunchtime [1].

The Knight Capital disaster is instructive for autonomous business design because it illustrates several failure patterns simultaneously:

**No kill switch**: The system had no automated mechanism to halt trading when losses exceeded a threshold. Human operators noticed the problem within minutes but had no way to stop the system quickly.

**Silent reactivation of dead code**: The error was not in new code but in old code that should have been removed. In multi-agent systems, deprecated agent behaviors that remain in the codebase are ticking time bombs.

**Speed amplifies errors**: The system was designed to operate at millisecond speeds. This is a feature when things are working correctly and a catastrophic liability when things go wrong. An error that would have caused $1,000 in losses at human speed caused $440 million at machine speed.

**Post-mortem inadequacy**: Knight Capital had risk management processes, but they were designed for human-speed errors. Nobody had designed for a scenario where the system could lose $10 million per minute.

## Cascading Failures in Multi-Agent Networks

In autonomous business architectures -- where agents form dynamic teams, delegate tasks, and share resources -- cascading failures follow predictable patterns:

### The Poison Output Pattern

Agent A produces an output that is incorrect but plausible. Agent B, which trusts Agent A's output, incorporates it into its own reasoning. Agent C, which depends on Agent B, propagates the error further. By the time the error is detected, it has influenced dozens of downstream decisions.

This is particularly dangerous with LLM-based agents because their errors often look reasonable. A hallucinated fact, a subtly wrong calculation, or an overconfident risk assessment can propagate through an agent network without triggering any error detection, because no individual agent sees an "error" -- each sees reasonable-looking input [2].

Research from Microsoft on multi-agent LLM systems demonstrated that error rates compound roughly exponentially with the number of sequential agent interactions. A single agent might hallucinate 3% of the time. Three agents in sequence, each consuming the prior agent's output, can produce compounded errors at rates exceeding 15%.

### The Retry Storm

When an agent fails to complete a task, a natural response is to retry. If multiple agents simultaneously encounter failures (perhaps because a shared dependency is down), they all retry simultaneously, overwhelming the recovering dependency and preventing it from recovering. This positive feedback loop can turn a minor outage into a major one.

The classic example in distributed systems is the "thundering herd" -- when a cache expires and thousands of requests simultaneously hit the database. In agent systems, the equivalent occurs when an LLM API returns rate-limit errors and dozens of agents simultaneously retry with exponential backoff that is not sufficiently randomized [3].

### The Resource Exhaustion Spiral

Agents that encounter errors often consume more resources trying to handle them. An agent that retries a failed API call consumes more tokens. An agent that falls back to a more expensive model consumes more compute. An agent that escalates to human review consumes human attention, which is the scarcest resource of all.

If the error rate increases gradually -- perhaps due to a slowly degrading data source -- resource consumption increases gradually too, until the system hits a capacity limit and fails abruptly. The transition from "slightly degraded" to "completely failed" can be alarmingly fast.

## Circuit Breakers

The circuit breaker pattern, borrowed from electrical engineering, is the primary defense against cascading failures. When a component's error rate exceeds a threshold, the circuit breaker "opens" and stops sending requests to the failing component. After a cooldown period, it allows a small number of test requests through to check if the component has recovered [4].

For multi-agent systems, circuit breakers operate at multiple levels:

**Agent-level circuit breakers** monitor individual agent health. If an agent's error rate exceeds a threshold, it is removed from the active agent pool and its tasks are redistributed to other agents or queued for later processing.

**Communication circuit breakers** monitor the links between agents. If messages between Agent A and Agent B are failing at a high rate, the circuit breaker prevents further communication until the link recovers. This prevents Agent A from wasting resources on requests that will not be fulfilled.

**External dependency circuit breakers** monitor APIs, databases, and other external services. If an LLM API is returning errors, the circuit breaker prevents all agents from calling that API, allowing them to fall back to alternative providers or cached responses.

The critical design decision is what happens when a circuit breaker opens. The system needs a defined fallback behavior for every circuit breaker -- queue the task, use a simpler model, return a default response, or escalate to a human.

## The Bulkhead Pattern

The bulkhead pattern isolates components so that a failure in one does not consume resources needed by others. The name comes from the watertight compartments in a ship's hull -- if one compartment floods, the others remain dry.

In autonomous business architectures, bulkheads might separate:

- **Critical operations** (treasury management, contract execution) from **non-critical operations** (analytics, reporting) so that a surge in analytics workload cannot starve the treasury agent of resources
- **Different customer segments** so that a problematic interaction with one customer does not consume resources needed for others
- **Different agent teams** so that a cascading failure in one team is contained within that team's resource allocation [5]

Implementation typically involves dedicated resource pools (separate thread pools, separate API keys with independent rate limits, separate compute instances) for each bulkhead.

## Error Budgets

The error budget concept, pioneered by Google's Site Reliability Engineering team, provides a framework for balancing reliability with development velocity. The idea is simple: if your reliability target is 99.9%, you have an "error budget" of 0.1% -- roughly 8.7 hours per year of allowed downtime [6].

For autonomous businesses, error budgets can be extended beyond uptime to include:

- **Decision error budget**: The acceptable rate of incorrect autonomous decisions. If the system makes 10,000 decisions per day and the error budget is 0.1%, that allows 10 errors per day. Exceeding this budget triggers a shift to more conservative decision-making or increased human oversight.
- **Financial error budget**: The maximum acceptable loss from autonomous operations in a given period. Exceeding the budget triggers automated trading halts or position limits.
- **Escalation budget**: The maximum number of times per period that the system should need human intervention. Exceeding this budget suggests the system is not sufficiently autonomous and needs improvement -- or that conditions have changed beyond the system's design parameters.

The power of error budgets is that they create explicit, quantitative thresholds for intervention rather than relying on subjective human judgment about whether things "seem okay."

## Dead Letter Queues for Agent Tasks

In message-oriented systems, a dead letter queue (DLQ) captures messages that could not be processed after a defined number of attempts. The messages are preserved for later analysis and manual processing rather than being lost.

The DLQ pattern is directly applicable to autonomous agent tasks. When an agent cannot complete a task after exhausting its retry budget, the task should be moved to a dead letter queue rather than being silently dropped. The DLQ provides:

- **Durability**: Failed tasks are not lost. They can be retried when conditions improve or processed manually by human operators.
- **Diagnostics**: Analyzing the DLQ reveals patterns in failures. If a particular type of task consistently fails, the pattern points to a systematic issue rather than random failures.
- **Accountability**: The DLQ provides an audit trail showing that the system attempted to complete the task and documenting why it failed.

For autonomous businesses, the DLQ should include rich context: the original task specification, the agent that attempted it, the error encountered, the state of the system at the time of failure, and any partial results. This context is essential for either automated retry or human intervention [7].

## Building Error-Resilient Agent Networks

Putting these patterns together, an error-resilient autonomous business architecture includes:

1. **Input validation at every agent boundary**: Agents should validate inputs from other agents, not just from external sources. Trust but verify.
2. **Circuit breakers on all inter-agent communication**: With clearly defined fallback behaviors for each circuit.
3. **Bulkheads separating critical from non-critical operations**: With dedicated resource pools.
4. **Error budgets at multiple levels**: Decision, financial, and operational, with automated responses when budgets are exceeded.
5. **Dead letter queues for all task types**: With monitoring and alerting on queue depth.
6. **Kill switches at every level**: Individual agent, agent team, and system-wide, operable both automatically (based on thresholds) and manually (by human operators).
7. **Speed limits on autonomous actions**: Especially financial transactions. The cost of a 30-second delay on a trade is almost always less than the cost of an erroneous trade executed at millisecond speed.

The Knight Capital lesson is worth repeating: the cost of being fast is low when things go right and astronomical when things go wrong. For autonomous businesses, speed should be a tunable parameter, not a design assumption.

---

**References**

[1] SEC, "In the Matter of Knight Capital Americas LLC," Administrative Proceeding File No. 3-15570, October 2013.

[2] J. Wei et al., "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models," NeurIPS, 2022.

[3] N. R. Murphy et al., "Site Reliability Engineering: How Google Runs Production Systems," O'Reilly, 2016.

[4] M. Nygard, "Release It! Design and Deploy Production-Ready Software," Pragmatic Bookshelf, 2nd ed., 2018.

[5] S. Newman, "Building Microservices: Designing Fine-Grained Systems," O'Reilly, 2nd ed., 2021.

[6] B. Beyer et al., "The Site Reliability Workbook," O'Reilly, 2018.

[7] G. Hohpe and B. Woolf, "Enterprise Integration Patterns," Addison-Wesley, 2003.
