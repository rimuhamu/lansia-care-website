/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@payloadcms/richtext-lexical', '@payloadcms/db-mongodb', 'payload'],
};

export default nextConfig;