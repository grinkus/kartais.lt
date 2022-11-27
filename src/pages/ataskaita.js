import React from 'react';
import { graphql } from 'gatsby';

// Components.
import AtaskaitaPostTeaser from '../components/AtaskaitaPostTeaser';
import Helmet from '../components/Helmet';
import Layout from '../components/Layout';

const AtaskaitaIndex = ({ data }) => (
  <Layout>
    <Helmet title="ataskaita" />
    {data.allFile.edges.map((edge) => (
      <AtaskaitaPostTeaser id={edge.node.id} post={edge.node.childMdx} />
    ))}
  </Layout>
);

export const query = graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "ataskaitaPosts"}}
      sort: {childMdx: {frontmatter: {date: DESC}}}
    ) {
      edges {
        node {
          id
          childMdx {
            fields {
              slug
              title
            }
          }
        }
      }
    }
  }
`;

export default AtaskaitaIndex;
