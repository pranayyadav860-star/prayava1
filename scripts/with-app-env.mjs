import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("[with-app-env] No command provided");
  process.exit(1);
}

const command = args[0];
const commandArgs = args.slice(1);

const isWindows = process.platform === "win32";

const executable = isWindows
  ? resolve(
      process.cwd(),
      "node_modules",
      ".bin",
      `${command}.cmd`,
    )
  : resolve(
      process.cwd(),
      "node_modules",
      ".bin",
      command,
    );

if (!existsSync(executable)) {
  console.error(`[with-app-env] executable not found: ${executable}`);
  process.exit(1);
}

const child = spawn(executable, commandArgs, {
  stdio: "inherit",
  shell: false,
  env: {
    ...process.env,
  },
});

child.on("error", (error) => {
  console.error(
    `[with-app-env] failed to run ${command}: ${error.message}`,
  );
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});