import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

import './blog-post-preview.css';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="blog-post-previews">
        {posts.map((post) => {
          return (
            <article className="blog-post-preview" key={post.id}>
              <Link
                className="blog-post-preview__link"
                to={post.fields.slug}
              >
                <header>
                  <time
                    className="blog-post-preview__date"
                    dateTime={`${post.frontmatter.date}Z`}
                  >
                    {post.frontmatter.date}
                  </time>
                  <h2 className="blog-post-preview__title">
                    {post.frontmatter.title}
                  </h2>
                </header>
                <p className="blog-post-preview__excerpt">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
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
