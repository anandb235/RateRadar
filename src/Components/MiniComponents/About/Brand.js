import React from 'react'

import Logo from '../../../assets/RateRadar.svg'

function Brand() {

    const about = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    const logo = { "margin": "20vh 0vw 0vh 65vw", "height": "37vh", "width": "20vw" }

	return (
		<div>
			<div className="card about" style={ about }>
                <p>Heyy,&nbsp;
                    <span style={{ "color": "#3b4ab8" }}>Welcome to&nbsp;
                        <span style={{ "fontWeight": "bolder" }}>RateRadar</span>!
                    </span><br />
                    Here you can get familiar to the latest ups downs of life of investors... Just kidding XD 
                    This Web App lets you to be up to date with all happenings of crypto market 
                    by providing you all with real time data, all thanks to Coingecko API.
                </p>
            </div>
            <img src={ Logo } style={ logo } alt="Logo"></img>
		</div>
	)
}

export default Brand