import React from "react";
import "../styles/Resume.css"

const Resume = () => {
    return (
        <div className="border-bottom border-black border-2 container resume-container justify-content-center text-start" id="resume">
            <div className="row pb-5">
                <div className="col-10 offset-1 col-md-8 offset-md-2">
                    <p className="border-bottom border-dark fw-semibold list-title">Skills:</p>
                    <ul className="list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>ReactJS</li>
                        <li>JavaScript</li> 
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-10 offset-1 col-md-8 offset-md-2">
                    <p className="border-bottom border-dark fw-semibold list-title">Education &amp; Work:</p>
                    <ul className="list">
                        <li>
                            Senior Associate - Infosys (Dec '21 - May '23)
                            <ul>
                                <li>Application Maintenance | Infosys | OneAmerica (Mar '22 - Mar '23)</li>
                            </ul>
                        </li>
                        <li>Associate - Revature (Sep '21 - Dec '21)</li>
                        <li>Lehigh University - B.S. in Mechanical Engineering | Minor in Economics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;