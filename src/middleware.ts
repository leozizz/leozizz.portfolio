import createMiddleware from "next-intl/middleware";
import { i18n } from "./config/i18n.config";

export default createMiddleware(i18n);

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
