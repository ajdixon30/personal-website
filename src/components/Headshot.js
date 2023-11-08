import React from "react"
import "../styles/Headshot.css"

const Headshot = () => {
    const sites = [
        {
            website: 'LinkedIn',
            url: 'https://www.linkedin.com/in/adam-julian-dixon/'
        },
        {
            website: 'Indeed',
            url: 'https://www.indeed.com'
        },
        {
            website: 'GitHub',
            url: 'https://github.com/ajdixon30'
        },
        {
            website: 'Poeltl Clone',
            url: 'https://github.com/ajdixon30/Poeltl_Clone'
        },
        {
            website: 'Weather App',
            url: 'https://github.com/ajdixon30/Weather-App'
        },
    ]
    return (
        <div className="container my-5" id="contact">
            <div className="row text-center">
                <div className="col-10 offset-1 col-md-8 offset-md-2">
                    <img src="adam_prof_2.jpg" className="rounded mx-auto mb-3" id="headshot" alt="My headshot"/>
                    <p id="contact-name">Adam Dixon</p>
                    <p id="contact-title">Aspiring Software Developer</p>
                    <p id="contact-email"><b><u>Email:</u></b> adam.dixon30@gmail.com</p>
                    {sites.map((site, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col">
                                    <p className="fw-bold link"><a className="link-dark" href={site.url} target="_blank" rel="noreferrer">{site.website}</a></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Headshot