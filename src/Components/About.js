import React from 'react'

import '../style/About.css'
import '../style/Card.css'
import Brand from './MiniComponents/About/Brand'
import Developer from './MiniComponents/About/Developer'

const About = () => {
    return (
        <div  className="about-container">
            <Brand />
            <Developer />
        </div>
    )
}

export default About