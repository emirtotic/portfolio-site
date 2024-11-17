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
    summary: 'Hyperoptic company has its own (in-house) project that I have been actively working on daily since January 2023. Given that the software has been developed over the years to meet the needs of Hyperoptic’s service users, it has been built using a variety of tools and frameworks. My daily work involves addressing user and agent requests through programming implementations, which includes working with relational databases, efficient Java programming, Kafka, Jasper, Jenkins, developing integrations and solutions for communication with other services, etc. In addition to the programming aspect, working on such a project requires strong teamwork and communication with colleagues, which is a crucial factor for business success.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
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
      'Developing various solutions for health care monitoring, such as calculating health care indicators based on data retrieved through integration with a partner companys system, implementing Spring Security with a modified approach, setting up reporting solutions for Excel and PDF formats using the Jasper platform, covering all functionalities with unit tests, etc. Technologies used: Java 11, Spring Boot, Spring Security, PostgreSQL, Mongo, MapStruct service, Jasper reports.',
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
      'Setup and development of solutions for the UBS (Association of SerbianBanks) loan refinancing application. Among all implementations and workflows, I would highlight solutions for creating and validating loan refinancing requests, implementing solutions for processing and validating loan refinancing requests, implementing Spring Security, working with documents on the Alfresco platform, designing and creating Jasper reports, communicating with clients via email, etc. Work on this project includes communication with the PostgreSQL database, Java 11, Spring Boot, Spring Security, Jasper reports, and the Alfresco document platform.',
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
      'As a junior developer at my first job from November 2020 to January 2022, I participated in developing various solutions for the integration of flights in the in-house DFS (Dib Flight Service) project. This included new functionalities for flight and airline ticket reservations, such as seat reservations, baggage, ticket preparation and printing, additional benefits for flights depending on the class, etc. The work on this service involved communication with databases as well as gathering data from third-party services through integrations with our partners systems. The technologies used were Java 11, Spring Boot, Reactive Spring, MapStruct service, MySQL, MongoDB, Unit tests, etc.',
    ],
  },
];

export default work;
