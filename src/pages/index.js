import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import headshot from '../images-common/headshot.jpg';
import './index.scss';
import bgvideo from '../video/movie.mp4';

const IndexPage = () =>
  <div className='container' >
    <h1 >
      <Link to='#' className='name' >
        Iniki Mariano
      </Link>
    </h1>
    <video poster={headshot} id='bgvideo' playsInline autoPlay muted loop >
      <source src={bgvideo} type='video/mp4' />
    </video>
    <div className='content'>
      <div className='nav'>
        <NavLink to='/portfolio/'>Portfolio</NavLink>
        <NavLink to='/showreel/'>Showreel</NavLink>
        <NavLink to='/bio/'>Bio</NavLink>
        <NavLink to='/contact/'>Contact</NavLink>
      </div>
    </div>
  </div>;

const NavLink = props => 
      <div>
        <Link to={props.to}>
          {props.children}
        </Link>
      </div>;
  
NavLink.propTypes = {
  to: PropTypes.string,
};

export default IndexPage;
