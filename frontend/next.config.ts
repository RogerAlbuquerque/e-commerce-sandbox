import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [`${process.env.NEXT_PUBLIC_LOCAL_IP}`],
};

export default nextConfig;
