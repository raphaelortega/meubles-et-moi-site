/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
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
    return [
      ...links.map(([source, query, hash]) => ({
        source,
        destination: `/?${query}${hash}`,
        permanent: false,
      })),
      // L'ancien simulateur n'existe plus : redirection permanente vers le formulaire d'estimation
      { source: '/simulateur', destination: '/#estimation', permanent: true },
      { source: '/simulateur/:path*', destination: '/#estimation', permanent: true },
    ];
  },
};

export default nextConfig;
