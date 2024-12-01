import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["pages", "utils"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sxhnfnuyvandvrxyppaq.supabase.co', // Tu dominio de Supabase
        port: '', // No hay puerto especificado
        pathname: '/storage/v1/object/public/movies-images/**', // Ruta del bucket de imágenes
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org', // Tu dominio de Supabase
        port: '', // No hay puerto especificado
        pathname: '/**', // Ruta del bucket de imágenes
      },

    ],
  },
  // srcDir: true
};

export default nextConfig;
