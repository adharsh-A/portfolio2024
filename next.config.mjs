/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // Enable gzip compression
  // Optional: Configure compression settings
  compression: {
    level: 6, // Compression level (1-9, default is 6)
    threshold: 512 // Only compress responses that exceed 512 bytes
  }
};

export default nextConfig;