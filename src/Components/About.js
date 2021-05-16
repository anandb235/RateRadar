import React from 'react'

import '../style/About.css'
import '../style/Card.css'
import Brand from './MiniComponents/About/Brand'
import Developer from './MiniComponents/About/Developer'

function About() {

    return (
        <div>
            <Brand />
            <Developer />
        </div>
    )
}

export default About