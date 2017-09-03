import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import bgvideo from '../video/movie.mp4';
import headshot from '../images-common/headshot.jpg';

import './index.scss';

const NavLink = props => 
    <div>
      <Link to={props.to} onClick={pauseOpen}>
        {props.children}
      </Link>
    </div>;


  
NavLink.propTypes = {
  to: PropTypes.string,
};

const pauseOpen = () => {
  const video = document.querySelector('#bgvideo');
  const content = document.querySelector('.content');
  console.log(video);
  video.pause();
  video.classList.add('stopFade');
  content.classList.add('open');
};

const closePlay = () => {
  const video = document.querySelector('#bgvideo');
  const content = document.querySelector('.content');
  video.classList.remove('stopFade');
  content.classList.remove('open');
  video.play();
};

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
    <div className='wrapper'>
      <div className='container' >
        <h1>
          <Link to='#' className='name' >
            Iniki Mariano
          </Link>
        </h1>
        <div className='content' >
          <div className='content-inner'>
            {children()}
          </div>
          <Link to='/' onClick={closePlay} className='content-close'>
            <i className="fa fa-close" aria-hidden="true"></i>
          </Link>
        </div>
        <div className='jam'>
          <div className='nav'>
            <NavLink to='/portfolio/'>Portfolio</NavLink>
            <NavLink to='/showreel/'>Showreel</NavLink>
            <NavLink to='/bio/'>Bio</NavLink>
            <NavLink to='/contact/'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
    <video poster={headshot} id='bgvideo' playsInline autoPlay muted loop >
      <source src={bgvideo} type='video/mp4' />
    </video>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
