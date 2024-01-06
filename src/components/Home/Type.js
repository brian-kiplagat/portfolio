import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Freelancer",
                    "Building on Javascript",
                    "Building on Typescript",
                    "Building with React",
                    "API Developer",
                    "Open Source Contributor",
                    "DevOps"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
