import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Emir Totić</h2>
        <p>
          <a href="mailto:emirtotic@gmail.com">emirtotic@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Emir. I am a{' '}
        <a href="https://icme.stanford.edu/">Software engineer</a> from Belgrade, Serbia. Currently, I
        am working as a Java Backend Developer at <a href="https://hyperoptic.com">Hyperoptic</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Emir Totić <Link to="/">.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
