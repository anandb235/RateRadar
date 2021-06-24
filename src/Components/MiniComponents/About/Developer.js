import React from 'react'

import SelfImage from '../../../assets/SelfImage.jpg'
import Contact from "./Contact";

const Developer = () => {
    return (
        <div className="developer-container">
            <div className="role">Developer</div>
            <img src={SelfImage} alt="Dev"></img>
            <div className="card developer-card">
                <p>
                    I'm&nbsp;
                    <span>Anand Borkar</span> —
                    a web development enthusiast currently pursuing my Bachelor of Engineering
                    at
                    <a href="http://siesgst.edu.in"> SIES Graduate School of Technology, Navi Mumbai</a>.
                    <br/>
                    <br/>
                    I'm always eager to learn, build, and collaborate on exciting tech projects.
                    <br/>
                    <br/>
                    Feel free to explore the <a href="https://github.com/anandb235/RateRadar">repository</a>,
                    dive into the codebase, suggest improvements, or contribute new features to help this
                    project grow!
                </p>
            </div>
            <Contact/>
        </div>
    )
}

export default Developer