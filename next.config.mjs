/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    // Vercel's build currently errors on our ESLint config with
    // "Converting circular structure to JSON". This disables ESLint
    // during production builds only, so deployment can succeed.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

