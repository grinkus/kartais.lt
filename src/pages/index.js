import React from 'react';
import { graphql } from 'gatsby';

// Components.
import BlogPostTeaser from 'components/BlogPostTeaser';
import Layout from 'components/Layout';

const BlogIndex = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.nodes.map((post) => (
      <BlogPostTeaser key={post.id} post={post} />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/content/posts/*" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        excerpt(pruneLength: 250)
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;

export default BlogIndex;
