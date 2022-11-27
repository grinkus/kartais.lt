/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kartais.lt`,
    description: `Nu čia kažkaip paprastai taip`,
    siteUrl: `https://www.kartais.lt`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/content/posts`,
      },
      __key: `blogPosts`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ataskaitaPosts`,
        path: `${__dirname}/src/content/ataskaita`,
      },
      __key: `ataskaitaPosts`,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`postcss-nested`)(),
          require(`postcss-preset-env`)(),
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kartais.lt`,
        short_name: `kartais`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    `gatsby-plugin-offline`,
  ],
};
