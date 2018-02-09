import React from 'react'
import Link from 'gatsby-link'

import ReactFitText from 'react-fittext';

import './style.css';

const Header = () => (
  <ReactFitText compressor={1.25}>
    <header className="header">
      <Link
        style={{ display: 'block' }}
        to="/"
      >
        kartais
      </Link>
    </header>
  </ReactFitText>
)

export default Header
