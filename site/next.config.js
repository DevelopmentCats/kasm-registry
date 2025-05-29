/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Cats Kasm Registry',
    description: 'The cat store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://DevelopmentCats.github.io/kasm-registry',
    contactUrl: 'https://DevelopmentCats.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
