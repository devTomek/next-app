/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
