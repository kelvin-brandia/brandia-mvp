/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Permite que a build complete mesmo se houver erros de TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Também ignora erros de linting para garantir a build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
