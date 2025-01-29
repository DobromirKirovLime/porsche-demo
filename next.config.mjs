import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'fakestoreapi.com' }
    ]
  },
  redirects: () => [
    {
      source: '/',
      destination: '/en-US/home',
      permanent: true
    }
  ]
};

export default withNextIntl(nextConfig);
