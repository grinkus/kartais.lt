import React from 'react';
import { Link } from 'gatsby';

// Styles.
import './BlogPostTeaser.css';

const BlogPostTeaser = ({ post }) => (
  <article className="BlogPostTeaser">
    <Link className="BlogPostTeaser__link" to={post.fields.slug}>
      <h1 className="BlogPostTeaser__title p">
        {post.frontmatter.title}
      </h1>
      <time
        className="BlogPostTeaser__date p"
        dateTime={`${post.frontmatter.date}Z`}
      >
        {post.frontmatter.date}
      </time>
      <p className="BlogPostTeaser__excerpt">{post.excerpt}</p>
    </Link>
  </article>
);

export default BlogPostTeaser;
