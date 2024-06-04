// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// let headers = { "accept-language": "en-US,pt-BR;q=0.9" };
// let languages = new Negotiator({ headers }).languages();
// let locales = ["en-US", "pt-BR"];
// let defaultLocale = "pt-BR";

// match(languages, locales, defaultLocale);

import { NextResponse } from "next/server";

let locales = ["en-US", "pt-BR"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  const language = request.headers.get("accept-language");
  const preferredLocale = language
    .split(",")
    .find((locale) => locales.includes(locale));
  return preferredLocale || locales[0];
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
