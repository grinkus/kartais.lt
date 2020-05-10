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
    <nav className="Header__nav">
      <ul className="Header__nav-items">
        <li className="Header__nav-item">
          <LinkOrNot href="/" locationProps={locationProps}>
            kartais
          </LinkOrNot>
        </li>
        <li className="Header__nav-item">
          <LinkOrNot href="/ataskaita" locationProps={locationProps}>
            ataskaita
          </LinkOrNot>
        </li>
      </ul>
    </nav>
  </header>
));

export default Header;
