import {GoogleLogin} from "@react-oauth/google";
import React from "react";
import {jwtDecode} from "jwt-decode";


export const LoginButton = () => {
    return (<GoogleLogin
        onSuccess={(credentialResponse, ) => {
            console.log(jwtDecode(credentialResponse.credential));
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        theme="filled_blue"
        useOneTap
        auto_select
    />)
}