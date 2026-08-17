/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site has no API routes, middleware, or per-request
  // server data, so it ships as plain static files. This sidesteps Cloudflare
  // Workers' OpenNext adapter entirely (and its Next.js version gate) —
  // deployment is just static assets, served straight from Cloudflare's CDN.
  output: "export",
  images: {
    // No server available to run Next's image optimizer against static
    // export, so images are served as-is from their remote source.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
