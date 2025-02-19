import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            Hi, Im Brian. I am a fullstack developer based in Nairobi, Kenya. I am a tried and
                            tested dev with
                            3 years experience building solid applications on the web
                            <br/>
                            <br/>I am fluent in classics like
                            <i>
                                <b className="purple"> C++, Java and Laravel </b>
                            </i>
                            , I also apply my deep passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript and Typescript Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Svelte</b>
                            </i>
                            <br/>
                            <br/>
                            My current focus and field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> especially in areas related
                                to{" "}
                                <b className="purple">
                                    No Code.
                                </b>
                            </i>

                            <br/>
                            <br />
                            I am highly invested in developing technologies like  <i>
                            <b className="purple"> Webflow, Wized and Xano </b>
                        </i>
                            <br />
                            <br/>
                            I love Linux (I love penguins) and almost 100% self-host all my applications on my Ubuntu 22.04
                            VM.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/brian-kiplagat"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/bitcoindevke"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/brian-kiplagat-940b76190/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
