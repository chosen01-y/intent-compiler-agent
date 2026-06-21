export type TargetTool =
  | "claude_code"
  | "codex"
  | "lovable"
  | "chatgpt"
  | "generic_llm";

export type IntentCompilation = {
  original_prompt: string;
  compressed_intent: {
    task: string;
    domain: string;
    goal: string;
    actors: string[];
    features: string[];
    constraints: string[];
    output_type: string;
    target_tool: TargetTool;
  };
  missing_context: string[];
  minimal_prompt: string;
  execution_steps: string[];
  token_saving_strategy: string[];
};