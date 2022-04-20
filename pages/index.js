import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { GoAlert, GoDatabase } from "react-icons/go";
// import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Moses Pratama Purnomo</title>
				<meta
					name="description"
					content="Moses Pratama Purnomo. Website Developer with 2 years of professional experience"
				/>
				<meta
					name="keywords"
					content="Web, Developer, HTML, CSS, CodeIgniter, Javascript"
				/>
				<meta name="author" content="Moses Pratama Purnomo" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section className="hero">
					<Container>
						<header>
							<Row>
								<Col
									className="hero-header"
									xs={12}
									sm={12}
									md={12}
									xl={12}
								>
									Full Stack Web Developer
								</Col>
							</Row>
						</header>
						<article>
							<Row>
								<Col
									className="hero-sub"
									xs={12}
									sm={12}
									md={12}
									xl={12}
								>
									I design and code functional web based
									applications
								</Col>
								<Col>
									<div className="hero-image text-center">
										<Image
											src="/code2.png"
											width={300}
											height={250}
											className="flex"
											alt="closed tag computer picture"
										/>
									</div>
								</Col>
							</Row>
						</article>
					</Container>
				</section>
			</main>
		</>
	);
}
