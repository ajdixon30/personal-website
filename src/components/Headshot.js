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
        <div className="my-5" id="contact">
            <img src="adam_prof_2.jpg" className="rounded mx-auto mb-3" id="headshot" alt="My headshot"/>
            <p className="fs-2">Adam Dixon</p>
            <p className="fs-4">Aspiring Software Developer</p>
            <p className="fs-5"><b><u>Email:</u></b> adam.dixon30@gmail.com</p>
            {sites.map((site, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col">
                            <p className="fs-5 fw-bold"><a className="link-light" href={site.url} target="_blank" rel="noreferrer">{site.website}</a></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Headshot