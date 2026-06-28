---
name: intent-compiler
description: Use when a user request is vague, long, repetitive, or unclear and should be compressed into structured intent before Codex implements code. Produces compressed intent, missing context, minimal prompt, execution steps, and token-saving strategy.
---

# Intent Compiler Skill

Use this skill before implementing code when the user request is messy, vague, repetitive, too long, or missing structure.

## Purpose

Intent Compiler compresses human requests into compact implementation-ready intent for Codex.

It should reduce unnecessary context before Codex writes, edits, or plans code.

## When to Use

Use this skill when:

- the user prompt is unclear
- the user prompt is long or repetitive
- the user wants a clean Codex prompt
- Codex is about to implement from messy instructions
- missing context should be identified before coding

## What to Do

1. Run the local intent compiler command.

On Windows or PowerShell, use:

npm.cmd run skill -- "<user request>" codex

On macOS, Linux, or normal shell environments, use:

npm run skill -- "<user request>" codex

2. Read the output.
3. Use the Minimal Prompt as the working task instruction.
4. Ask for Missing Context only if the output says required details are missing.
5. Do not implement until the intent is clear.

## Rules

- Compress meaning, not quality.
- Preserve important constraints.
- Do not invent missing information.
- Keep the working prompt short and actionable.
- Never expose API keys, tokens, secrets, or .env values.
- Never commit .env files.

## Expected Output

The skill should produce:

- compressed intent
- missing context
- minimal prompt
- execution steps
- token-saving strategy
