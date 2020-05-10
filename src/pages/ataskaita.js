import React from 'react';
import { graphql } from 'gatsby';

// Components.
import AtaskaitaPostTeaser from 'components/AtaskaitaPostTeaser';
import Helmet from 'components/Helmet';
import Layout from 'components/Layout';

const AtaskaitaIndex = ({ data }) => (
  <Layout>
    <Helmet title="ataskaita" />
    {data.allMarkdownRemark.nodes.map((post) => (
      <AtaskaitaPostTeaser id={post.id} post={post} />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "**/src/content/ataskaita/*" }
      }
      sort: { fields: fileAbsolutePath, order: DESC }
    ) {
      nodes {
        fileAbsolutePath
        id
        fields {
          slug
          title
        }
      }
    }
  }
`;

export default AtaskaitaIndex;
