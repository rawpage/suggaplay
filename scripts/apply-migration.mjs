import { readdirSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

dotenv.config({ path: resolve(root, ".env.local") });

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const password = process.env.SUPABASE_DB_PASSWORD;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!password || !supabaseUrl) {
    return null;
  }

  const ref = supabaseUrl.replace("https://", "").replace(".supabase.co", "");
  return `postgresql://postgres:${encodeURIComponent(password)}@db.${ref}.supabase.co:5432/postgres`;
}

const migrationArg = process.argv[2];
const migrationsDir = resolve(root, "supabase/migrations");

function listMigrations() {
  return readdirSync(migrationsDir)
    .filter((name) => name.endsWith(".sql"))
    .sort();
}

const databaseUrl = getDatabaseUrl();

if (!databaseUrl) {
  console.error(
    "Missing database connection.\n\nAdd to .env.local (choose one):\n\n" +
      "  DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres\n\n" +
      "  — or —\n\n" +
      "  SUPABASE_DB_PASSWORD=YOUR_PASSWORD\n\n" +
      "Find password: Supabase Dashboard → Project Settings → Database → Database password",
  );
  process.exit(1);
}

const migrations = migrationArg
  ? [migrationArg.endsWith(".sql") ? migrationArg : `${migrationArg}.sql`]
  : listMigrations();

const client = new pg.Client({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log("Connected.");

  for (const file of migrations) {
    const migrationPath = resolve(migrationsDir, file);
    const sql = readFileSync(migrationPath, "utf8");
    console.log(`Applying ${file}...`);
    await client.query(sql);
    console.log(`  ✓ ${file}`);
  }

  console.log("\nMigrations applied successfully.");
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exit(1);
} finally {
  await client.end();
}
