import React from 'react';
import { graphql } from 'gatsby';

// Components.
import BlogPost from 'components/BlogPost';
import Helmet from 'components/Helmet';
import Layout from 'components/Layout';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet title={post.frontmatter.title || post.fields.title} />
      <BlogPost post={post} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
