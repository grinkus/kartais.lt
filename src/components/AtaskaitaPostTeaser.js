import React from 'react';
import { Link } from 'gatsby';

// Styles.
import './AtaskaitaPostTeaser.css';

const AtaskaitaPostTeaser = ({ post }) => (
  <article className="AtaskaitaPostTeaser">
    <Link className="AtaskaitaPostTeaser__link" to={post.fields.slug}>
      <h1 className="AtaskaitaPostTeaser__title p">
        {post.fields.title}
      </h1>
    </Link>
  </article>
);

export default AtaskaitaPostTeaser;
