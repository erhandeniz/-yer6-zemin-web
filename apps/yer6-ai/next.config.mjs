/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  webpack(config, { dev }) {
    if (dev) config.devtool = false;
    return config;
  }
};

export default nextConfig;
