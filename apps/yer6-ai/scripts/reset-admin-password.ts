/**
 * Reset the password of the EXISTING permanent admin — never creates a user.
 *
 *   read -rs ADMIN_PASSWORD ...   # enter the new password hidden
 *   pnpm --filter @yer6/ai db:reset-admin-password
 *
 * - Requires exactly one ADMIN user; refuses to run otherwise (no duplicates,
 *   no ambiguity).
 * - Reads the new password ONLY from the ADMIN_PASSWORD environment variable.
 * - Updates ONLY the password hash; the email address, role, id and every other
 *   record/permission are preserved untouched.
 * - Never prints or logs the password, hash, email or any secret.
 *
 * The 12–128 character bound matches the login validator (authorizeCredentials
 * rejects passwords longer than 128 chars), preventing a mismatch where a hash
 * is stored for a password the login flow would never accept.
 */

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (value not shown).");
    process.exitCode = 1;
    return;
  }
  const password = process.env.ADMIN_PASSWORD;
  if (!password || password.length < 12 || password.length > 128) {
    console.error("Set ADMIN_PASSWORD to 12–128 characters. The value is never shown.");
    process.exitCode = 1;
    return;
  }

  const admins = await prisma.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
  if (admins.length === 0) {
    console.error("No ADMIN user exists. Refusing to create one — run db:create-admin first.");
    process.exitCode = 1;
    return;
  }
  if (admins.length > 1) {
    console.error(`Expected exactly one ADMIN user, found ${admins.length}. Refusing to guess.`);
    process.exitCode = 1;
    return;
  }

  const passwordHash = await hash(password, 10);
  // Update ONLY the password hash; email, role, id and everything else stay as-is.
  await prisma.user.update({ where: { id: admins[0].id }, data: { passwordHash } });
  console.log("Password reset for the existing ADMIN (email, role and records preserved).");
}

main().catch((error) => {
  console.error("reset-admin-password failed:", error instanceof Error ? error.message : "unknown error");
  process.exitCode = 1;
});
