import {DarkMode, LightMode} from "../../../Assets/svg";
import React, {useState} from "react";
import '../../../Style/ThemeChangeButton.css'
import {useTheme} from "../../../Hooks/useTheme";


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