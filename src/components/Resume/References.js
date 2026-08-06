import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h2>Technical Skills</h2>

      <ul style={{ columns: 2, columnGap: '2rem' }}>
        <li>Java 11 / 17 / 21</li>
        <li>Spring Boot & Spring Framework</li>
        <li>Microservices Architecture</li>
        <li>System Design & Software Architecture</li>
        <li>REST API Design & Development</li>
        <li>Apache Kafka & Event-Driven Systems</li>
        <li>SQL & Relational Database Design</li>
        <li>PostgreSQL & MySQL</li>
        <li>Spring Data JPA & Hibernate</li>
        <li>Spring Security</li>
        <li>External System Integrations</li>
        <li>Distributed Application Fundamentals</li>
        <li>MongoDB</li>
        <li>JUnit, Mockito & Integration Testing</li>
        <li>Database Migrations with Flyway / Liquibase</li>
        <li>Docker</li>
        <li>Jenkins & CI/CD</li>
        <li>Maven</li>
        <li>Git, GitHub & Bitbucket</li>
        <li>Agile Development & Jira</li>
        <li>MapStruct</li>
        <li>JasperReports</li>
        <li>gRPC Integrations</li>
        <li>Rust Backend Development</li>
      </ul>

      <Link to="/contact">
        <h3>Interested in working together? Get in touch</h3>
      </Link>
    </div>
  </div>
);

export default References;
