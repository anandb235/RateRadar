import {createContext, useContext, useEffect, useState} from "react";
import {getCachedData, setCachedData} from "../services/StorageService";
import {THEME_CACHE} from "../data/Constants";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(() => {
        return getCachedData(THEME_CACHE, 'dark') === "light";
    });
    const [themeLoading,  setThemeLoading] = useState(true);

    useEffect(() => {
        setThemeLoading(true)
        setTimeout(() => {
            document.body.classList.toggle('light-mode', lightMode);
            setCachedData(THEME_CACHE, lightMode ? 'light' : 'dark')
        }, 100);
        setTimeout(() => setThemeLoading(false), 300)
    }, [lightMode]);
    
    const toggleTheme =  () => {
        setLightMode(prev => !prev);
    }
    
    return (
        <ThemeContext.Provider value={{lightMode, toggleTheme, themeLoading}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);