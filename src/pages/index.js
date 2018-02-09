import React from 'react'
import Link from 'gatsby-link'

import './blog-post-preview.css';

const IndexPage = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-post-previews">
      {
        posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <article
                className="blog-post-preview"
                key={post.id}
              >
                <Link
                  className="blog-post-preview__link"
                  to={post.frontmatter.path}
                >
                <header>
                  <h2 className="blog-post-preview__title">
                    {post.frontmatter.title}
                  </h2>
                  <time
                    className="blog-post-preview__date"
                    dateTime={`${post.frontmatter.date}Z`}
                  >
                    {post.frontmatter.date}
                  </time>
                </header>
                <p className="blog-post-preview__excerpt">{post.excerpt}</p>
                </Link>
              </article>
            );
          })
      }
    </div>
  );

}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage
