import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/Navbar.css'
import Logo from '../assets/RateRadar.svg'

function Navbar() {

    const navStyle = { "textDecoration": "none", "color": "#ffffff" }

    return (
        <div className="navStyle">
            <div className="logo">
                <img src={Logo} alt="RR" />
            </div>
            <div className="nav">
                <span>Rate<span style={ { "color": "#3b4ab8" } }>Radar</span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <div className="navs">
                    <span className="nav-item">
                        <NavLink style={ navStyle } exact to="/">
                            <span id="home">Home</span>
                        </NavLink>
                    </span>
                    <span className="nav-item">
                        <NavLink style={ navStyle } to="/compare">
                            <span id="compare">Compare</span>
                        </NavLink>
                    </span>
                    <span className="nav-item">
                        <NavLink style={ navStyle } to="/about">
                            <span id="about">About</span>
                        </NavLink>
                    </span>
                    <span className="nav-item">
                        <NavLink style={ navStyle } to="/contact">
                            <span id="contact">contact</span>
                        </NavLink>
                    </span>
                </div>
                <div className="bag-btn">
                    <button>Populate Bag</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar