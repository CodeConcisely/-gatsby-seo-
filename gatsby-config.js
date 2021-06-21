module.exports = {
  siteMetadata: {
    url: 'https://example.com',
    title: 'Coolest Web Dev Blog',
    description: 'Learn how to do cool things in web development from the coolest blog.',
    image: 'https://example.com/images/image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
