/**
 * Marks an existing account as email-verified WITHOUT sending mail.
 *
 * For accounts that registered before the mail provider existed, or when a
 * mailbox rejects/filters the link. Runs locally against DATABASE_URL:
 *
 *   VERIFY_EMAIL=someone@example.com pnpm --filter @yer6/ai db:verify-user
 *   (or)  VERIFY_EMAIL=someone@example.com npm run db:verify-user
 *
 * Never prints credentials. Idempotent: re-running is harmless.
 */

import { prisma } from "@/lib/prisma";

async function main() {
  const email = process.env.VERIFY_EMAIL?.trim().toLowerCase();
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (value not shown).");
    process.exitCode = 1;
    return;
  }
  if (!email || !email.includes("@")) {
    console.error('Set VERIFY_EMAIL, e.g. VERIFY_EMAIL="you@example.com" npm run db:verify-user');
    process.exitCode = 1;
    return;
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, name: true, role: true, emailVerified: true }
  });

  if (!user) {
    console.error("No account found for that address. (Address itself not printed.)");
    process.exitCode = 1;
    return;
  }

  if (user.emailVerified) {
    console.log(`Already verified (role ${user.role}). Nothing to do — you can sign in.`);
    return;
  }

  await prisma.user.update({
    where: { email },
    data: { emailVerified: new Date() }
  });
  // Clear any pending token so the old link cannot be replayed.
  await prisma.verificationToken.deleteMany({ where: { identifier: email } }).catch(() => undefined);

  console.log(`Verified (role ${user.role}). You can sign in now.`);
}

main().catch((error) => {
  console.error("verify-user failed:", error instanceof Error ? error.message : "unknown error");
  process.exitCode = 1;
});
