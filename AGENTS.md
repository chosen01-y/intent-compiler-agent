# AGENTS.md

## Project

This repository contains Intent Compiler Agent.

Intent Compiler Agent is an open-source tool that compresses messy human prompts into structured intent and shorter AI-ready instructions.

## Agent Behavior

When working in this repository, AI coding agents should preserve the core mission: reduce unnecessary token usage by turning unclear human requests into compact structured intent before execution.

## Core Rules

- Do not turn the project into a normal prompt enhancer.
- Prioritize compression, clarity, and structured intent.
- Avoid making prompts unnecessarily longer.
- Preserve the CLI workflow.
- Do not expose or commit real API keys.
- Never commit .env.
- Keep .env.example as placeholder-only.
- Use TypeScript.
- Keep changes simple and modular.
- Prefer small improvements over large rewrites.

## Current Architecture

The core files are:

- src/agent.ts: OpenAI-powered intent compiler logic
- src/index.ts: CLI entry point
- src/schemas.ts: TypeScript intent schema
- src/token-estimator.ts: rough token savings estimator

## Target Integrations

This repo should evolve to support:

- Claude Code slash commands
- Codex skills
- Cursor MCP integration
- Generic AI-agent workflows

## Safety

Do not include real secrets, credentials, API keys, tokens, or private environment variables in commits.

If a secret is accidentally exposed, remove it from files, amend the commit, and revoke the exposed secret.
