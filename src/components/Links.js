import React from "react";
import "../styles/Links.css";

const Links = () => {
    const sites = [
        {
            website: 'Poeltl Clone',
            url: 'https://github.com/ajdixon30/Poeltl_Clone'
        },
        {
            website: 'Weather App',
            url: 'https://github.com/ajdixon30/Weather-App'
        },
        {
            website: 'Milestone Quiz',
            url: 'https://github.com/ajdixon30/nba-milestones-quiz'
        },
        {
            website: 'Vending Machine',
            url: 'https://github.com/ajdixon30/vending-machine-react'
        },
        {
            website: 'LinkedIn',
            url: 'https://www.linkedin.com/in/adam-julian-dixon/'
        },
        {
            website: 'GitHub',
            url: 'https://github.com/ajdixon30'
        },
        {
            website: 'Indeed',
            url: 'https://www.indeed.com'
        },
    ]
    return (
        <div className="container py-5">
            {sites.map((site, index) => {
                if (site.url !== '#') {
                    return (
                        <div key={index} className="mb-3 col-4 d-grid mx-auto">
                            <a className="btn btn-outline-primary" href={site.url} target="_blank" rel="noreferrer">
                                <p className="h5">{site.website}</p>
                                <p className>{site.url}</p>
                            </a>
                        </div>
                    )
                }
                return "";
            })}
        </div>
    )
}

export default Links