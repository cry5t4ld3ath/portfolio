import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   basePath: "/por",
   assetPrefix: "/por/"
};
 
export default withNextIntl(nextConfig);