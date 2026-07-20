/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Uretimde tarayiciya okunabilir kaynak kodu (source map) sizdirilmaz.
  productionBrowserSourceMaps: false,
  // "Powered by Next.js" basligini gizle (parmak izini azaltir).
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};

export default nextConfig;
