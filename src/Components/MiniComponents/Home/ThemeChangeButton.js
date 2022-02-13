import {DarkModeSvg, LightModeSvg} from "../../../Assets/theme_change_svgs";
import React, {useState} from "react";
import '../../../Style/ThemeChangeButton.css'
import {useTheme} from "../../../Hooks/useTheme";


export const ThemeChangeButton = () => {
    const {lightMode, toggleTheme} = useTheme();
    const [hovered, setHovered] = useState(lightMode);

    const Icon = hovered
        ? (lightMode ? <DarkModeSvg className="icon"/> : <LightModeSvg className="icon"/>)
        : (lightMode ? <LightModeSvg className="icon"/> : <DarkModeSvg className="icon"/>);

    return (
        <button className="theme-change-button"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={toggleTheme}
        >
            {Icon}
        </button>
    )
}