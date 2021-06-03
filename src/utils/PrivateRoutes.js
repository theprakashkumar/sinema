import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ path, ...props }) => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? (
        <Route path={path} {...props} />
    ) : (
        <Navigate state={{ from: path }} to="/login" />
    );
};

export default PrivateRoute;
