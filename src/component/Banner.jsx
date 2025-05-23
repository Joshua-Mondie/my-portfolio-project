/** @format */

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileimg from "../assets/images/profileimg.png";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["a Reactjs Developer", " I love to write codes!!"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
								// className={
								// 	isVisible ? "animate__animated animate__fadeIn" : ""
								// }
								>
									<span className="tagline">Welcome to my Portfolio</span>
									<h1>
										{`Hi i'm Joshua,`} <span className="wrap">{text}</span>
									</h1>
									<p>
										I am a passionate front-end developer with a keen eye for
										creating visually appealing and user-friendly web and mobile
										interfaces. Skilled in HTML, CSS, JavaScript, and frameworks
										like React and React Native, I specialize in bringing
										designs to life and ensuring seamless user experiences.
									</p>
									<button onClick={() => console.log("connect")}>
										Let's Connect on LinkedIn
										<a
											href="https://www.linkedin.com/in/joshua-daniel-363889248"
											target="_blank"
										>
											<ArrowRightCircle size={25} />
										</a>
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
								// className={
								// 	isVisible ? "animate__animated animate__zoomIn" : ""
								// }
								>
									<img src={profileimg} alt="Header Img" className="face-img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
