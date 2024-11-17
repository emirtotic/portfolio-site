import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Emir Totić personal website. '
      + 'Software Developer based in Belgrade, Serbia.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my portfolio site</Link>
          </h2>
          <p>
            I’m thrilled to have you here, and I invite you to explore my site.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Thank you for visiting my portfolio site. Feel free to discover more {' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link> or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
