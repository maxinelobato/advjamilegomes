/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
    domains: [
      {
        domain: 'vercel.com',
        defaultLocale: 'pt-BR',
      },
    ],
    
  },
}

module.exports = nextConfig
