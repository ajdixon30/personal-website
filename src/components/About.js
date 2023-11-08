import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-container container border-bottom border-black border-2" id="about">
            <div className="row">
                <div className="col-12">
                    <p className="fs-3">
                        Hi, my name is Adam. I have a bachelor's degree in Mechanical engineering,
                        but I always had an interest in computer programming since taking robotics
                        in high school. <br /> <br/>
                    </p>
                </div>
                <div className="col-12">
                    <ul className="fs-3 interests-list">
                        Outside of programming, my interests include:
                        <li className="fs-4 fw-semibold py-2">Basketball</li>
                        <li className="fs-4 fw-semibold py-2">Baseball</li>
                        <li className="fs-4 fw-semibold py-2">Cartoons</li>
                        <li className="fs-4 fw-semibold py-2">Video Games</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;