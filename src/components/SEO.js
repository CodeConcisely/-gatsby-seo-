import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

export default function SEO({ title, description, image, post }) {
  const { pathname } = useLocation();

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          image
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: image ? `${defaults.url}${image}` : defaults.image,
    url: defaults.url + pathname,
    type: post ? 'article' : 'website',
  };

  const structuredData = post ? (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: seo.image,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        datePublished: post.date,
      })}
    </script>
  ) : null;

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
      {structuredData}
    </Helmet>
  );
}
