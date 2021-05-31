import { createContext, useReducer } from "react";
import LikedAndLaterReducer from "../reducers/LikedAndLaterReducer";

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LikedAndLaterReducer, []);
    return (
        <LikedContext.Provider value={{ state, dispatch }}>
            {children}
        </LikedContext.Provider>
    );
};
