/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'da',
    locales: ['en', 'da']
  }
}

module.exports = nextConfig
