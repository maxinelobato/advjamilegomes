/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
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
  };
