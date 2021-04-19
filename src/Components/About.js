import React from 'react'
import Card from './MiniComponents/Card'

function About() {

    const RateRadar = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    const Developer = { "margin": "65vh 0vw 0vh 45vw", "width": "40vw", "height": "30vh" }

    return (
        <div>
            <Card prop = { RateRadar } />
            <Card prop = { Developer } />
        </div>
    )
}

export default About