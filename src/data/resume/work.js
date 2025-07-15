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
    name: 'Hyperoptic',
    position: 'Java Backend Engineer',
    url: 'https://hyperoptic.com',
    startDate: '2023-01-19',
    summary: 'Hyperoptic Platform',
    highlights: [
      'At Hyperoptic, I worked on the company’s core platform used for managing customer services, billing, and support operations. I developed and maintained backend services in Java, optimized MySQL queries, and contributed to the event-driven architecture using Kafka. I created internal APIs for seamless communication between billing, provisioning, and support modules, and integrated JasperReports for dynamic PDF generation of contracts, invoices, and summaries. Additionally, I built backend features to support CRM agents with issue tracking, escalations, and service adjustments. I collaborated closely with product, QA, and DevOps teams, and participated in CI/CD processes using Jenkins. My work included ongoing refactoring and architectural improvements to enhance system performance.',
    ],
  },
  {
    name: 'Enetel Solutions',
    position: 'Java Backend Engineer',
    url: 'https://www.enetelsolutions.com/',
    startDate: '2022-07-01',
    endDate: '2023-01-01',
    summary: 'Platform for monitoring health care quality indicators - QIIS Project',
    highlights: [
      'I contributed to the development of QIIS, a platform for monitoring healthcare quality indicators. My responsibilities included implementing backend services in Java (Spring Boot) to calculate healthcare metrics based on data from external partner systems. I customized authentication flows using Spring Security, implemented Excel and PDF reporting via JasperReports, and used PostgreSQL and MongoDB for storage. I applied MapStruct for DTO mapping and maintained unit test coverage to ensure code reliability.',
    ],
  },
  {
    name: 'Enetel Solutions',
    position: 'Java Backend Engineer',
    url: 'https://www.enetelsolutions.com/',
    startDate: '2022-01-01',
    endDate: '2022-07-01',
    summary: 'Platform for loan refinancing - UBS Project (January 2022 - July 2022)',
    highlights: [
      'At Enetel Solutions, I worked on backend development for the UBS loan refinancing platform, used by the Association of Serbian Banks. My responsibilities included implementing core workflows for creating and validating refinancing requests, integrating Spring Security for authentication and authorization, and working with the Alfresco platform for document management. I also developed PDF reports using JasperReports and maintained regular communication with clients to clarify requirements and ensure accurate business flow implementation. The system was built with Java 11, Spring Boot, PostgreSQL, and Alfresco, following clean architecture principles.',
    ],
  },
  {
    name: 'DIB Travel',
    position: 'Java Backend Engineer',
    url: 'https://dibtravel.com/',
    startDate: '2020-11-01',
    endDate: '2022-01-01',
    summary: 'Platform for corporate travel',
    highlights: [
      'At DIB Travel, I contributed to the Dib Flight Service platform for airline reservations. I implemented features such as seat selection, baggage handling, and ticket generation. My work involved third-party integrations for flight data, building API services, and managing data with MySQL and MongoDB. The backend was developed using Java 11, Spring Boot, and Reactive Spring, with MapStruct for mapping and unit testing to ensure system stability.',
    ],
  },
];

export default work;
