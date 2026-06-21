# Agent Skill Usage

Intent Compiler Agent can be used as a reusable skill for AI coding agents.

The goal is to let tools like Claude Code, Cursor, Codex, and other agents compress messy human requests before spending tokens on implementation.

## Why This Exists

Many AI agents waste tokens because users give long, unclear, repetitive, or incomplete instructions.

Intent Compiler Agent acts as a pre-processing skill.

It turns messy requests into:

- compressed intent
- missing context
- minimal prompt
- execution steps
- token-saving strategy

## Usage as a Local Skill

Run:

npm run skill -- "your messy request here" codex

Example:

npm run skill -- "Build a simple patient booking form for a healthcare app" codex

## Claude Code Usage

Claude Code can use the command file at:

.claude/commands/intent-compile.md

The intended workflow is:

/intent-compile <request>

Then Claude Code should run the local Intent Compiler command and use the minimal prompt as the working instruction.

## Codex Usage

Codex and other agents can read:

skills/intent-compiler/SKILL.md

The skill tells the agent when to compress a user request before implementation.

## Current Status

This is Phase 2.

The project now supports:

- local CLI usage
- local skill script usage
- Claude Code command instructions
- Codex-style skill instructions
- AGENTS.md guidance for coding agents
