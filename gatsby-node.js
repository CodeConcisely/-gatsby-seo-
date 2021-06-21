const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

// Create a URL-friendly slug from every post title.
// Slug is used for page path
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// Create a page for every post
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);

  const result = await graphql(
    `
      query Posts {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
            id
          }
        }
      }
    `,
  );

  const nodes = result.data.allMarkdownRemark.nodes;

  nodes.forEach(node => {
    createPage({
      path: `posts${node.fields.slug}`,
      component: postTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
