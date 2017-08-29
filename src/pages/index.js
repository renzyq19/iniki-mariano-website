import React from 'react';
import Link from 'gatsby-link';
import headshot from '../images-common/headshot.jpg';
import styles from './index.module.css';

const IndexPage = () =>
  <div className={styles.landing} >
    <h1 >
      <Link className={styles.name} >
        Iniki Mariano
      </Link>
    </h1>
    <ul className={styles.nav}>
      <li>
        <Link to='/portfolio/'>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to='/showreel/'>
          Showreel
        </Link>
      </li>
      <li>
        <Link to='/bio/'>
          Bio
        </Link>
      </li>
      <li>
        <Link to='/contact/'>
          Contact
        </Link>
      </li>
    </ul>
  </div>;

export default IndexPage;
