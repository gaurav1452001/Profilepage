import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Error: Invalid src prop (https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422372942i/24714708.jpg) on `next/image`, hostname "images-na.ssl-images-amazon.com" is not configured under images in your `next.config.js`
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
    ],
  },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
