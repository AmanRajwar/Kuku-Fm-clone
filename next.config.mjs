/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.cdn.kukufm.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental:{
        serverActions:true
    }

};

export default nextConfig;
