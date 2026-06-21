import "dotenv/config";
import { compileIntent } from "./agent.js";
import { calculateTokenSavings } from "./token-estimator.js";

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Intent Compiler Agent

Usage:
  npm run dev -- "your messy prompt here"

Optional target tool:
  npm run dev -- "your messy prompt here" --tool=claude_code

Supported tools:
  claude_code
  codex
  lovable
  chatgpt
  generic_llm
`);
    process.exit(0);
  }

  const toolArg = args.find((arg) => arg.startsWith("--tool="));
  const targetTool = toolArg ? toolArg.replace("--tool=", "") : "generic_llm";

  const userPrompt = args
    .filter((arg) => !arg.startsWith("--tool="))
    .join(" ");

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in .env file.");
  }

  console.log("\nCompiling intent...\n");

  const result = await compileIntent(userPrompt, targetTool);

  const savings = calculateTokenSavings(userPrompt, result.minimal_prompt);

  console.log("====================================");
  console.log("INTENT COMPILER RESULT");
  console.log("====================================\n");

  console.log("Compressed Intent:");
  console.log(JSON.stringify(result.compressed_intent, null, 2));

  console.log("\nMissing Context:");
  if (result.missing_context.length === 0) {
    console.log("- None");
  } else {
    result.missing_context.forEach((item) => console.log(`- ${item}`));
  }

  console.log("\nMinimal Prompt:");
  console.log(result.minimal_prompt);

  console.log("\nExecution Steps:");
  result.execution_steps.forEach((step, index) => {
    console.log(`${index + 1}. ${step}`);
  });

  console.log("\nToken Saving Estimate:");
  console.log(`Original tokens: ~${savings.originalTokens}`);
  console.log(`Compressed tokens: ~${savings.compressedTokens}`);
  console.log(`Saved tokens: ~${savings.savedTokens}`);
  console.log(`Saved percent: ~${savings.savedPercent}%`);

  console.log("\nToken Saving Strategy:");
  result.token_saving_strategy.forEach((item) => {
    console.log(`- ${item}`);
  });

  console.log("\n====================================\n");
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});