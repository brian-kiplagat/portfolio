import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Building on Wized, Webflow and Xano",
                    "Building with Javascript",
                    "Building with Typescript",
                    "Building with React",
                    "API Developer",
                    "Freelancer",
                    "Open Source Contributor",
                    "DevOps",
                    "Linux Junkie",
                    "Remote Dev"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
