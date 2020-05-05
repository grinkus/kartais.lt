import React from 'react';
import { Link } from 'gatsby';

// HOCs.
import withLocation from 'HOCs/withLocation';

// Styles.
import './Header.css';

const LinkOrNot = ({ children, locationProps, href }) => {
  if (locationProps.location.pathname === href) {
    return children;
  }
  return <Link to={href}>{children}</Link>;
};

const Header = withLocation(({ children, locationProps }) => (
  <header className="Header">
    <div className="Header__logo">
      <LinkOrNot href="/" locationProps={locationProps}>
        kartais
      </LinkOrNot>
    </div>
  </header>
));

export default Header;
