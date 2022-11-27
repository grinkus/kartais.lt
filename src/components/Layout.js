import React, { useEffect } from 'react';
import '@fontsource/cardo';

// Components.
import Helmet from '../components/Helmet';
import Header from '../components/Header';

// Styles.
import '../../node_modules/normalize.css';
import '../styles/main.css';

const Layout = ({ children, withBaselineGrid }) => {
  useEffect(() => {
    if (!withBaselineGrid) {
      return;
    }

    const style = document.createElement(`style`);
    style.appendChild(
      document.createTextNode(`
        html:hover {
          background-image:
            linear-gradient(to bottom, rgba( 32,160,255,.25 ) 1px, transparent 1px),
            linear-gradient(to bottom, rgba( 32,160,255,.25 ) 1px, transparent 1px);
          background-size: 100% 32px, 100% 16px;

          background-postion: top left;

        }

        @media (min-width: 40em) {
          html:hover {
            background-size: 100% 36px, 100% 18px;
          }
        }

        @media (min-width: 62em) {
          html:hover {
            background-size: 100% 40px, 100% 20px;
          }
        }

        @media (min-width: 88em) {
          html:hover {
            background-size: 100% 48px, 100% 24px;
          }
        }
      `)
    );
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [withBaselineGrid]);

  return (
    <div>
      <Helmet />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
