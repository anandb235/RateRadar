import React from 'react'

import Logo from '../../../Assets/RateRadar.svg'

const Brand = () => {

    // const about = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    // const logo = { "margin": "20vh 0vw 0vh 65vw", "height": "37vh", "width": "20vw" }

    return (
        <div className="card about-card">
            <p>Heyy,&nbsp;
                <span>Welcome to&nbsp;
                    <span>Rate</span><span>Radar</span><span>!</span>
                </span>
                <br/>
                Here you can get familiar to the latest ups downs of life of investors... Just kidding XD
                This Web App lets you to be up to date with all happenings of crypto market
                by providing you all with real time data, all thanks to the&nbsp;
                <span><a href={"https://www.coingecko.com/en/api"}>coingecko API</a></span>.
            </p>
            <img src={Logo} alt="Logo"></img>
        </div>
    )
}

export default Brand