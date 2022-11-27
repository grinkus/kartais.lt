import React from 'react';
import { graphql } from 'gatsby';

// Components.
import BlogPostTeaser from '../components/BlogPostTeaser';
import Layout from '../components/Layout';

const BlogIndex = ({ data }) => (
  <Layout>
    {data.allFile.edges.map((edge) => (
      <BlogPostTeaser
        key={edge.node.id}
        post={edge.node.childMdx}
      />
    ))}
  </Layout>
);

export const query = graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "blogPosts"}}
      sort: {fields: childMdx___frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          id
          childMdx {
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
    }
  }
`;

export default BlogIndex;
