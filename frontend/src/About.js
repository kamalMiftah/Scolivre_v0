import React, { useEffect } from 'react';
import Nav from './Nav';
import './index.css';
import './about.css';
import { animateElements } from './gsapAnimations';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function About() {
  useEffect(() => {
    // Call the animateElements function when the component mounts
    animateElements();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Nav />
      About Page


    </div>
  );
}

export default About;

