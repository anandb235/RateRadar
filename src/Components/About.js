import React from 'react'

import '../style/About.css'
import '../style/Card.css'
import Logo from '../assets/RateRadar.svg.png'
import SelfImage from '../assets/SelfImage.jpg'

function About() {

    const about = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    const logo = { "margin": "20vh 0vw 0vh 65vw", "height": "37vh", "width": "20vw" }
    const selfImage = { "margin": "65vh 0vw 0vh 18vw", "width": "200px", "height": "200px" }
    const dev = { "margin": "65vh 0vw 0vh 37vw", "width": "40vw", "height": "30vh" }

    return (
        <div>
            <div className="card about" style={ about }>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur maxime temporibus molestiae accusantium nam iusto amet reiciendis laboriosam consequuntur? Quas numquam fugiat harum odio eaque nam natus minus nesciunt rem.</p>
            </div>
            <img src={ Logo } style={ logo } alt="Logo"></img>
            <div className="role">Developer</div>
            <img src={ SelfImage } style={ { ...selfImage, "borderRadius": "50%" } } alt="Logo"></img>
			<div className="card about" style={ dev }>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquam ducimus illum aperiam, qui quibusdam.</p>
            </div>
        </div>
    )
}

export default About