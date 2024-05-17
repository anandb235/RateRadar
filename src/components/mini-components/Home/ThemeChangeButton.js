import {DarkMode, LightMode} from "../../../assets/svg";
import React, {useState} from "react";
import '../../../style/ThemeChangeButton.css'
import {useTheme} from "../../../hooks/useTheme";


export const ThemeChangeButton = () => {
    const {lightMode, toggleTheme} = useTheme();
    const [hovered, setHovered] = useState(lightMode);

    const Icon = hovered
        ? (lightMode ? <DarkMode className="icon"/> : <LightMode className="icon"/>)
        : (lightMode ? <LightMode className="icon"/> : <DarkMode className="icon"/>);

    return (
        <button className="theme-change-button"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
        >
            {Icon}
        </button>
    )
}