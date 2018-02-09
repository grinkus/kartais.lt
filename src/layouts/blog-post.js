import React from 'react'
import Helmet from '../components/Helmet'

import './blog-post.css';

const TemplateWrapper = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
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
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;

export default TemplateWrapper;
