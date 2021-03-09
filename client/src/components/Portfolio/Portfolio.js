import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from '../Project/Project'

function Portfolio() {
    const projects = [
        {
            title: "SLP Goalden",
            details: "An app designed to help speech language pathologists keep track of student goals and goal progress. It utilizes a MySQL database and Handlebars templating engine. Built with Node, MySQL, Sequelize, Express, HTML, CSS, JavaScript.",
            highlights: "Node MySQL Materialize",
            pLink: "https://mighty-falls-97052.herokuapp.com/",
            rLink: "https://github.com/Craig5117/slp-goalden"
        },
        {
            title: "Off the Beaten Path",
            details: "An app that allows you to search for hiking trails near a location. It utilizes API calls, local storage, and DOM manipulation. Built with HTML, CSS, JavaScript, and jQuery.",
            highlights: "Javascript jQuery Bulma",
            pLink: "https://craig5117.github.io/off-the-beaten-path/",
            rLink: "https://github.com/Craig5117/off-the-beaten-path"
        },
        {
            title: "SLP Reach",
            details: "A tool for speech language pathologists to track their students' speech goal progress. It utilizes DOM manipulation and creates a JSON database that is stored with localStorage. Built with HTML, CSS, JavaScript, and jQuery.",
            highlights: "JavaScript jQuery Bootstrap",
            pLink: "https://craig5117.github.io/slp-reach/",
            rLink: "https://github.com/Craig5117/slp-reach"
        },
        {
            title: "The Tech Blog",
            details: "A full-stack CMS app for posting articles and opinions about tech relatated news. Utilizes MVC structure, node, Express, MySQL and Sequelize. Deployed to Heroku.",
            highlights: "Express MySQL Sequelize",
            pLink: "https://shielded-sea-02519.herokuapp.com/",
            rLink: "https://github.com/Craig5117/the-tech-blog"
        },
        {
            title: "Employee Manager",
            details: "Employee Manager is a command line app that interacts with a MySQL database to so that you can easily keep track your company's departments, roles, and employees. Utilizes node, MySQL, inquirer.js.",
            highlights: "MySQL Node Inquirer",
            pLink: "https://drive.google.com/file/d/13UkLrgf3CfAjvipaZ2PQmYJ3rc755--b/view",
            rLink: "https://github.com/Craig5117/employee-manager"
        },
        {
            title: "Roster Gen",
            details: "A node.js app that generates a company team roster based on user input. It utilizes Inquirer prompts through the command line to get user input for HTML generation. Built in Node with JavaScript, HTML, and CSS.",
            highlights: "Node Inquirer Bulma",
            pLink: "https://drive.google.com/file/d/14l8rQxY8J_3VQGWFs0ar7o2uVt6h1qe_/view",
            rLink: "https://github.com/Craig5117/roster-gen"
        },
    ]
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Portfolio</h3>
        </div>
      </div>
        <p className="portfolio-text">Check out some of my projects below. If you would like to see the repo for my portfolio site, <a href="https://github.com/Craig5117/craigbennett-reaction" target="_blank"
                    rel="nofollow noopener noreferrer">click here</a>.</p>
        <Container className="d-flex flex-wrap mt-5">
        {projects.map((project, i) => ( 
          <Project 
            project={project} 
            i={i}
            key={i}
            />
        ))}
            
        </Container>
    </section>
  );
}

export default Portfolio;