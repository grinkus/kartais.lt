import React from 'react'
import Helmet from 'react-helmet'

import '../../../node_modules/normalize.css';
import '../../site.css';

const TemplateWrapper = ({ title }) => (
  <Helmet
    title={title ? `${title} - kartais.lt` : 'kartais.lt'}
    meta={[
      { name: 'description', content: 'kartais piktas, kartais blogas' },
      { name: 'keywords', content: 'kartais' },
    ]}

  >
    <link
      href="https://fonts.googleapis.com/css?family=Cardo:400,400i,700&amp;subset=latin-ext"
      rel="stylesheet"
    />
  </Helmet>
);

export default TemplateWrapper;
