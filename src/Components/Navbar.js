import React from 'react'
import {NavLink} from 'react-router-dom'

import '../style/Navbar.css'
import Logo from '../assets/RateRadar.svg'

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
                    <NavItem to="/contact" navId="contact" text="Contact"/>
                </div>
                <button className="bag-btn">Populate Bag</button>
            </div>
        </div>
    )
}

const NavItem = ({to, navId, text}) => <div className="nav-item">
    <NavLink
        to={to}
        activeClassName="active">
        <span id={`${navId}`}>{text}</span>
    </NavLink>
</div>

export default Navbar