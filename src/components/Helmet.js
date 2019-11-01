import React from 'react'
import Helmet from 'react-helmet'

import '../../node_modules/normalize.css';
import '../site.css';

const TemplateWrapper = ({ title }) => (
  <Helmet
    title={title ? `${title} - kartais.lt` : `kartais.lt`}
    meta={[
      { name: `description`, content: `kartais piktas, kartais blogas` },
      { name: `keywords`, content: `kartais` },
    ]}
  >
    <html lang="lt" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Helmet>
);

export default TemplateWrapper;
