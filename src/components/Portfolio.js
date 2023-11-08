import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
    return (
        <div className="container border-bottom border-black border-2" id="portfolio">
            <div className="row video-container">
                <div className="col-8 offset-2 col-md-6 offset-md-3 justify-content-center">
                    <p className="fw-semibold pb-5" id="projects-intro">
                        Here are a few of my projects:
                    </p>
                    <p className="project-title">
                        <a className="link-dark" href="https://ajdixon30-weather-app.netlify.app/" target="_blank" rel="noreferrer">Weather App</a>
                    </p>
                    <p className="text-start project-description">
                        This React application was created using the OpenWeatherMap API. This application
                        allows users to search a location's forecast by providing a city or zip code. The
                        provided forecast will inclde today's forecast (&#8457; &amp; &#8451;) as well
                        as a five-day forecast in a carousel format.
                    </p>
                    <video className="col-12" autoPlay controls>
                        <source src="weather_app.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="row video-container">
                <div className="col-8 offset-2 col-md-6 offset-md-3 justify-content-center">
                    <p className="project-title">
                        <a className="link-dark mb-3" href="https://poeltl-clone.onrender.com/" target="_blank" rel="noreferrer">Poeltl Clone</a>
                    </p>
                    <p className="text-start project-description">
                        This React application was an attempt to re-create the daily NBA player quiz, POELTL.
                        The balldontlie API was used to gather a list of NBA players, and Heroku was used to
                        host that data for a makeshift backend.
                    </p>
                    <video className="col-12" autoPlay controls>
                        <source src="poeltl_clone.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;