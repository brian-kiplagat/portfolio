import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
   const [data,setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const APIBaseURL = 'https://x8ki-letl-twmt.n7.xano.io/api:7AzsX1rL'
                const response = await fetch(`${APIBaseURL}/projects`)
                const result = await response.json();
                setData(result);
                console.log(result)

            } catch (e) {
                console.log("Error",e)
            }
        }
        fetchData()

    }, []);

    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    {data && data.map((project, index) => (
                        <Col md={4} className="project-card" key={index}>
                            <ProjectCard
                                imgPath={project.imgPath}
                                isBlog={project.isBlog}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                                demoLink={project.demoLink}
                            />
                        </Col>
                    ))}


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
