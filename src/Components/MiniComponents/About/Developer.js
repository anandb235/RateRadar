import React from 'react'

import SelfImage from '../../../assets/SelfImage.jpg'

function Developer() {

    const selfImage = { "margin": "65vh 0vw 0vh 18vw", "width": "200px", "height": "200px" }
    const dev = { "margin": "65vh 0vw 0vh 37vw", "width": "40vw", "height": "30vh" }

	return (
		<div>
			<div className="role">Developer</div>
			<img src={ SelfImage } style={ { ...selfImage, "borderRadius": "50%" } } alt="Dev's Image"></img>
			<div className="card about" style={ dev }>
                <p>Myself,&nbsp;
                    <span style={{ "color": "#3b4ab8", "fontWeight": "bolder" }}>
                        Anand Borkar
                    </span>,<br />
                    a Web Development aficionado studying Bachelor of Engineering<br /> @
                    <a
                        href="http://siesgst.edu.in"
                        style={{ "color": "#3b4ab8" }}>
                        SIESGST, Navi Mumbai
                    </a><br />
                    <span style={{ "fontSize": "20px" }}>Contribute to this project&nbsp;
                        <a
                            href="https://github.com/anandb235/RateRadar"
                            style={{ "color": "#3b4ab8", "textDecoration": "none" }}>
                            here
                        </a>
                    </span>
                </p>
            </div>
		</div>
	)
}

export default Developer