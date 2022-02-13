import {createContext, useContext, useEffect, useState} from "react";
import {getCachedData, setCachedData} from "../Services/StorageService";
import {THEME_CACHE} from "../Data/Constants";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(() => {
        return getCachedData(THEME_CACHE, 'dark') === "light";
    });

    useEffect(() => {
        document.body.classList.toggle('light-mode', lightMode);
        setCachedData(THEME_CACHE, lightMode ? 'light' : 'dark')
    }, [lightMode]);
    
    const toggleTheme =  () => {
        setLightMode(prev => !prev);
    }
    
    return (
        <ThemeContext.Provider value={{lightMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);