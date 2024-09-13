import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import { webProjects, androidProjects, pluginProjects } from "../data/projects"; // Assuming project data is separated
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleVisibility = (isVisible) => {
    if (isVisible && !hasAnimated) setHasAnimated(true);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => {
                handleVisibility(isVisible);
                const animationClasses = hasAnimated
                  ? "animate__animated animate__fadeIn"
                  : "";
                return (
                  <div className={animationClasses}>
                    <h2>Projects</h2>
                    <ProjectTabs hasAnimated={hasAnimated} />
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ProjectTabs = ({ hasAnimated }) => {
  const tabContentClasses = hasAnimated
    ? "animate__animated animate__slideInUp"
    : "";

  return (
    <Tab.Container id="projects-tabs" defaultActiveKey="first">
      <Nav
        variant="pills"
        className="nav-pills mb-5 justify-content-center align-items-center"
      >
        <TabTitle eventKey="first" title="Web Development" />
        <TabTitle eventKey="second" title="Android Development" />
        <TabTitle eventKey="third" title="Plugin Development" />
      </Nav>
      <Tab.Content id="slideInUp" className={tabContentClasses}>
        <TabPane eventKey="first" projects={webProjects} />
        <TabPane eventKey="second" projects={androidProjects} />
        <TabPane eventKey="third" projects={pluginProjects} />
      </Tab.Content>
    </Tab.Container>
  );
};

const TabTitle = ({ eventKey, title }) => (
  <Nav.Item>
    <Nav.Link eventKey={eventKey}>{title}</Nav.Link>
  </Nav.Item>
);

const TabPane = ({ eventKey, projects }) => (
  <Tab.Pane eventKey={eventKey}>
    <Row>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>
);
