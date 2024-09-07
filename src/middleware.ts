import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // redirect authenticated user if accessing /signin, what's the point anyway?
  if (token && req.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
  }

  // redirect unauthenticated user if accessing matches route except signin, because they want to signin
  if (!token && req.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(req.nextUrl.origin + "/signin");
  }
}

export const config = {
  matcher: ["/signin", "/dashboard/:path*"],
};
