# Intent Compiler Skill

Use this skill when a user gives a messy, vague, long, repetitive, or unclear request that should be compressed before an AI agent acts on it.

## Purpose

Intent Compiler Skill helps AI coding agents reduce unnecessary token usage by converting messy human requests into compact structured intent.

This skill is not a normal prompt enhancer. It should not make prompts longer unless extra clarity is required.

## When to Use

Use this skill when:

- The user request is vague
- The user prompt is too long
- The prompt repeats context
- The goal is unclear
- The agent is about to implement code from an unclear request
- The user wants a Claude Code, Codex, Cursor, Lovable, or ChatGPT-ready instruction

## What to Produce

The skill should produce:

- compressed intent
- missing context
- minimal prompt
- execution steps
- token-saving strategy

## Local Command

Run the local Intent Compiler CLI:

npm run dev -- "<user request>" --tool=codex

## Rules

- Compress meaning, not quality.
- Do not remove important constraints.
- Do not invent missing information.
- Keep the final prompt short and actionable.
- If required details are missing, list them clearly.
- Never expose API keys or secrets.
- Never commit .env files.

## Output Usage

After generating the compressed intent, use the minimal prompt as the working instruction for the coding agent.
