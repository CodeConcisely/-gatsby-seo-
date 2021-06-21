import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Link to={`posts${post.fields.slug}`}>{post.frontmatter.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
