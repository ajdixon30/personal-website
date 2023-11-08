import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar bg-black bg-gradient">
            <span className="nav-link">
                <a className="link-light link-underline-opacity-0" href="#about">About</a>
            </span>
            <span className="nav-link">
                <a className="link-light link-underline-opacity-0" href="#portfolio">Portfolio</a>
            </span>
            <span className="nav-link ">
                <a className="link-light link-underline-opacity-0" href="#resume">Resume</a>
            </span>
            <span className="nav-link">
                <a className="link-light link-underline-opacity-0" href="#contact">Contact</a>
            </span>
        </div>
    )
}

export default Navbar;