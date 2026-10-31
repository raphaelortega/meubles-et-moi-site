/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Liens courts pour les réseaux : affichage propre + provenance suivie dans les mails de devis
  async redirects() {
    const links = [
      ['/insta', 'utm_source=instagram&utm_medium=bio', ''],
      ['/story', 'utm_source=instagram&utm_medium=story', '#estimation'],
      ['/linkedin', 'utm_source=linkedin&utm_medium=page', ''],
      ['/post', 'utm_source=linkedin&utm_medium=post', '#estimation'],
      ['/google', 'utm_source=google&utm_medium=fiche', ''],
      ['/mail', 'utm_source=email&utm_medium=signature', ''],
    ];
    return links.map(([source, query, hash]) => ({
      source,
      destination: `/?${query}${hash}`,
      permanent: false,
    }));
  },
  async rewrites() {
    return [
      {
        source: '/simulateur',
        destination: '/simulateur/index.html',
      },
    ];
  },
};

export default nextConfig;
