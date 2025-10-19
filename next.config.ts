import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["127.0.0.1"],
    // Esto es porque next necesita recibir la información del dominio externo, por temas de seguridad
    // clase 296 PageCardImage: Image
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
