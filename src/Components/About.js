import React from 'react'
import '../style/Card.css'

function About() {

    const RateRadar = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    const Developer = { "margin": "65vh 0vw 0vh 45vw", "width": "40vw", "height": "30vh" }

    return (
        <div>
            <div className="card" style={ RateRadar }></div>
			<div className="card" style={ Developer }></div>
        </div>
    )
}

export default About