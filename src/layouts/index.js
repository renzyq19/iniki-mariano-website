import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Iniki Mariano"
      meta={[
        { name: 'description', content: 'Acting Portfolio' },
        { name: 'keywords', content: 'actor, actress, film, theatre' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      ]}
    />
    <div className="wrapper">
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
