import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const repoRoot = resolve(__dirname, "..", "..", "..");

const userRequest = process.argv[2];
const targetTool = process.argv[3] || "codex";

if (!userRequest) {
  console.error("Usage: node skills/intent-compiler/scripts/compile-intent.js \"your request\" codex");
  process.exit(1);
}

const result = spawnSync(
  "npm",
  ["run", "dev", "--", userRequest, `--tool=${targetTool}`],
  {
    cwd: repoRoot,
    stdio: "inherit",
    shell: true
  }
);

process.exit(result.status ?? 1);