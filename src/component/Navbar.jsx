/** @format */

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import {
	Facebook,
	Twitter,
	Whatsapp,
	Github,
	Linkedin,
	Google,
	Instagram,
} from "react-bootstrap-icons";

function Navigation() {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="Mondie" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={
								activeLink === "skills" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("link")}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href="#project"
							className={
								activeLink === "project" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("project")}
						>
							Project
						</Nav.Link>
					</Nav>

					<span className="navbar-text">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/joshua-daniel-363889248"
								target="_blank"
							>
								<Linkedin className="my-icon" />
							</a>
							<a
								href="https://www.facebook.com/joshua.mondie.9"
								target="_blank"
							>
								<Facebook className="my-icon" />
							</a>
							<a href="https://github.com/Joshua-Mondie" target="_blank">
								<Github className="my-icon" />
							</a>
							<a href="https://www.instagram.com/josh__dany/" target="_blank">
								<Instagram className="my-icon" />
							</a>
							<a href="https://twitter.com/joshmondie" target="_blank">
								<Twitter className="my-icon" />
							</a>
						</div>

						{/* <button
							className="btn btn-outline-white"
							onClick={() => {
								console.log("clicked");
							}}
						>
							Let's connect
						</button> */}
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
