/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Uretimde tarayiciya okunabilir kaynak kodu (source map) sizdirilmaz.
  productionBrowserSourceMaps: false,
  // "Powered by Next.js" basligini gizle (parmak izini azaltir).
  poweredByHeader: false,
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;
