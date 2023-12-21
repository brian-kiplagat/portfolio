import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "LEMP Stack Developer",
                    "Open Source Contributor",
                    "Centos 7 User"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
