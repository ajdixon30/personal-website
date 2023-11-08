import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-container container border-bottom border-black border-2" id="about">
            <div className="row pb-5">
                <div className="col-10 offset-1 col-md-8 offset-md-2">
                    <p id="intro">
                        Hi, my name is Adam. I have a bachelor's degree in Mechanical engineering,
                        but I have always had an interest in computer programming since taking robotics
                        in high school. <br /> <br/>
                    </p>
                </div>
                <div className="col-10 offset-1 col-md-8 offset-md-2">
                    <ul id="interests-list">
                        <p id="interests-preface">Outside of programming, my interests include:</p>
                        <li className="fw-semibold interest">Basketball</li>
                        <li className="fw-semibold interest">Baseball</li>
                        <li className="fw-semibold interest">Cartoons</li>
                        <li className="fw-semibold interest">Video Games</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;