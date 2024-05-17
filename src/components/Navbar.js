import React from 'react'
import {NavLink} from 'react-router-dom'

import '../style/Navbar.css'
import Logo from '../assets/RateRadar.svg'
import {LoginButton, LogoutButton} from "./GoogleLogin";
import {ThemeChangeButton} from "./mini-components/Home/ThemeChangeButton";
import {useUser} from "../hooks/useUser";
import {ShimmerDiv} from "shimmer-effects-react";
import {useTheme} from "../hooks/useTheme";

const Navbar = () => {
    const {user, userLoading} = useUser();
    const {lightMode} = useTheme()

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
                    {
                        userLoading ?
                            <ShimmerDiv mode={lightMode ? "light" : "dark"} height={25} width={50}/> :
                            user && <NavItem to="/bag" navId="bag" text="Bag"/>
                    }
                    <NavItem to="/about" navId="about" text="About"/>
                </div>
                {
                    userLoading ?
                        <ShimmerDiv mode={lightMode ? "light" : "dark"} height={35} width={125}/> :
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