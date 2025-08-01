import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // // Match only internationalized pathnames
  // matcher: ["/", "/(vi|en)/:path*", "/articles/:path*", "/careers/:path*"],
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
