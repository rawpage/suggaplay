import { readFileSync } from "node:fs";
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

const databaseUrl = getDatabaseUrl();

if (!databaseUrl) {
  console.error(
    "Missing database connection.\n\nAdd to .env.local (choose one):\n\n" +
      "  DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.sectgzwfazmewxppoogm.supabase.co:5432/postgres\n\n" +
      "  — or —\n\n" +
      "  SUPABASE_DB_PASSWORD=YOUR_PASSWORD\n\n" +
      "Find password: Supabase Dashboard → Project Settings → Database → Database password",
  );
  process.exit(1);
}

const migrationPath = resolve(
  root,
  "supabase/migrations/20250627000000_initial_schema.sql",
);
const sql = readFileSync(migrationPath, "utf8");

const client = new pg.Client({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log("Connected. Applying SuggaPlay migration...");
  await client.query(sql);
  console.log("Migration applied successfully.");

  const { rows } = await client.query(`
    select table_name
    from information_schema.tables
    where table_schema = 'public'
      and table_type = 'BASE TABLE'
    order by table_name;
  `);

  console.log("\nPublic tables:");
  for (const row of rows) {
    console.log(`  - ${row.table_name}`);
  }
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exit(1);
} finally {
  await client.end();
}
