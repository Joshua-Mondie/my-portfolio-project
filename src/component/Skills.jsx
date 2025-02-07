/** @format */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
// import typescript from "../assets/images/typescript.svg";
// import meter2 from "../assets/images/meter2.svg";
// import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";
import {
	SiTypescript,
	SiTailwindcss,
	SiBootstrap,
	SiHtml5,
	SiCss3,
	SiReact,
} from "react-icons/si";

const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			//   slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			//   slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			//   slidesToSlide: 1
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row className="">
					<Col className="col-container ">
						<div className="skill-bx ">
							<h2>Skills</h2>

							<p>These are some skills I have acquired on this journey!😊</p>

							<Carousel
								responsive={responsive}
								infinite={true}
								className="skill-slider"
							>
								<div className="item">
									<SiTypescript size={80} color="rgb(0, 122, 204)" />
									<h5>Typescript</h5>
								</div>

								<div className="item">
									<SiTailwindcss size={80} color="rgb(0, 216, 255)" />

									<h5>Tailwindcss</h5>
								</div>

								<div className="item">
									<SiBootstrap size={80} color="rgb(170, 0, 255)" />

									<h5>Bootstrap</h5>
								</div>

								<div className="item">
									<SiHtml5 size={80} color="orangered" />

									<h5>HTML/CSS</h5>
								</div>

								<div className="item">
									{/* <SiHtml5 size={70} color="orangered" /> */}
									<SiReact size={80} color="rgb(0, 216, 255)" />

									<h5>React</h5>
								</div>

								<div className="item">
									{/* <SiHtml5 size={70} color="orangered" /> */}
									<SiReact size={80} color="rgb(0, 216, 255)" />

									<h5>React Native</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>

			<img className="background-image-left" src={colorSharp} alt="" />
		</section>
	);
};

export default Skills;
