// TODO Add a couple lines about each project
const data = [
  {
    title: 'Hyperoptic',
    subtitle: 'In House Platform',
    link: 'https://hyperoptic.com',
    image: '/images/projects/hyperoptic.jpg',
    date: '2023-01-19',
    desc:
      'Since January 2023, I’ve been actively contributing to Hyperoptic’s in-house platform, which supports billing, customer services, and technical support operations. The project spans a wide range of technologies developed over the years, and my daily responsibilities include backend development using Java and SQL, optimizing system performance, maintaining Kafka-based communication pipelines, and building custom integrations with third-party services. I also contribute to document generation using Jasper, CI/CD processes through Jenkins, and internal tools that support our customer support agents. Collaboration with product and technical teams is key to delivering scalable and reliable features within this large-scale system.',
  },
  {
    title: 'Enetel Solutions - QIIS Project',
    subtitle: 'Platform for monitoring health care quality indicators',
    link: 'https://www.enetelsolutions.com/',
    image: '/images/projects/enetel-solutions.png',
    date: '2022-07-01',
    desc:
      'At Enetel Solutions, I contributed to the development of QIIS — a platform for monitoring healthcare quality indicators. My work included implementing backend logic for calculating indicators based on data from partner systems, developing a customized Spring Security layer, and creating dynamic reports in both Excel and PDF formats using JasperReports. The project also involved writing unit tests to ensure robustness and working with technologies like Java 11, Spring Boot, PostgreSQL, MongoDB, MapStruct, and Jasper.',
  },
  {
    title: 'Enetel Solutions - UBS Project',
    subtitle: 'Platform for loan refinancing',
    link: 'https://www.enetelsolutions.com/',
    image: '/images/projects/enetel-solutions.png',
    date: '2022-01-01',
    desc:
      'As part of the UBS refinancing project for the Association of Serbian Banks, I worked on implementing and validating backend workflows for processing loan requests. This included integrating Spring Security for secure access, handling documents using the Alfresco platform, and generating dynamic reports with JasperReports. I also communicated directly with clients to clarify requirements and business logic. The stack included Java 11, Spring Boot, PostgreSQL, Alfresco, and JasperReports.',
  },
  {
    title: 'DIB Travel',
    subtitle: 'Platform for corporate travel',
    link: 'https://dibtravel.com/',
    image: '/images/projects/dib.png',
    date: '2020-11-01',
    desc:
      'At DIB Travel, I started my career as a junior backend developer on the in-house DFS (Dib Flight Service) platform. I contributed to features such as flight and ticket reservations, seat selection, baggage management, and class-based perks. The role involved integrating with third-party providers, building REST APIs, and managing data using MySQL and MongoDB. The stack included Java 11, Spring Boot, Reactive Spring, MapStruct, and unit testing tools.',
  },
  {
    title: 'Mood Tracker',
    subtitle: 'Track, Understand & Improve Your Mental Well-being',
    link: 'https://moodtracker-app-production.up.railway.app',
    image: '/images/projects/moodtracker.jpeg',
    date: '2025-08-01',
    desc:
      'Mood Tracker is a Java + Spring Boot application that allows users to track their daily moods and emotions, identify behavioral patterns, and receive AI-driven recommendations to improve their mental well-being. The project uses MySQL for data storage, Kafka for event-driven notifications, MapStruct for DTO mapping, and Spring AI for mood analysis and generating personalized suggestions. The frontend is built with React, providing a responsive and interactive interface for users to log and visualize their moods. The application is fully Dockerized and live on Railway, demonstrating how complex backend functionalities can be integrated into real-world applications with a focus on security, privacy, and scalability.',
  },
  {
    title: 'Status Pulse',
    subtitle: 'Minimalistic, Fast & Reliable API Monitoring',
    link: 'https://statuspulse.up.railway.app/',
    image: '/images/projects/statuspulse.jpeg',
    date: '2025-07-14',
    desc:
      'StatusPulse is a lightweight API monitoring SaaS built in Rust that helps developers, freelancers, and indie makers keep track of their services. It performs periodic health checks, sends instant email alerts via SendGrid, and logs response times and uptime percentages. The frontend is rendered with Tera templates for a fast and simple dashboard experience. The backend is fully async with Tokio, MySQL (via SQLx), and background workers handling monitoring cycles efficiently. The application is Dockerized and live on Railway, demonstrating how performant and scalable Rust applications can be deployed for real-world usage with a focus on security, reliability, and developer experience.',
  },
  {
    title: 'MORE PERSONAL PROJECTS',
    subtitle: 'Personal projects',
    link: 'https://github.com/emirtotic',
    image: '/images/projects/git.jpg',
    date: '2025-01-01',
    desc:
      'As a proactive and curious developer, I regularly engage in personal projects to sharpen my skills and experiment with new technologies. One of my key projects is a full-featured aviation management system built using Spring Boot, Kafka, MySQL, and JasperReports, designed with a microservice architecture. You can explore more of my work on GitHub.',
  },
];

export default data;
