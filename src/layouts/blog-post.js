import React from 'react';
import { graphql } from 'gatsby';

// Components.
import BlogPost from '../components/BlogPost';
import Helmet from '../components/Helmet';
import Layout from '../components/Layout';

const BlogPostTemplate = ({ data, children }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Helmet title={post.frontmatter.title || post.fields.title} />
      <BlogPost post={post}>
        {children}
      </BlogPost>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
      fields {
        slug
        title
      }
    }
  }
`;

export default BlogPostTemplate;
