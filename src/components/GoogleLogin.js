import {GoogleLogin, googleLogout} from "@react-oauth/google";
import React from "react";
import {useUser} from "../hooks/useUser";
import {Logout} from "../assets/svg";


export const LoginButton = () => {
    const {setUserData} = useUser()

    return (<GoogleLogin
        onSuccess={(credentialResponse) => {
            setUserData(credentialResponse);
        }}
        onError={() => {
            console.log('Google Login Failed');
        }}
        theme="filled_blue"
        useOneTap
        auto_select
    />)
}

export const LogoutButton = () => {
    const {removeUserData} = useUser()
    const logout = () => {
        removeUserData()
        googleLogout()
    }

    return (
        <div onClick={logout}>
            <Logout className="logout-icon"/>
        </div>
    )
}