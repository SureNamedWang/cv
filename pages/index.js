import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { GoAlert, GoDatabase, GoFlame } from "react-icons/go";
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
				<section className="profile">
					<Container>
						<header className="profile-header">
							Hi, my name is Moses Pratama Purnomo
						</header>
						<article className="profile-body">
							<p>
								I have 2 years of professional experience as
								full-stack developer. I am passionate about
								website development. I have made more than 30
								web based applications. Currently I am trying
								some technology on the front-end side like
								ReactJS, and NextJS.
							</p>
						</article>
					</Container>
				</section>
				<section className="techs">
					<article>
						<Container>
							<Row>
								<Col xs={12} sm={6} md={4} lg={4} xl={4}>
									<Card className="techs-card">
										<Card.Body>
											<Card.Title className="techs-header">
												<GoAlert className="techs-icon" />
												<h1>Past</h1>
												<p>
													Some of these i learned
													because it piqued my
													interest, but i don't use it
													for my daily works.
												</p>
											</Card.Title>
											<hr />
											<Card.Text className="techs-text">
												<Row>
													<Col
														xs={12}
														className="tech-text-1"
													>
														<p>
															<strong>
																Techs List:
															</strong>
														</p>
														<ul>
															<li>Laravel 5</li>
															<li>Flutter</li>
															<li>C#</li>
															<li>Phyton</li>
															<li>Dart</li>
														</ul>
													</Col>
													<Col
														xs={12}
														className="tech-text-2"
													>
														<p>
															<strong>
																Tools
															</strong>
														</p>
														<ul>
															<li>Netbeans</li>
															<li>
																VisualStudio
															</li>
															<li>
																Jupyter Notebook
															</li>
															<li>
																Android Studio
															</li>
														</ul>
													</Col>
												</Row>
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
								<Col xs={12} sm={6} md={4} lg={4} xl={4}>
									<Card className="techs-card">
										<Card.Body>
											<Card.Title className="techs-header">
												<GoDatabase className="techs-icon" />
												<h1>Backend</h1>
												<p>
													I mainly works using MVC
													pattern, as for databases
													all of my works so far are
													using relational databases
												</p>
											</Card.Title>
											<hr />
											<Card.Text className="techs-text">
												<Row>
													<Col
														xs={12}
														className="tech-text-1"
													>
														<p>
															<strong>
																Language
															</strong>
														</p>
														<ul>
															<li>PHP</li>
															<li>SQL</li>
														</ul>
													</Col>
													<Col
														xs={12}
														className="tech-text-2"
													>
														<p>
															<strong>
																Libraries /
																Tools /
																Framework
															</strong>
														</p>
														<ul>
															<li>CodeIgniter</li>
															<li>
																SQL Server
																Management
																Studio
															</li>
															<li>XAMPP</li>
															<li>HeidiSQL</li>
														</ul>
													</Col>
												</Row>
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
								<Col xs={12} sm={6} md={4} lg={4} xl={4}>
									<Card className="techs-card">
										<Card.Body>
											<Card.Title className="techs-header">
												<GoFlame className="techs-icon" />
												<h1>Frontend</h1>
												<p>
													I often use frontend
													framework, mainly because i
													often need to develop within
													weeks maybe even days.
												</p>
											</Card.Title>
											<hr />
											<Card.Text className="techs-text">
												<Row>
													<Col
														xs={12}
														className="tech-text-1"
													>
														<p>
															<strong>
																Languages :
															</strong>
														</p>
														<ul>
															<li>HTML</li>
															<li>CSS</li>
															<li>Javascript</li>
														</ul>
													</Col>
													<Col
														xs={12}
														className="tech-text-2"
													>
														<p>
															<strong>
																Libraries /
																Tools /
																Framework
															</strong>
														</p>
														<ul>
															<li>Bootstrap</li>
															<li>Materialize</li>
															<li>JQuery</li>
															<li>AJAX</li>
															<li>Datatable</li>
															<li>MomentJS</li>
															<li>ChartJS</li>
														</ul>
													</Col>
												</Row>
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					</article>
				</section>
			</main>
		</>
	);
}
