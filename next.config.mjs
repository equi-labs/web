/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: '/web',
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
