# Intent Compiler Agent

Intent Compiler Agent is an open-source AI agent that compresses messy human prompts into structured intent and shorter AI-ready instructions.

## What It Does

- Compresses messy prompts
- Extracts the real intent
- Finds missing context
- Creates shorter prompts for Claude Code, Codex, Lovable, ChatGPT, and other AI tools
- Estimates token savings

## Why It Matters

People often waste tokens when using LLMs because prompts are too long, unclear, or repetitive.

Intent Compiler Agent helps reduce that waste by turning messy human language into clear structured instructions.

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

## Usage

Development:

npm run dev -- "your messy prompt here --tool=claude_code

Production:

npm run build
npm start -- your messy prompt here --tool=lovable

## Supported Tools

- claude_code
- codex
- lovable
- chatgpt
- generic_llm

## Status

Phase 1: Local CLI MVP.

## License

MIT
