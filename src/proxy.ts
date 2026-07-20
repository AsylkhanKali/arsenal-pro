import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "./app/i18n";

// Redirect the bare root to the default locale. All real content lives
// under /[lang]; the [lang] layout is the app's root layout.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
