import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h2>My Skills</h2>
      <ul style={{ columns: 2, columnGap: '2rem' }}>
          <li>Java - Java EE</li>
          <li>Spring Framework</li>
          <li>Spring Boot & MVC</li>
          <li>Spring Security</li>
          <li>Spring REST</li>
          <li>Reactive Spring</li>
          <li>Microservices</li>
          <li>Hibernate</li>
          <li>MySQL Database</li>
          <li>NoSQL Databases</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Neo4j</li>
          <li>Kafka</li>
          <li>REST Integrations</li>
          <li>Git / GitHub</li>
          <li>Bitbucket</li>
          <li>Jira / AGILE</li>
          <li>Maven</li>
          <li>Docker</li>
          <li>Rust</li>
          <li>Rust</li>
          <li>Axum, Tokio, Tonic</li>
        </ul>
      <Link to="/contact">
        <h3>For more details, feel free to contact me</h3>
      </Link>
    </div>
  </div>
);

export default References;
