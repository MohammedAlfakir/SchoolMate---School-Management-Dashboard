/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin", // Change this to your desired default page
        permanent: true, // Set to true for a 301 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
