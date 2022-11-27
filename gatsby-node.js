const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require(`@sindresorhus/slugify`);

const months = [
  `sausio`,
  `vasario`,
  `kovo`,
  `balandžio`,
  `gegužės`,
  `birželio`,
  `liepos`,
  `rugpjūčio`,
  `rugsėjo`,
  `spalio`,
  `lapkričio`,
  `gruodžio`,
];

const getDateString = (date) =>
  `${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/layouts/blog-post.js`);

  return graphql(`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMdx.nodes.forEach((node) => {
      const path = node.fields.slug.substr(
        0,
        node.fields.slug.length - 1
      );
      createPage({
        path,
        component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent);

    if (fileNode.sourceInstanceName === `ataskaitaPosts`) {
      const split = fileNode.name.split(`_`);
      const startDate = new Date(split[0]);
      const endDate = new Date(split[1]);

      const title = `Už nuo ${getDateString(
        startDate
      )} iki ${getDateString(endDate)}`;

      createNodeField({ name: `title`, node, value: title });
      createNodeField({
        name: `slug`,
        node,
        value: `/ataskaita/${slugify(title).toLowerCase()}/`,
      });
    }

    if (fileNode.sourceInstanceName === `blogPosts`) {
      const slug = createFilePath({ node, getNode });
      createNodeField({ node, name: `slug`, value: slug });
    }
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const config = {};

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
