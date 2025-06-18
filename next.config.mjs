/** @type {import('next').NextConfig} */
const nextConfig = {

    // Uncomment when add value for NEXT_PUBLIC_PATH in .env.production or .env.development
    // basePath: process.env.NEXT_PUBLIC_PATH,
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
};

export default nextConfig;
