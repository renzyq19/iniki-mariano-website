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
    />
    <div>
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
