import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Emir Totić"
      defaultTitle="Emir Totić"
      defer={false}
    >
      {/* Title and Description */}
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Emir Totic" />
      <meta name="keywords" content="Java Developer, Backend Developer, Spring, Hibernate, Emir Totić, Portfolio" />
      <meta property="og:title" content={props.title || 'Emir Totic'} />
      <meta property="og:description" content={props.description || 'Java Backend Developer Portfolio'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://emirtotic.github.io/portfolio-site" />
      <meta property="og:image" content="https://emirtotic.github.io/portfolio-site/path_to_your_image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title || 'Emir Totic'} />
      <meta name="twitter:description" content={props.description || 'Java Backend Developer Portfolio'} />
      <meta name="twitter:image" content="https://emirtotic.github.io/portfolio-site/path_to_your_image.jpg" />
    </Helmet>

    <div id="wrapper">
      <Navigation />
      <div id="main">{props.children}</div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Emir Totić - personal website.',
};

export default Main;
