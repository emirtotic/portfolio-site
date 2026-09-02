/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Crassus',
    position: 'Part-Time Backend Engineer',
    startDate: '2025-01-09',
    summary: 'Real-time online casino platform supporting multiple casino brands, game providers, and transactional wallet integrations',
    highlights: [
      'Developed and maintained backend wallet and game-provider integrations for a multi-brand online casino platform supporting AllBritishCasino, PubCasino, CasinoCasino, FunCasino, YetiCasino, HyperCasino, RaceCasino, NoBonusCasino, Quickbet Co UK, and additional casino brands.',
      'Integrated external gaming providers including Hacksaw, NYX, Evolution, GamingCorps, IGT, Awager, and others, adapting provider-specific APIs and transaction models into a consistent internal wallet flow.',
      'Implemented real-time transactional gameplay flows including bet, win, rollback, free-spin, settlement, and player balance operations.',
      'Built idempotency and transaction-state handling to prevent duplicate bets, repeated settlements, and inconsistent wallet updates caused by retried provider requests.',
      'Monitored live gaming and wallet activity, investigated failed or inconsistent game rounds, and resolved balance discrepancies caused by interrupted or incorrectly settled transactions.',
      'Maintained player balance consistency across casino sessions and external provider interactions, including manual investigation and reconciliation of problematic transactions when required.',
      'Implemented provider-specific handling for free-spin, bonus, payout, and settlement flows where external providers used different gameplay and transaction protocols.',
      'Investigated production incidents using application logs and transactional data to identify integration failures, provider errors, incomplete settlements, and inconsistent wallet states.',
      'Developed backend functionality in Java using Spring Boot, Rust using Tokio, Tonic, Axum, MongoDB, Neo4j, and structured tracing.',
      'Contributed to staging and production deployments and supported the reliability of transaction-heavy integrations across multiple casino brands and gaming providers.',
    ],
  },
  {
    name: 'Hyperoptic',
    position: 'Java Backend Engineer',
    url: 'https://hyperoptic.com',
    startDate: '2023-01-19',
    summary: 'Core telecom platform supporting customer services, billing, provisioning, and internal operations',
    highlights: [
      'Developed and maintained Java backend services for Hyperoptic’s core operational platform used across customer service, billing, provisioning, and support workflows.',
      'Built and maintained internal APIs enabling communication between business-critical platform modules and external systems.',
      'Contributed to Kafka-based event flows used for asynchronous communication between platform components.',
      'Optimized MySQL queries and refactored existing backend components to improve performance, maintainability, and code quality.',
      'Implemented JasperReports-based PDF generation for contracts, invoices, reports, and customer summaries.',
      'Delivered backend functionality supporting CRM agents with issue tracking, service adjustments, escalations, and operational workflows.',
      'Collaborated with product, QA, and DevOps teams throughout feature development, testing, deployment, and production support.',
      'Participated in Jenkins-based CI/CD processes and ongoing architectural improvements across the platform.',
    ],
  },
  {
    name: 'Enetel Solutions',
    position: 'Java Backend Engineer',
    url: 'https://www.enetelsolutions.com/',
    startDate: '2022-07-01',
    endDate: '2023-01-01',
    summary: 'QIIS healthcare quality monitoring platform',
    highlights: [
      'Developed Spring Boot backend services for a platform used to monitor and evaluate healthcare quality indicators.',
      'Implemented business logic for calculating healthcare metrics using data received from external partner systems.',
      'Customized authentication and authorization flows using Spring Security.',
      'Developed Excel and PDF reporting functionality using JasperReports.',
      'Worked with PostgreSQL and MongoDB for relational and document-based data storage.',
      'Used MapStruct for DTO and entity mapping to keep transformation logic clear and maintainable.',
      'Maintained unit tests for core backend functionality to improve reliability and prevent regressions.',
    ],
  },
  {
    name: 'Enetel Solutions',
    position: 'Java Backend Engineer',
    url: 'https://www.enetelsolutions.com/',
    startDate: '2022-01-01',
    endDate: '2022-07-01',
    summary: 'UBS loan refinancing platform for the Association of Serbian Banks',
    highlights: [
      'Developed backend functionality for a loan refinancing platform used by the Association of Serbian Banks.',
      'Implemented workflows for creating, processing, and validating refinancing requests.',
      'Configured authentication and authorization functionality using Spring Security.',
      'Integrated Alfresco for document storage and document-management workflows.',
      'Created PDF reports and business documents using JasperReports.',
      'Worked directly with clients to clarify business requirements and ensure accurate implementation of refinancing processes.',
      'Built backend functionality using Java 11, Spring Boot, PostgreSQL, and Alfresco.',
    ],
  },
  {
    name: 'DIB Travel',
    position: 'Java Backend Engineer',
    url: 'https://dibtravel.com/',
    startDate: '2020-11-01',
    endDate: '2022-01-01',
    summary: 'Corporate travel and airline reservation platform',
    highlights: [
      'Contributed to the development of backend services for a corporate travel and airline reservation platform.',
      'Implemented flight-booking functionality including seat selection, baggage handling, and ticket generation.',
      'Integrated third-party airline and travel providers for flight availability, reservation, and booking data.',
      'Built and maintained backend APIs using Java 11, Spring Boot, and Reactive Spring.',
      'Worked with MySQL and MongoDB to manage transactional and supporting application data.',
      'Used MapStruct for object mapping and maintained unit tests for important backend workflows.',
      'Investigated integration issues and contributed to improving the stability of external provider communication.',
    ],
  },
];

export default work;
