import React from 'react';
import parse from 'html-react-parser';

// Components.
import TextContent from 'components/TextContent';

// Styles.
import './BlogPost.css';

const BlogPost = ({ post }) => (
  <article className="BlogPost">
    <TextContent>
      <h1 className="BlogPost__title">{post.frontmatter.title}</h1>
      <footer>
        <p>
          <time dateTime={`${post.frontmatter.date}Z`}>
            {post.frontmatter.date}
          </time>
        </p>
      </footer>
      {parse(post.html)}
    </TextContent>
  </article>
);

export default BlogPost;
