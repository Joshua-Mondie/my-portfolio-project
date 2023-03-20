import React from "react";
import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/instagram-react1.png";
import projImg2 from "../assets/images/instagram-react2.png";
import projImg3 from "../assets/images/product-page1.png";
import projImg4 from "../assets/images/product-page2.png";
import projImg5 from "../assets/images/medium-clone1.png";
import projImg6 from "../assets/images/medium-clone2.png";



import TrackVisibility from 'react-on-screen';
import 'animate.css';



export const Project = () => {

  const projects = [
    {
      title: "Instagram React 1",
      description: "My instagram profile",
      imgUrl: projImg1,
    },
    {
      title: "Instagram React 2",
      description: "My Instagram Profile",
      imgUrl: projImg2,
    },
    {
      title: "Product Page 1",
      description: "Product Page",
      imgUrl: projImg3,
    },
    {
      title: "Product Page 2",
      description: "Product Page",
      imgUrl: projImg4,
    },
    {
      title: "Medium Clone 1",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Medium Clone 2",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}