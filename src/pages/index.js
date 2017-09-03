import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import headshot from '../images-common/headshot.jpg';
import './index.scss';
import bgvideo from '../video/movie.mp4';

import Overlay from '../components/overlay';



const IndexPage = () => {
  const closePlay = () => {
    const video = document.querySelector('#bgvideo');
    const content = document.querySelector('.content');
    video.classList.remove('stopFade');
    content.classList.remove('open');
    video.play();
  };
  return (
    <div className='container' >
      <h1>
        <Link to='#' className='name' >
          Iniki Mariano
        </Link>
      </h1>
      <div className='content' >
        <div className='content-close' onClick={closePlay}>
        </div>
      </div>
      <div className='jam'>
        <div className='nav'>
          <NavLink to='/portfolio/'>Portfolio</NavLink>
          <NavLink to='/showreel/'>Showreel</NavLink>
          <NavLink to='/bio/'>Bio</NavLink>
          <NavLink to='/contact/'>Contact</NavLink>
        </div>
      </div>
      <video poster={headshot} id='bgvideo' playsInline autoPlay muted loop >
        <source src={bgvideo} type='video/mp4' />
      </video>
    </div>);
};

const NavLink = props => {
  const pauseOpen = () => {
    const video = document.querySelector('#bgvideo');
    const content = document.querySelector('.content');
    console.log(video);
    video.pause();
    video.classList.add('stopFade');
    content.classList.add('open');
  };
  return (
    <div>
      <Link to='#' onClick={pauseOpen}>
        {props.children}
      </Link>
    </div>);
};


  
NavLink.propTypes = {
  to: PropTypes.string,
};

export default IndexPage;
