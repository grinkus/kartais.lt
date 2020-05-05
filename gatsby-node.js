/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const DirectoryNamedWebpackPlugin = require(`directory-named-webpack-plugin`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/layouts/blog-post.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        nodes {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.nodes.forEach((node) => {
      const path = node.fields.slug.substr(
        0,
        node.fields.slug.length - 1
      );
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const config = {
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  };

  if (stage === `build-javascript`) {
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          styles: false,
        },
      },
    };
  }

  actions.setWebpackConfig(config);
};
