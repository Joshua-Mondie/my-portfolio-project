/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/images/logo.svg";
import {
	Facebook,
	Twitter,
	Instagram,
	Github,
	Linkedin,
	Google,
} from "react-bootstrap-icons";

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					{/* <MailchimpForm /> */}

					<Col sm={6}>
						<img src={logo} />
					</Col>

					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.facebook.com/joshua.mondie.9"
								target="_blank"
							>
								{/* <i className="mx-2"> */}
								<Facebook className="my-icon" />
								{/* </i> */}
							</a>
							<a href="https://twitter.com/joshmondie" target="_blank">
								<Twitter className="my-icon" />
							</a>
							<a
								href="https://www.linkedin.com/in/joshua-daniel-363889248"
								target="_blank"
							>
								{/* <i className="mx-2"> */}
								<Linkedin className="my-icon" />
								{/* </i> */}
							</a>
							<a href="https://www.instagram.com/josh__dany/" target="_blank">
								<Instagram className="my-icon" />
							</a>
							<a href="https://github.com/Joshua-Mondie" target="_blank">
								{/* <i className="mx-2"> */}
								<Github className="my-icon" />
								{/* </i> */}
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
