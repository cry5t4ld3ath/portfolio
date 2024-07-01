import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales, pathnames } from './config';

 
export default createMiddleware({

   defaultLocale,
   locales,
   localePrefix,
   pathnames

});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
   // Enable a redirect to a matching locale at the root
   '/',

   // Set a cookie to remember the previous locale for
   // all requests that have a locale prefix
   '/(fa|en)/:path*',

   // Enable redirects that add missing locales
   // (e.g. `/pathnames` -> `/en/pathnames`)
   '/((?!_next|_vercel|.*\\..*).*)'
 ]
};