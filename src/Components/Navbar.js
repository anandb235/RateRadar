import React from 'react'
import {NavLink} from 'react-router-dom'

import '../Style/Navbar.css'
import Logo from '../Assets/RateRadar.svg'

const Navbar = () => {

    return (
        <div className="nav-style">
            <div className="logo">
                <img src={Logo} alt="RR"/>
            </div>
            <div className="nav">
                <span>Rate<span style={{"color": "var(--primary)"}}>Radar</span></span>
                <div className="vertical-divider"></div>
                <div className="nav-list">
                    <NavItem to="/" navId="home" text="Home"/>
                    <NavItem to="/compare" navId="compare" text="Compare"/>
                    <NavItem to="/about" navId="about" text="About"/>
                </div>
                <button className="bag-btn">Populate Bag</button>
            </div>
        </div>
    )
}

const NavItem = ({to, navId, text}) => <div className="nav-item">
    <NavLink
        exact
        to={to}
        activeClassName="active"
        end="true">
        <span id={`${navId}`}>{text}</span>
    </NavLink>
</div>

export default Navbar