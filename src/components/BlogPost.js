import React from 'react';

// Components.
import TextContent from '../components/TextContent';

// Styles.
import './BlogPost.css';

const BlogPost = ({ children, post }) => (
  <article className="BlogPost">
    <TextContent>
      <h1 className="BlogPost__title">
        {post.frontmatter.title || post.fields.title}
      </h1>
      <footer>
        <p>
          <time dateTime={`${post.frontmatter.date}Z`}>
            {post.frontmatter.date}
          </time>
        </p>
      </footer>
      {children}
    </TextContent>
  </article>
);

export default BlogPost;
