---
title: "AI Agent Architectures"
description: "ReAct, Chain-of-Thought, tool-use, and the reasoning patterns enabling autonomous business"
weight: 1
linkTitle: "Architecture"
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
prev: 02-foundations
next: b-agents
---

## From If-Then to Reasoning

Traditional business automation runs on rules. If the invoice total exceeds $10,000, route to senior approval. If inventory drops below threshold, trigger reorder. These systems are reliable, predictable, and fundamentally incapable of handling situations their designers did not anticipate.

The architectures enabling autonomous business are different. They reason about novel situations, decompose complex problems into steps, use tools they were not explicitly programmed to use, and adjust their approach based on results. Understanding these architectural patterns is essential to evaluating what autonomous businesses can and cannot do today.

## Chain-of-Thought: Teaching Machines to Show Their Work

Chain-of-Thought (CoT) prompting, introduced by Wei et al. in 2022, was deceptively simple: instead of asking a language model for an answer, ask it to reason through the problem step by step [1]. The results were dramatic -- arithmetic accuracy on grade-school math problems jumped from 18% to 57% on the GSM8K benchmark simply by adding "let's think step by step" to the prompt.

Why does this matter for autonomous business? Because business decisions are rarely single-step. Pricing a product requires understanding costs, competitive dynamics, demand elasticity, and brand positioning. A system that can only produce answers cannot handle this. A system that can reason through intermediate steps can.

CoT established a foundational insight: large language models contain latent reasoning capabilities that are activated by the right prompting structure. The model does not gain new knowledge from "think step by step" -- it gains the ability to use knowledge it already has in a structured way.

The limitation of pure CoT is that it is entirely internal. The model reasons but does not act. It produces a chain of thoughts that may be brilliant or may be confidently wrong, with no mechanism to check its reasoning against reality. For autonomous business, reasoning without action is necessary but not sufficient.

## ReAct: Reasoning Meets Action

ReAct (Reasoning + Acting), introduced by Yao et al. in 2022, solved the action problem by interleaving reasoning steps with actions in the environment [2]. Instead of thinking through a problem entirely in its head, a ReAct agent alternates between:

1. **Thought**: Reasoning about the current situation and what to do next
2. **Action**: Executing a concrete step (searching the web, querying a database, calling an API)
3. **Observation**: Incorporating the result of the action into subsequent reasoning

This is the pattern that makes autonomous business technically feasible. Consider a ReAct agent managing supplier relationships:

- **Thought**: "Current supplier pricing has increased 12% this quarter. I should check alternative suppliers."
- **Action**: Query supplier database for alternatives meeting quality specifications.
- **Observation**: Three alternatives found, pricing 8-15% lower.
- **Thought**: "Supplier B meets quality specs and offers 15% savings, but has no track record with us. I should check reliability ratings."
- **Action**: Query industry reliability database for Supplier B.
- **Observation**: 94% on-time delivery rate, 4.2/5 quality rating.
- **Thought**: "Acceptable risk. I'll prepare a comparison report for procurement review."

Each step is grounded in real data rather than hallucinated reasoning. The agent can discover that its initial assumptions were wrong and adjust. It can encounter unexpected information and incorporate it. This is qualitatively different from both rule-based automation and pure reasoning.

ReAct's significance for autonomous business extends beyond individual problem-solving. It establishes the cognitive pattern that makes open-ended business operation possible: an agent that can reason about what it does not know, take actions to learn, and revise its plans based on what it discovers.

## Tool Use and Function Calling

The practical power of reasoning architectures comes from tool use. An agent that can reason brilliantly but has no way to interact with the world is an expensive thinking machine. An agent that can call functions -- send emails, query databases, execute transactions, generate documents -- becomes an operator.

Function calling, standardized across major LLM providers in 2023-2024, gives agents structured access to external tools [3]. The model describes what it wants to do in a structured format (typically JSON), and the runtime executes the corresponding function and returns the result. This is the mechanism underlying every practical AI agent today.

The architecture looks like this:

```
User/System Goal
       |
   LLM Reasoning (ReAct/CoT)
       |
   Function Call Decision
       |
   Tool Execution (API call, DB query, file operation)
       |
   Result Observation
       |
   Further Reasoning -> Next Action or Final Response
```

For autonomous business, the tool set defines the operational boundary. An agent with access to email, calendar, and CRM tools can manage customer relationships. Add financial APIs and it can manage accounts. Add procurement systems and it can manage supply chains. The architecture is the same; the capability boundary is determined by which tools the agent can use.

This has an important implication: expanding an autonomous business's capabilities does not require retraining the AI. It requires giving the agent access to new tools. The reasoning architecture generalizes; the tools specialize.

## Planning: From Reactive to Strategic

Reasoning and tool-use produce capable reactive agents -- systems that can handle problems as they arise. Autonomous business also requires proactive planning: identifying opportunities, anticipating problems, and allocating resources over time.

Several planning architectures have emerged:

**Tree of Thoughts (ToT)** extends Chain-of-Thought by exploring multiple reasoning paths simultaneously, evaluating each, and selecting the most promising [4]. This enables strategic decision-making where multiple options need to be compared -- exactly the kind of reasoning required for business planning.

**Reflexion** adds a self-evaluation loop: after completing a task, the agent evaluates its own performance and generates lessons for future attempts [5]. This creates a learning mechanism that improves business operations over time without human feedback.

**Plan-and-Execute** architectures separate planning from execution: one agent (or reasoning phase) creates a high-level plan, then hands individual steps to specialized executors [6]. This mirrors the management structure of human organizations -- a strategic planner delegates to operational specialists.

The practical significance is that these are not competing approaches but complementary layers. A sophisticated autonomous business agent would use CoT for routine decisions, ReAct for operational tasks requiring real-world interaction, ToT for strategic planning, and Reflexion for continuous improvement. The architecture is less a single pattern than a cognitive toolkit.

## Why This Differs From Traditional Automation

The distinction bears emphasis because it determines what governance frameworks are appropriate.

Traditional automation is **deterministic**: given the same inputs, it produces the same outputs. You can fully test it, fully audit it, and fully predict its behavior. Governance is straightforward -- verify the rules are correct and the system follows them.

Reasoning-based architectures are **non-deterministic**: the same inputs may produce different outputs depending on the model's reasoning path, the information discovered through tool use, and the sequence of observations. You cannot fully test all possible behaviors because the space of possible reasoning chains is effectively infinite.

This non-determinism is both the source of their power (they can handle novel situations) and the source of governance challenges (you cannot predict exactly what they will do). For autonomous business, this means traditional audit and compliance approaches are insufficient. New frameworks -- continuous monitoring, behavioral bounds, outcome-based evaluation -- are required.

The architectures described here are the cognitive foundation of autonomous business. In the next section, we examine how these architectures are instantiated in individual agents with perception, memory, and learning capabilities.

## References

[1] Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903.

[2] Yao, S. et al. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." arXiv:2210.03629.

[3] OpenAI. (2023). "Function Calling and Other API Updates." OpenAI Blog.

[4] Yao, S. et al. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." arXiv:2305.10601.

[5] Shinn, N. et al. (2023). "Reflexion: Language Agents with Verbal Reinforcement Learning." arXiv:2303.11366.

[6] Wang, L. et al. (2023). "Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning." arXiv:2305.04091.

[7] Sumers, T. R. et al. (2024). "Cognitive Architectures for Language Agents." arXiv:2309.02427.

[8] Xi, Z. et al. (2023). "The Rise and Potential of Large Language Model Based Agents: A Survey." arXiv:2309.07864.
