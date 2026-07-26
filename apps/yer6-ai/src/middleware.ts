import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

// SECURITY: never fall back to a hardcoded secret. A committed default is
// public knowledge — anyone could forge a valid session JWT with it and walk
// past this middleware. Missing secret must fail closed, not open.
const AUTH_SECRET = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/demo")) return NextResponse.next();
  if (process.env.AUTH_REQUIRED !== "true") return NextResponse.next();
  const token = await getToken({ req: request, secret: AUTH_SECRET });
  if (token) return NextResponse.next();

  const signIn = new URL("/login", request.url);
  signIn.searchParams.set("callbackUrl", `${request.nextUrl.pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(signIn);
}

export const config = {
  // /hakkinda is the PUBLIC founder profile (Package C) — reachable signed out.
  matcher: ["/((?!api|_next/static|_next/image|login|demo|hakkinda|.*\\..*).*)"]
};
