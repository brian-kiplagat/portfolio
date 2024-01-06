import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Building on Javascript",
                    "Building on Typescript",
                    "Building with React",
                    "API Developer",
                    "Freelancer",
                    "Open Source Contributor",
                    "DevOps",
                    "Linux Junkie"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
