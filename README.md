# Intent Compiler Agent

A token-saving intent compiler for AI coding agents.

Intent Compiler Agent is an open-source AI-agent skill that compresses messy human requests into structured intent and minimal AI-ready instructions before tools like Claude Code, Codex, Cursor, Lovable, and ChatGPT act on them.

## Why This Exists

AI agents waste tokens when users give long, vague, repetitive, or unclear instructions.

Intent Compiler Agent acts as a pre-processing layer between human intention and AI execution.

It turns messy prompts into:

- compressed intent
- missing context
- minimal prompt
- execution steps
- token-saving strategy

## Core Idea

Instead of sending a messy request directly to an AI coding agent, send it through Intent Compiler Agent first.

Human request -> Intent Compiler Agent -> structured intent -> AI coding agent

## Use Cases

- Claude Code task preparation
- Codex task preparation
- Cursor agent workflows
- Lovable prompt preparation
- ChatGPT prompt compression
- Reducing repeated context in AI workflows
- Creating cleaner implementation instructions

## Example

Input:

I want Claude Code to build a dashboard for doctors in my healthcare app. It must show appointments, sick notes, payments, patient requests, and claims, but it should not break the current app.

Output:

Build a doctor dashboard in the healthcare app showing appointments, sick notes, payments, patient requests, and claims without breaking current app functionality.

## Install

npm install

## Setup

Create a .env file with:

OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4.1-mini

Never upload your real .env file to GitHub.

## CLI Usage

Development:

npm run dev -- "your messy prompt here" --tool=claude_code

Production:

npm run build
npm start -- "your messy prompt here" --tool=lovable

## Skill Usage

Run the reusable skill command:

npm run skill -- "your messy request here" codex

Example:

npm run skill -- "Build a simple patient booking form for a healthcare app" codex

## Agent Integrations

This repository includes early support for AI-agent workflows:

- Claude Code command: .claude/commands/intent-compile.md
- Codex-style skill: skills/intent-compiler/SKILL.md
- Agent guidance: AGENTS.md
- Skill usage docs: docs/agent-skill-usage.md
- Helper script: skills/intent-compiler/scripts/compile-intent.js

## Supported Targets

- claude_code
- codex
- lovable
- chatgpt
- generic_llm

## Current Status

Phase 2 complete: local CLI plus agent-skill integration foundation.

## Long-Term Vision

The long-term vision is to create an AI-native intent layer that helps machines understand human goals with less wasted computation.

This is the first step toward a universal intent compiler for AI agents.

## License

MIT
