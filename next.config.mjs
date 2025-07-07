// @ts-check
import Analyzer from '@next/bundle-analyzer';
import MDX from '@next/mdx';
import withPlaiceholder from '@plaiceholder/next';
import path from 'path';

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  cleanDistDir: true,
  webpack: (config) => {
    config.resolve.alias['@/base'] = path.resolve(process.cwd(), 'src/styles/base');
    return config;
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: []
  }
};

const withBundleAnalyzer = Analyzer({ enabled: process.env.ANALYZE === 'true' });

const withMDX = MDX();

export default withBundleAnalyzer(withMDX(withPlaiceholder(nextConfig)));
