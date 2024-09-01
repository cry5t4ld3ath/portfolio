import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   basePath: "/portfolio",
   assetPrefix: "/portfolio/"
};
 
export default withNextIntl(nextConfig);
