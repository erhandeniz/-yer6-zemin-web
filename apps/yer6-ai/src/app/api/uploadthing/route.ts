import { getServerSession } from "next-auth";
import type { NextRequest } from "next/server";
import { createRouteHandler } from "uploadthing/next";
import { authOptions } from "@/lib/auth";
import { bindUploadPrincipal, clearUploadPrincipal, uploadRouter } from "./core";

const handlers = createRouteHandler({ router: uploadRouter });

export const GET = handlers.GET;

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  bindUploadPrincipal(
    request,
    session
      ? {
          id: session.user.id,
          role: session.user.role
        }
      : null
  );

  try {
    return await handlers.POST(request);
  } finally {
    clearUploadPrincipal(request);
  }
}
