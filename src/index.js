import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "./hooks/useTheme";
import {UserProvider} from "./hooks/useUser";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
                <UserProvider>
                    <App/>
                </UserProvider>
            </GoogleOAuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
