import React from 'react'
import {NavLink} from 'react-router-dom'

import '../Style/Navbar.css'
import Logo from '../Assets/RateRadar.svg'
import {LoginButton, LogoutButton} from "./GoogleLogin";
import {ThemeChangeButton} from "./MiniComponents/Home/ThemeChangeButton";
import {useUser} from "../Hooks/useUser";

const Navbar = () => {
    const {user} = useUser();

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
                    {user && <NavItem to="/bag" navId="bag" text="Bag"/>}
                    <NavItem to="/about" navId="about" text="About"/>
                </div>
                {
                    user ?
                        <div className="user-heading">
                            Hi, {user["given_name"]}
                            <LogoutButton/>
                        </div> :
                        <LoginButton/>
                }
                <ThemeChangeButton/>
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