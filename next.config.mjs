import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@payloadcms/richtext-lexical'],
};

export default withPayload(nextConfig);