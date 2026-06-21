# Intent Compile

Use this command when the user gives a messy, vague, long, repetitive, or unclear request.

Your job is to use the local Intent Compiler Agent to compress the user request into:

- structured intent
- missing context
- minimal implementation prompt
- execution steps
- token-saving strategy

## How to use

When the user runs:

/intent-compile <request>

Run the local CLI command:

npm run dev -- "<request> --tool=claude_code

Then use the output as the cleaned task brief before coding.

## Rules

- Do not start implementation before the intent is clear.
- Prefer compressed structured intent over long natural-language restatements.
- Ask for missing context only when required.
- Keep the final implementation prompt short and actionable.
- Use the minimal prompt as the working instruction.
