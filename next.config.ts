import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/delete",
        destination: "/data-deletion",
        permanent: true,
      },
      {
        source: "/delete-policy",
        destination: "/data-deletion",
        permanent: true,
      },
      {
        source: "/deletion",
        destination: "/data-deletion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
