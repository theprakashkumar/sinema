import { createContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import fakeAPI from "../api/fakeAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();
    const { state } = useLocation();

    const login = async (username, password) => {
        if (loggedIn) {
            setLoggedIn(false);
        } else {
            try {
                const response = await fakeAPI(username, password);
                if (response.success) {
                    setLoggedIn(true);
                }
                navigate(state?.from ? state.from : "/");
            } catch (err) {
                console.log("Something is wrong");
            }
        }
    };

    return (
        <AuthContext.Provider value={{ loggedIn, login }}>
            {children}
        </AuthContext.Provider>
    );
};
