import React, { useEffect } from 'react';
import ReactFitText from 'react-fittext';
import Helmet from '../components/Helmet';
import { Link } from 'gatsby';

import './Layout.css';

const Layout = ({ children }) => {
  useEffect(() => {
    const scripts = document.scripts[0];
    const script = document.createElement(`script`);

    window.WebFontConfig = {
      google: {
        families: [`Cardo:400,400i,700:latin-ext`],
      },
    };

    script.src = `https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js`;
    script.async = true;
    scripts.parentNode.insertBefore(script, scripts);

    return () => {
      scripts.parentNode.removeChild(script);
    };
  }, []);

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
