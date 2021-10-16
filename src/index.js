import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { LikedProvider } from "./contexts/LikedContext";
import { WatchLaterContextProvider } from "./contexts/WatchLaterContext";
import { AuthProvider } from "./contexts/AuthContext";

import axios from "axios";

axios.defaults.baseURL = "https://Sinema-Backend.theprakashkumar.repl.co";
// axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <DataProvider>
                <LikedProvider>
                    <WatchLaterContextProvider>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </WatchLaterContextProvider>
                </LikedProvider>
            </DataProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
