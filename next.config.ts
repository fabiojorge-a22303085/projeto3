import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["deisishop.pythonanywhere.com"], // Adicione o domínio das imagens aqui
  },
};

export default nextConfig;
