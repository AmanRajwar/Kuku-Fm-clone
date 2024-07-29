/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.cdn.kukufm.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

};

export default nextConfig;
