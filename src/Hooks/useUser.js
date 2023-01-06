import {createContext, useContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {clearCachedData, getCachedData, setCachedData} from "../Services/StorageService";
import {DEFAULT_LOADING_TIMEOUT, USER_CACHE} from "../Data/Constants";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        return getCachedData(USER_CACHE, null)
    });

    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setUserLoading(false), DEFAULT_LOADING_TIMEOUT);
    }, [user]);

    const setUserData = (jwtToken) => {
        const decodedToken = jwtDecode(jwtToken.credential)
        setUser(decodedToken)
        setCachedData(USER_CACHE, decodedToken)
    }
    const removeUserData = () => {
        clearCachedData(USER_CACHE)
        setUser(null)
    }
    return (
        <UserContext.Provider value={{user, setUserData, removeUserData, userLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);