import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { writeAudit } from "@/server/audit/audit";

type Credentials = { email?: string; password?: string } | undefined;

export async function authorizeCredentials(credentials: Credentials) {
  const email = credentials?.email?.trim().toLowerCase();
  const password = credentials?.password;
  if (!email || !password || email.length > 254 || password.length > 128) return null;

  if (
    process.env.ADMIN_EMAIL &&
    process.env.ADMIN_PASSWORD &&
    email === process.env.ADMIN_EMAIL.trim().toLowerCase() &&
    password === process.env.ADMIN_PASSWORD
  ) {
    void writeAudit({ action: "LOGIN_SUCCESS", entity: "User", entityId: "admin-super" });
    return {
      id: "admin-super",
      email,
      name: "Erhan Deniz",
      role: "SUPER_ADMIN",
      organizationId: "yer6",
      title: "Kurucu & Geoteknik Proje Yöneticisi"
    };
  }

  if (
    process.env.DEMO_EMAIL &&
    process.env.DEMO_PASSWORD &&
    email === process.env.DEMO_EMAIL.trim().toLowerCase() &&
    password === process.env.DEMO_PASSWORD
  ) {
    void writeAudit({ action: "LOGIN_DEMO", entity: "User", entityId: "demo-engineer" });
    return { id: "demo-engineer", email, name: "Demo Engineer", role: "DEMO" };
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user?.passwordHash && (await compare(password, user.passwordHash))) {
      // Email verification gate — ONLY for self-registered roles and ONLY while an
  // email provider is configured (otherwise we would block on a mail we never
  // send). Privileged/legacy roles (ADMIN, SUPER_ADMIN, ENGINEER, MANAGER,
  // COMPANY_ADMIN) are never locked out by this check.
  const verificationEnforced = Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
  const gatedRole = user.role === "MEMBER" || user.role === "VIEWER";
  if (verificationEnforced && gatedRole && !user.emailVerified) {
    void writeAudit({
      action: "LOGIN_FAILED",
      entity: "User",
      entityId: user.id,
      metadata: { reason: "email_not_verified" }
    });
    return null;
  }

  void writeAudit({ action: "LOGIN_SUCCESS", entity: "User", entityId: user.id, userId: user.id });
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        role: user.role,
        organizationId: user.organizationId,
        title: user.title
      };
    }
  } catch {
    // If DB is unreachable or user missing, fallback safely
  }

  void writeAudit({
    action: "LOGIN_FAILED",
    entity: "User",
    metadata: { emailDomain: email.split("@")[1] ?? "unknown" }
  });
  return null;
}

export const authOptions: NextAuthOptions = {
  // SECURITY: no hardcoded fallback — a committed secret is public knowledge
  // and would let anyone forge session tokens. Fail closed if unset.
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: authorizeCredentials
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.organizationId = user.organizationId ?? null;
        token.title = user.title ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.organizationId = (token.organizationId as string | null) ?? null;
        session.user.title = (token.title as string | null) ?? null;
      }
      return session;
    }
  },
  events: {
    async signOut({ token }) {
      void writeAudit({
        action: "LOGOUT",
        entity: "User",
        entityId: (token?.id as string) ?? null,
        userId: (token?.id as string) ?? null
      });
    }
  }
};
