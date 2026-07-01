#!/usr/bin/env node
/**
 * Push required website env vars from .env.local to Vercel (all environments).
 * Usage: node scripts/setup-vercel-env.mjs [--scope bukikoshoni]
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envPath = resolve(root, ".env.local");

const scopeFlag = process.argv.includes("--scope")
  ? ["--scope", process.argv[process.argv.indexOf("--scope") + 1]]
  : ["--scope", "bukikoshoni"];

const ENVIRONMENTS = ["production", "preview", "development"];

const REQUIRED = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "ADMIN_SECRET",
];

function parseEnvFile(path) {
  const vars = {};
  if (!existsSync(path)) return vars;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

function appendEnvLocal(key, value) {
  const line = `${key}=${value}\n`;
  for (const path of [envPath, resolve(root, "apps/website/.env.local")]) {
    if (!existsSync(path)) continue;
    const content = readFileSync(path, "utf8");
    if (content.includes(`${key}=`)) continue;
    writeFileSync(path, content.endsWith("\n") ? content + line : content + "\n" + line);
    console.log(`  + saved ${key} to ${path.replace(root + "/", "")}`);
  }
}

function addVercelEnv(name, value, environment) {
  const args = [
    "vercel",
    "env",
    "add",
    name,
    environment,
    "--value",
    value,
    "--yes",
    "--sensitive",
    ...scopeFlag,
  ];

  const result = spawnSync("npx", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  });

  const out = (result.stdout + result.stderr).trim();
  if (result.status !== 0) {
    if (out.includes("already exists") || out.includes("Environment Variable already exists")) {
      console.log(`  ~ ${name} (${environment}) already exists — use dashboard to update if needed`);
      return "exists";
    }
    console.error(`  ✗ ${name} (${environment}): ${out}`);
    return "error";
  }

  console.log(`  ✓ ${name} (${environment})`);
  return "added";
}

const local = parseEnvFile(envPath);

if (!local.NEXT_PUBLIC_SUPABASE_URL || !local.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("Missing Supabase keys in .env.local");
  process.exit(1);
}

if (!local.SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

if (!local.NEXT_PUBLIC_SITE_URL) {
  local.NEXT_PUBLIC_SITE_URL = "https://www.suggaplay.com";
}

if (!local.ADMIN_SECRET) {
  local.ADMIN_SECRET = randomBytes(32).toString("hex");
  console.log("Generated ADMIN_SECRET for waitlist dashboard");
  appendEnvLocal("ADMIN_SECRET", local.ADMIN_SECRET);
}

console.log(`\nConfiguring Vercel env for sugga-play ${scopeFlag.join(" ")}\n`);

let errors = 0;

for (const name of REQUIRED) {
  const value = local[name];
  if (!value) {
    console.error(`Missing value for ${name}`);
    errors++;
    continue;
  }

  const sensitive = name.includes("SECRET") || name.includes("SERVICE_ROLE");
  for (const env of ENVIRONMENTS) {
    const useSensitive = sensitive && env !== "development";
    const args = [
      "vercel",
      "env",
      "add",
      name,
      env,
      "--value",
      value,
      "--yes",
      ...(useSensitive ? ["--sensitive"] : ["--no-sensitive"]),
      ...scopeFlag,
    ];

    const result = spawnSync("npx", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });

    const out = (result.stdout + result.stderr).trim();
    if (result.status !== 0) {
      if (out.toLowerCase().includes("already exists")) {
        console.log(`  ~ ${name} (${env}) already exists`);
        continue;
      }
      console.error(`  ✗ ${name} (${env}): ${out}`);
      errors++;
      continue;
    }
    console.log(`  ✓ ${name} (${env})`);
  }
}

console.log(errors ? "\nFinished with errors." : "\nDone. Redeploy production to apply new env vars.");
process.exit(errors ? 1 : 0);
