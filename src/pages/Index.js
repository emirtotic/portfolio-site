import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Emir Totić is a Senior Java Backend Developer with 5+ years of experience '
      + 'building enterprise applications, distributed systems, external integrations, '
      + 'and transaction-heavy backend platforms using Java, Spring Boot, Kafka, and SQL.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Hello, I’m Emir Totić</Link>
          </h2>
          <p>
            Senior Java Backend Developer
          </p>
        </div>
      </header>

      <p>
        I’m a backend engineer with 6+ years of experience building and maintaining
        reliable enterprise applications, external integrations and transaction-heavy
        systems using Java, Spring Boot, Kafka and SQL. My experience spans telecom,
        banking, healthcare, travel and gaming platforms, with a strong focus on clean
        architecture, system reliability and production-ready solutions. Learn more{' '}
        <Link to="/about">about me</Link>, explore my{' '}
        <Link to="/resume">professional experience</Link>, review my{' '}
        <Link to="/projects">projects</Link> or{' '}
        <Link to="/contact">get in touch</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
