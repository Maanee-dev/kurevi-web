import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  const defaultKeywords = "marketing agency Maldives, best digital marketing in Maldives, Kurevi, web development Maldives, SEO Maldives, branding agency Maldives";
  return (
    <Helmet>
      <title>{`${title} | Kurevi — Create, Build, Scale.`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* OpenGraph / Social Meta Tags */}
      <meta property="og:title" content={`${title} | Kurevi`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kurevi" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Kurevi`} />
      <meta name="twitter:description" content={description} />
      
      {/* Geospatial and localized tags for Maldives search dominance */}
      <meta name="geo.region" content="MV" />
      <meta name="geo.placename" content="Malé" />
    </Helmet>
  );
}
