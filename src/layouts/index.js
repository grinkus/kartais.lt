import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Helmet from '../components/Helmet'

import '../../node_modules/normalize.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
