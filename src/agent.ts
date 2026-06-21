
import OpenAI from "openai";
import type { IntentCompilation } from "./schemas.js";

function safeJsonParse(text: string): IntentCompilation {
  try {
    return JSON.parse(text) as IntentCompilation;
  } catch {
    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("Model did not return JSON.");
    }

    const jsonText = text.slice(firstBrace, lastBrace + 1);
    return JSON.parse(jsonText) as IntentCompilation;
  }
}

export async function compileIntent(
  userPrompt: string,
  targetTool: string = "generic_llm"
): Promise<IntentCompilation> {
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const systemPrompt = `
You are Intent Compiler Agent.

Your job is NOT to make prompts longer.
Your job is to reduce unnecessary token usage by converting messy human prompts into compact structured intent.

You must return ONLY valid JSON.
Do not include markdown.
Do not include explanations outside JSON.

The JSON must match this structure:

{
  "original_prompt": "string",
  "compressed_intent": {
    "task": "string",
    "domain": "string",
    "goal": "string",
    "actors": ["string"],
    "features": ["string"],
    "constraints": ["string"],
    "output_type": "string",
    "target_tool": "claude_code | codex | lovable | chatgpt | generic_llm"
  },
  "missing_context": ["string"],
  "minimal_prompt": "string",
  "execution_steps": ["string"],
  "token_saving_strategy": ["string"]
}

Rules:
- Compress meaning, not quality.
- Remove unnecessary storytelling.
- Keep only what the target AI tool needs.
- If target tool is Claude Code or Codex, make the minimal_prompt implementation-focused.
- If target tool is Lovable, make the minimal_prompt UI/UX and product-flow focused.
- If information is missing, list it under missing_context.
- Do not invent sensitive details.
- Keep minimal_prompt short but useful.
`;

  const response = await client.responses.create({
    model,
    input: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: `Target tool: ${targetTool}\n\nUser prompt:\n${userPrompt}`
      }
    ]
  });

  const outputText = response.output_text;

  if (!outputText) {
    throw new Error("No output received from model.");
  }

  return safeJsonParse(outputText);
}