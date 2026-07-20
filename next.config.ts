import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal, self-contained build for Docker (.next/standalone)
  output: "standalone",
  // Scope the build to this project (a stray lockfile in a parent dir can
  // otherwise be inferred as the workspace root).
  turbopack: { root: __dirname },
};

export default nextConfig;
