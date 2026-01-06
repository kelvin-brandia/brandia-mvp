/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ATENÇÃO: Isso permite que a build complete mesmo com erros de tipagem
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
