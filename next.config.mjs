/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true, // Enable gzip compression
    images: {
      domains: ['your-image-domain.com'],
      minimumCacheTTL: 60,
      deviceSizes: [640, 750, 1080, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 128, 256],
    },
    experimental: {
      modern: true,
      reactMode: 'concurrent', // Concurrent rendering for improved performance
      optimizeFonts: true, // Font optimization
      optimizeCss: true, // CSS optimization
      optimizeImages: true, // Image optimization
      webpack: (config) => {
        config.optimization.splitChunks = {
          chunks: 'all',
          maxSize: 200000, // Split larger chunks
        };
        config.optimization.usedExports = true;
        config.optimization.minimize = true;
        return config;
      },
    },
    headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  