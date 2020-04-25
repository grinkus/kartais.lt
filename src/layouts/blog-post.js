import React from 'react';
import { graphql } from 'gatsby';

import Helmet from '../components/Helmet';
import Layout from '../components/Layout';

import './blog-post.css';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet title={post.frontmatter.title} />
      <article className="blog-post">
        <header>
          <h1 className="blog-post__title">{post.frontmatter.title}</h1>
          <time
            className="blog-post__date"
            dateTime={`${post.frontmatter.date}Z`}
          >
            {post.frontmatter.date}
          </time>
        </header>
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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
      }
    }
  }
`;

export default BlogPostTemplate;
