const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src', 'tests'], // Only run ESLint on the 'src' and 'tests' directories during production builds (next build)
  },
};

module.exports = withPWA(nextConfig);
