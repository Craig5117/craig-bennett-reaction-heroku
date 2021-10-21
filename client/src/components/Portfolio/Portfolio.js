import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from '../Project/Project';

function Portfolio() {
  const projects = [
    {
      title: "Katy's ToyBox",
      details:
        "An inventory management system built for an online toy business. Built API built with Prisma, MySQL, and Apollo GraphQL. UI built with NextJS, React, and Material-UI.",
      highlights: 'NextJS/React Prisma GraphQL',
      pLink:
        'https://drive.google.com/file/d/1pjV5m76pWOr4zTMTHv55dp0XEdF8FF7x/view?usp=sharing',
      rLink: 'https://github.com/Craig5117/katys-toybox',
    },
    {
      title: 'SecureMoneyMasters',
      details:
        'Custom Wordpress theme designed for the landing site of SecureMoneyMastes, a financial advising firm in Bristol, TN. Built with WordPress/PHP, HTML, CSS, JavaScript, and React',
      highlights: 'WordPress PHP JavaScript',
      pLink: 'https://securemoneymasters.com/',
      rLink: 'https://github.com/Craig5117/secure-money-masters',
    },
    {
      title: 'SLP Goalden',
      details:
        'An app designed to help speech language pathologists keep track of student goals and goal progress. It utilizes a MySQL database and Handlebars templating engine. Built with Node, MySQL, Sequelize, Express, HTML, CSS, JavaScript.',
      highlights: 'Node MySQL Materialize',
      pLink: 'https://mighty-falls-97052.herokuapp.com/',
      rLink: 'https://github.com/Craig5117/slp-goalden',
    },
    {
      title: 'Off the Beaten Path',
      details:
        'An app that allows you to search for hiking trails near a location. It utilizes API calls, local storage, and DOM manipulation. Built with HTML, CSS, JavaScript, and jQuery.',
      highlights: 'Javascript jQuery Bulma',
      pLink: 'https://craig5117.github.io/off-the-beaten-path/',
      rLink: 'https://github.com/Craig5117/off-the-beaten-path',
    },
    {
      title: 'CritterTails',
      details:
        'A social media platform for pet lovers and their pets. Utilizes React, Redux, GraphQL, node, Express, JWT, image uploads with Cloudinary, MongoDB and Mongoose. Deployed to Heroku.',
      highlights: 'React Redux GraphQL JWT',
      pLink: 'https://crittertails.herokuapp.com/',
      rLink: 'https://github.com/Craig5117/critter',
    },    
    {
      title: 'Google Books Search',
      details:
        'A React app with a GraphQL back-end. I converted this from REST to GraphQL on the back-end and front-end. Utilizes apollo-server-express on the back-end and apollo-boost on the front-end. Also utilizes JWT for user authorization.',
      highlights: 'React GraphQL Apollo-GraphQL',
      pLink: 'https://craigs-books-search.herokuapp.com/',
      rLink: 'https://github.com/Craig5117/google-books-search',
    },
  ];
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Portfolio</h3>
        </div>
      </div>
      <p className="portfolio-text">
        Check out some of my projects below. If you would like to see the repo
        for my portfolio site,{' '}
        <a
          href="https://github.com/Craig5117/craig-bennett-reaction-heroku"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
      <Container className="d-flex flex-wrap mt-5">
        {projects.map((project, i) => (
          <Project project={project} i={i} key={i} />
        ))}
      </Container>
    </section>
  );
}

export default Portfolio;
