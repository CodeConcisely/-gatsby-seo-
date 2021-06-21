import React from 'react';
import { graphql } from 'gatsby';

import PostList from '../components/PostList';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO />
      <h1>SEO Demo Project</h1>
      <PostList posts={posts} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPagePosts {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
