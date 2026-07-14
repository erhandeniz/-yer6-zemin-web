import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

type Credentials = { email?: string; password?: string } | undefined;

export async function authorizeCredentials(credentials: Credentials) {
  const email = credentials?.email?.trim().toLowerCase();
  const password = credentials?.password;
  if (!email || !password || email.length > 254 || password.length > 128) return null;

  if (
    process.env.DEMO_EMAIL &&
    process.env.DEMO_PASSWORD &&
    email === process.env.DEMO_EMAIL.trim().toLowerCase() &&
    password === process.env.DEMO_PASSWORD
  ) {
    return { id: "demo-engineer", email, name: "Demo Engineer", role: "ENGINEER" };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user?.passwordHash || !(await compare(password, user.passwordHash))) return null;
  return { id: user.id, email: user.email, name: user.name, image: user.image, role: user.role };
}

export const authOptions: NextAuthOptions = {
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
      if (user) { token.id = user.id; token.role = user.role; }
      return token;
    },
    async session({ session, token }) {
      if (session.user) { session.user.id = token.id as string; session.user.role = token.role as string; }
      return session;
    }
  }
};
