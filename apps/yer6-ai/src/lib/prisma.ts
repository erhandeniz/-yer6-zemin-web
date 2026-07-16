import { PrismaClient } from "@prisma/client/edge";
import type { PrismaClient as BasePrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Cloudflare Workers–compatible Prisma client.
 *
 * The app runs on OpenNext/Cloudflare Workers, where the standard binary query
 * engine cannot run. We use Prisma Postgres over the Accelerate protocol (the
 * edge client + `withAccelerate()`), which talks to the database over HTTP and
 * needs no TCP socket or native engine bundle.
 *
 * DATABASE_URL must be a Prisma Postgres / Accelerate connection string
 * (`prisma+postgres://…` or `prisma://…`). It is read from the environment and
 * never logged.
 *
 * Construction is lazy: the client (and its background connection) is only
 * created on first real use. Every DB code path already guards on
 * `process.env.DATABASE_URL`, so when the variable is absent nothing is
 * constructed and the app runs in read-only fallback mode.
 */
function buildClient() {
  return new PrismaClient().$extends(withAccelerate());
}

type PrismaEdgeClient = ReturnType<typeof buildClient>;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaEdgeClient };

function getClient(): PrismaEdgeClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = buildClient();
  }
  return globalForPrisma.prisma;
}

// Runtime object is the Accelerate edge client (required on Workers); it is
// exposed under the standard PrismaClient type so every consumer keeps its
// familiar model/adapter typings. `import type` above keeps the node engine out
// of the Worker bundle.
export const prisma = new Proxy({} as BasePrismaClient, {
  get(_target, property, receiver) {
    const value = Reflect.get(getClient(), property, receiver);
    return typeof value === "function" ? value.bind(getClient()) : value;
  }
}) as BasePrismaClient;
