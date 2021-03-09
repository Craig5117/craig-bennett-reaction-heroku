import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Skill from '../Skill/Skill';

function Resume() {
    const skills = [{name: "Front-end",  skillset: ["HTML", "CSS", "JavaScript", "Bootstrap", "Bulma", "Materialize", "React", "React Bootstrap"]}, {name: "Back-end", skillset: ["Node.js", "Express.js", "MySQL", "Sequelize", "MongoDB", "Mongoose", "MongoDB Atlas", "Inquirer.js"]}]
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Resume</h3>
        </div>
      </div>
      <p className="resume-text">
        A list of my skills can be found below. In addition to the skills
        listed, I also have experience working with GitHub and Heroku. Use the
        provided blue link to download my resume.
      </p>
      <div className="d-flex justify-content-end mb-5 ">
        <div className="skew resume-link text-center">
          <a href="./Craig-Bennett_Resume.pdf" download>
            <p className="anti-skew resume-link-text">
              My Resume <i className="fas fa-file-download"></i>
            </p>
          </a>
        </div>
      </div>
      <div className="skills-border mb-5">
        <Container className="skills-container pb-5">
          <div className="bg-theme-2 skew skills-header mt-4 ml-1 ml-md-5">
            <h4 className="anti-skew">My Skills</h4>
          </div>
          <Row className="skills d-flex justify-content-center">
          {skills.map((skillset, i) => ( 
          <Skill
            name={skillset.name} 
            skillset={skillset.skillset}
            key={i}
            />
        ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Resume;
