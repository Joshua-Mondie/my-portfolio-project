/** @format */

import React from "react";
import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg from "../assets/images/proj-img.png";
import projImg1 from "../assets/images/instagram-react1.png";
import projImg3 from "../assets/images/product-page1.png";
import projImg4 from "../assets/images/product-page2.png";
import projImg5 from "../assets/images/medium-clone1.png";
import projImg6 from "../assets/images/medium-clone2.png";

import TrackVisibility from "react-on-screen";
import "animate.css";

export const Project = () => {
	const projects = [
		{
			title: "GCP Webapp",
			description: "I developed a webapp for a company called GCP ",
			imgUrl: projImg,
		},
		{
			title: "Instagram React 1",
			description: "I cloned Instagram's landing page with Reactjs",
			imgUrl: projImg1,
		},
		{
			title: "Product Page 1",
			description: "I replicated a Product Page using HTML/CSS and JavaScript",
			imgUrl: projImg3,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h2>Projects</h2>
									<p>
										These are some of the little projects I have done. Some are
										quite interesting, while some are just basic stuff. I have
										other projects I am working on and will update them as soon
										as I am done with them.
									</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">Project Snippet</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">
													Github Profile Link
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Resume Download</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible ? "animate__animated animate__slideInUp" : ""
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{projects.map((project, index) => {
														return <ProjectCards key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>
													The repositories to the projects displayed here and
													other nice projects can be found in my Github address
													in the link below
												</p>

												<a
													href="https://github.com/Joshua-Mondie"
													target="_blank"
													className="repo-link"
												>
													Git Hub Repositories
												</a>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>My Resume is available here for download</p>
												<a
													class="live_link"
													href="/src/assets/images/Joshua_Mondie_Daniel_resume.pdf"
													download="/src/assets/images/Joshua_Mondie_Daniel_resume.pdf"
													className="repo-link"
												>
													click here to download my resume
												</a>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
