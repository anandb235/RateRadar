import React, {useEffect, useState} from 'react'
import "../../../Style/YourBag.css"
import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../../../Services/GoogleAuthService";

const signInWithFirebase = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

const signOutWithFirebase = () => {
    signOut(auth).then(() => {
        console.log("Signed Out")
    }).catch((error) => {
        console.log("Sign Out Error")
    });
}

const YourBag = () => {
    const gain = -1.69
    const invested = 200.00
    const total = invested + gain
    const total_int = Math.floor(total)
    const total_decimal = Math.floor((total - total_int).toFixed(3)*1000)

    return (
        <div className="card your-bag-card">
            <div className="bag-head">
                <span className="bag-title">Your Bag</span>
                <div className="coming-soon-tag" onClick={signInWithFirebase}>Feature Coming Soon!</div>
            </div>
            <div className="horizontal-divider"></div>
            <div className="bag-value">
                <span className="current-val">{total_int}
                    <span className="current-val-dec">.{total_decimal}</span>
                    <span className="currency" onClick={signOutWithFirebase}>USD</span>
                </span>
                <span className="gain-loss">Gain/Loss:
                    <span className={`gain-loss-val ${gain < 0 ? "loss" : "gain"}`}>{gain}</span>
                </span>
                <span className="invested">Invested: <span className="invested-val">{invested}</span></span>
            </div>
        </div>
    )
}

export default YourBag