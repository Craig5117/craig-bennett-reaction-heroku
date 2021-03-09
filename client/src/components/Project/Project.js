import React from 'react';
import { Accordion, Card, Col } from 'react-bootstrap';

function Project(props) {
    const {
        project,
        i
    } = props;

    const renderLinkDisplay = () => {
        if (i === 4 || i === 5) {
            return (
                <i className="fas fa-film icon-link icon"></i>
            )
        }
        return (
            <span className="site-link">Site</span>
        )
    }

    return (
        <Col xs={11} md={6} className="card-slot mb-5">
          <Accordion defaultActiveKey="0">
            <Card className="project-card">
              <Card.Title className="project-title">{project.title}</Card.Title>
              <Card.Header>
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="0"
                >
                  Image
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Img
                  src={
                    require(`../../assets/images/projects/${i}.webp`)
                      .default
                  }
                  className="project"
                />
              </Accordion.Collapse>
            </Card>
            <Card className="project-card">
              <Card.Header>
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="1"
                >
                  Details
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="details">
                   {project.details}
                  </p>
                  <div>
                  <Card.Link
                    href={project.pLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {renderLinkDisplay()}
                  </Card.Link>
                  <Card.Link
                    href={project.rLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <i className="fab fa-github icon-link icon"></i>
                  </Card.Link>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
              <Card.Text>{project.highlights}</Card.Text>
            </Card>
          </Accordion>
        </Col>
    )
}

export default Project;