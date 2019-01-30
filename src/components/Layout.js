import React from 'react';
import ReactFitText from 'react-fittext';
import { Link } from 'gatsby';

import Helmet from '../components/Helmet'

import './Layout.css';

class Layout extends React.Component {

  componentDidMount() {

    const scripts = document.scripts[0]
    const script = document.createElement('script')

    window.WebFontConfig = {
      google: {
        families: ['Cardo:400,400i,700:latin-ext']
      }
    }

    script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    script.async = true
    scripts.parentNode.insertBefore(script, scripts)

  }

  render() {
    return (
      <div>
        <Helmet />
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
        {this.props.children}
      </div>
    );
  }
}

export default Layout

