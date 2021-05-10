import React from 'react'

import '../style/Navbar.css'
import Logo from '../assets/RateRadar.svg'

function Navbar() {

    return (
        <div className="navStyle">
            <div className="logo">
                <img src={Logo} alt="RR" />
            </div>
            <div className="nav">
                <span>Rate<span style={ { "color": "#3b4ab8" } }>Radar</span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            </div>
        </div>
    )
}

export default Navbar