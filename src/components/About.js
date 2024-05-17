import React from 'react'

import '../style/About.css'
import '../style/Card.css'
import Brand from './mini-components/About/Brand'
import Developer from './mini-components/About/Developer'

const About = () => {
    return (
        <div  className="about-container">
            <Brand />
            <Developer />
        </div>
    )
}

export default About