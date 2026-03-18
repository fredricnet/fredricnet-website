---
title: "Short-Term Memory"
description: "Temporary storage used by an agent to track current task progress"
---

# Short-Term Memory

**Short-Term Memory** (STM) is temporary storage that holds recent information for immediate use—enabling AI agents to maintain context, track task progress, and respond coherently throughout a single interaction. Much like human working memory, it spans from seconds to hours and gets discarded when the session ends.

## Overview

STM bridges individual AI responses into continuous conversations. Without it, every message would reset the agent to a blank slate. The CoALA framework (Cognitive Architectures for Language Agents) classifies STM as essential for conversational coherence and multi-step reasoning—transforming stateless LLMs into agents that can follow complex instructions, remember dependencies, and recover from interruptions.¹

The constraint is the context window: typically 4K–128K+ tokens depending on the model. STM must fit within these limits, creating a tension between recency and relevance. Older context loses priority unless explicitly compressed or moved to long-term storage.

### Technical Nuance

**Implementation Patterns:**

*Context Window Management:* LLM-based STM operates within the model's token limit, maintaining a rolling buffer of recent exchanges. Frameworks like LangChain provide modules such as `ConversationBufferMemory` and `ConversationSummaryMemory` that manage what stays in the window and what gets evicted.³

*Checkpointing:* Systems like LangGraph persist agent state at each reasoning step to Redis or similar stores—enabling sub‑millisecond retrieval and graceful recovery from crashes or restarts.²

*Rolling Buffers:* Simple in‑memory structures that retain the last N messages, overwriting oldest entries when capacity fills.

*Vector-Based STM:* Some architectures embed recent context as vectors for semantic similarity matching, enabling retrieval of thematically related prior exchanges even if they aren't temporally adjacent.

**Key Constraints:**
1. **Token Limits:** Everything must fit within the LLM's context window (4K–128K tokens depending on model).
2. **Relevance Decay:** Older context may become irrelevant; STM systems use summarization or extraction to compress information.
3. **Latency:** Hot‑path retrieval must be fast (<10 ms) to avoid degrading user experience during reasoning loops.

## Business Use Cases

**Customer Support Chatbots**

Support bots use STM to recall the user's account type, error details already provided, and troubleshooting steps attempted earlier in the conversation. This eliminates repetitive questioning and reduces resolution time.

**Enterprise Workflow Agents**

Agents handling multi-step processes—invoice approvals, employee onboarding, IT provisioning—use STM to track which steps are complete, which approvers have been contacted, and what blockers remain. Interruptions don't reset the process; the agent resumes where it left off.

**Development Assistants**

Coding agents retain context about current file contents, recent edits, debugging sessions, and developer preferences within a single programming session. This enables relevant suggestions, consistent style, and fewer context switches for developers.

## Broader Context

**Historical Development:**

Early chatbots used simple chat history buffers. As agent architectures evolved in the early 2020s—ReAct, Chain-of-Thought—structured STM became critical for supporting complex reasoning loops. The 2023 CoALA paper provided formal cognitive architecture distinguishing STM, long-term, and working memory.¹

**Current Trends:**

- *Hierarchical Memory:* Agents like MemGPT implement explicit decisions about when to move information from STM to long-term storage.
- *Hybrid Storage:* Combining in‑memory buffers for active context with vector databases for semantic retrieval of relevant past exchanges.
- *Compression:* LLM-based summarization of conversation history to preserve key information within token limits.

**Ethical Considerations:**

- **Privacy:** STM containing sensitive conversation data must be securely ephemeral—automatically discarded after session.
- **Bias:** If STM retains biased reasoning steps, those biases may influence subsequent decisions.
- **Transparency:** Users should know what context agents retain and for how long, particularly in regulated industries.

## Related Terms

- [Long-Term Memory](long-term-memory.md) – Persistent storage across sessions
- [Context Window](context-window.md) – Technical constraint defining STM capacity
- [State Management](state-management.md) – Broader concept encompassing STM and agent state
- [Working Memory](working-memory.md) – Cognitive psychology equivalent
- [Attention Mechanism](attention-mechanism.md) – Neural network component that selectively focuses on relevant information
- [Checkpointing](checkpointing.md) – Technique for persisting STM state

## References & Further Reading

1. **CoALA Framework** – Cognitive Architectures for Language Agents (Princeton University, 2023) – [arXiv:2309.02427](https://arxiv.org/abs/2309.02427)
2. **Redis AI Agent Memory Guide** – "How to Build AI Agents with Redis Memory Management" (2025) – [Redis Blog](https://redis.io/blog/build-smarter-ai-agents-manage-short-term-and-long-term-memory-with-redis/)
3. **LangChain Memory Documentation** – Official docs for memory management in LangChain – [LangChain Docs](https://docs.langchain.com/oss/python/langchain/short-term-memory)
4. **IBM Think Topics** – Authoritative enterprise perspective on STM implementation – [IBM](https://www.ibm.com/think/topics/ai-agent-memory)

---

*Last updated: 2026-03-18 | Status: ✏️ Polished by Echo*