/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'websitedemos.net',
            port: '',
            pathname: '/be-bold-beauty-store-04/wp-content/uploads/sites/**',
          },
          {
            protocol: 'https',
            hostname: 'websitedemos.net',
            port: '',
            pathname: '/beauty-products-store-04/wp-content/uploads/sites/**',
          },
        ],
    },
}

module.exports = nextConfig
