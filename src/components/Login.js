import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import { LikedContext } from "../contexts/LikedContext";
import { Link } from "react-router-dom";
import Avatar from "../assets/account_circle_black_48dp.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { isUserLogin, name, loginWithCredential, logout } =
        useContext(AuthContext);

    const { dispatch: watchLaterDispatch } = useContext(WatchLaterContext);
    const { dispatch: likedDispatch } = useContext(LikedContext);
    const [credential, setCredential] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setCredential((credential) => ({
            ...credential,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginStatus = await loginWithCredential(
            credential.email,
            credential.password
        );

        if (loginStatus === 403) {
            toast.error("Wrong Password!", {
                position: toast.POSITION.BOTTOM_CENTER,
            });
        } else if (loginStatus === 401) {
            toast.error("User Not Found!", {
                position: toast.POSITION.BOTTOM_CENTER,
            });
        }
    };

    const handleLogout = () => {
        watchLaterDispatch({
            type: "RESET",
        });
        likedDispatch({
            type: "RESET",
        });
        logout();
    };

    return (
        <div className="login">
            {isUserLogin ? (
                <div className="logged-in-container">
                    <img
                        className="logged-in__image mt-2"
                        src={Avatar}
                        alt="Avatar Logo"
                    />
                    <div className="heading--h6 mt-1 mb-1">Hi {name}!</div>
                    <button className="btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className="login-form-container">
                    <div className="heading heading--h4 login-heading">
                        Welcome Back!
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-text-wrapper mb-1">
                            <input
                                className="input-text input-text-email"
                                type="text"
                                placeholder="Email"
                                value={credential.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div class="input-text-wrapper mb-1">
                            <input
                                class="input-text input-text-password"
                                type="password"
                                placeholder="Password"
                                value={credential.password}
                                name="password"
                                onChange={handleChange}
                            />
                        </div>

                        <button class="btn btn--md login-btn mt-1 mb-1">
                            LOGIN
                        </button>

                        <Link
                            className="btn btn--link login-btn-link"
                            to="/signup"
                        >
                            Don't Have Account Create One!
                        </Link>
                    </form>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Login;
