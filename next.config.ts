const nextConfig = {
  output: 'export', // static export
  images: {
    unoptimized: true, // needed for next/image in static export
    remotePatterns: [
      { protocol: "https", hostname: "coin-images.coingecko.com" },
      { protocol: "https", hostname: "assets.coingecko.com" },
    ],
  },
};

module.exports = nextConfig;
