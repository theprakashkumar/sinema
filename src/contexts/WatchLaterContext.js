import { createContext, useReducer } from "react";
import LikedAndLaterReducer from "../reducers/LikedAndLaterReducer";

export const WatchLaterContext = createContext();

export const WatchLaterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LikedAndLaterReducer, []);
    return (
        <WatchLaterContext.Provider value={{ state, dispatch }}>
            {children}
        </WatchLaterContext.Provider>
    );
};
