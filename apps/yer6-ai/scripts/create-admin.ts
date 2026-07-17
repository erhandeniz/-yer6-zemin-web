/**
 * Bootstrap the first admin user (required before the workspace is usable, since
 * AUTH_REQUIRED=true and a fresh database has no users).
 *
 *   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=... pnpm --filter @yer6/ai db:create-admin
 *
 * Read the password from the environment (never from an argument) so it does not
 * land in shell history. Idempotent: re-running updates the password/role.
 * Never prints the password or DATABASE_URL.
 */

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (value not shown).");
    process.exitCode = 1;
    return;
  }
  if (!email || !password || password.length < 12) {
    console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD (min 12 chars). Values are not shown.");
    process.exitCode = 1;
    return;
  }

  const passwordHash = await hash(password, 10);
  const user = await prisma.user.upsert({
    where: { email },
    create: { email, name: "YER6 Admin", role: "ADMIN", passwordHash },
    update: { role: "ADMIN", passwordHash }
  });
  // Never print the email/hash — only confirm the outcome.
  const outcome = user.createdAt.getTime() === user.updatedAt.getTime() ? "created" : "updated";
  console.log(`Admin ${outcome} (role ${user.role}). Credentials were not printed.`);
}

main().catch((error) => {
  console.error("create-admin failed:", error instanceof Error ? error.message : "unknown error");
  process.exitCode = 1;
});
