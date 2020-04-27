import React from 'react';
import ReactFitText from 'react-fittext';
import Helmet from '../components/Helmet';
import { Link } from 'gatsby';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet />
      <ReactFitText compressor={1.25}>
        <header className="header">
          <Link to="/">kartais</Link>
        </header>
      </ReactFitText>
      {children}
    </div>
  );
};

export default Layout;
