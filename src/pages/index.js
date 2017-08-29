import React from 'react';
import Link from 'gatsby-link';
import headshot from '../images-common/headshot.jpg';

const IndexPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/curriculum/">Check out my CV</Link>
    </p>
  </div>;

export default IndexPage;
