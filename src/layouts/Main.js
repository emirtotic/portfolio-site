import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const BASE_URL = 'https://emirtotic.github.io/portfolio-site';

const DEFAULT_TITLE = 'Emir Totić | Senior Java Backend Developer';

const DEFAULT_DESCRIPTION = 'Emir Totić is a Senior Java Backend Developer with 6+ years of '
  + 'experience building enterprise applications, REST APIs, external '
  + 'integrations, Kafka-based workflows, and backend systems using '
  + 'Java, Spring Boot, SQL, PostgreSQL, and MySQL.';

const getCurrentPath = () => {
  if (typeof window === 'undefined') {
    return '/';
  }

  const basePath = '/portfolio-site';
  const currentPath = window.location.pathname;

  if (!currentPath.startsWith(basePath)) {
    return currentPath || '/';
  }

  const pathWithoutBase = currentPath.slice(basePath.length);

  return pathWithoutBase || '/';
};

const Main = (props) => {
  const currentPath = getCurrentPath();

  const canonicalUrl = currentPath === '/'
    ? `${BASE_URL}/`
    : `${BASE_URL}${currentPath}`;

  const pageTitle = props.title
    ? `${props.title} | Emir Totić`
    : DEFAULT_TITLE;

  /*
   * This image already exists in public/images.
   * Later, replace it with a dedicated 1200x630 social-preview.jpg image.
   */
  const socialImage = `${BASE_URL}/images/me.jpg`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${canonicalUrl}#profile-page`,
    url: canonicalUrl,
    name: pageTitle,
    description: props.description,
    mainEntity: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#emir-totic`,
      name: 'Emir Totić',
      alternateName: 'Emir Totic',
      url: `${BASE_URL}/`,
      image: socialImage,
      jobTitle: 'Senior Java Backend Developer',
      description:
        'Java backend engineer with 6+ years of professional experience '
        + 'building enterprise applications, backend integrations, '
        + 'REST APIs, Kafka workflows, and database-driven systems.',
      sameAs: [
        'https://github.com/emirtotic',
        'https://www.linkedin.com/in/emirtotic',
      ],
      knowsAbout: [
        'Java',
        'Spring Framework',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'Spring Data JPA',
        'Hibernate',
        'REST APIs',
        'Microservices',
        'Apache Kafka',
        'Event-Driven Architecture',
        'System Design',
        'SQL',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'JUnit',
        'Mockito',
        'Maven',
        'Git',
        'Jenkins',
        'Docker',
        'CI/CD',
        'Backend System Integrations',
      ],
    },
  };

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />

      <Helmet defer={false}>
        <html lang="en" />

        <title>{pageTitle}</title>

        <meta
          name="description"
          content={props.description}
        />

        <meta
          name="author"
          content="Emir Totić"
        />

        <meta
          name="robots"
          content={
            'index, follow, max-image-preview:large, '
            + 'max-snippet:-1, max-video-preview:-1'
          }
        />

        <meta
          name="googlebot"
          content={
            'index, follow, max-image-preview:large, '
            + 'max-snippet:-1, max-video-preview:-1'
          }
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <meta
          property="og:locale"
          content="en_US"
        />

        <meta
          property="og:type"
          content="profile"
        />

        <meta
          property="og:site_name"
          content="Emir Totić Portfolio"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={props.description}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:image"
          content={socialImage}
        />

        <meta
          property="og:image:secure_url"
          content={socialImage}
        />

        <meta
          property="og:image:alt"
          content="Emir Totić, Senior Java Backend Developer"
        />

        <meta
          property="profile:first_name"
          content="Emir"
        />

        <meta
          property="profile:last_name"
          content="Totić"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={props.description}
        />

        <meta
          name="twitter:image"
          content={socialImage}
        />

        <meta
          name="twitter:image:alt"
          content="Emir Totić, Senior Java Backend Developer"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div id="wrapper">
        <Navigation />

        <main id="main">
          {props.children}
        </main>

        {props.fullPage ? null : <SideBar />}
      </div>
    </HelmetProvider>
  );
};

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
  description: DEFAULT_DESCRIPTION,
};

export default Main;
