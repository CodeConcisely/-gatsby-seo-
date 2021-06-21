import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

const PostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, description, image, date },
    },
  } = data;

  return (
    <article>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO
        title={title}
        description={description}
        image={image}
        post={data.markdownRemark.frontmatter}
      />
      <h1>{title}</h1>
      <p>{date}</p>
      <img style={{ width: '300px' }} src={image} alt="Blog post" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default PostTemplate;

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        date
        image
        author
      }
    }
  }
`;
