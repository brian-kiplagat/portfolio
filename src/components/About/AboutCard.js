import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Brian Kiplagat </span>
                        from <span className="purple"> Nairobi, Kenya.</span> I am an Enthusiastic and dedicated
                        <span className="purple"> Full Stack Developer</span> with a passion for crafting efficient, user-centric, and innovative
                        web solutions. Leveraging a strong foundation in both front-end and back-end technologies,
                        I am committed to creating seamless digital experiences that bridge the gap between design
                        and functionality. With a keen eye for detail and a collaborative mindset with over 3 years of
                        experience providing high-level support to Fintechs. I possess exceptional communication and
                        interpersonal skills with a proven ability to work <span className="purple">independently, remotely</span> and as part of a team
                        <br/>
                        <br/>
                        I am currently employed as a fullstack software developer at Nectar Mobile.
                        <br/>
                        <br/>
                        With a strong educational background in Software engineering, I am completing my BSC Software Engineering Degree at Zetech University in Kenya.
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Swimming
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Brian</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
