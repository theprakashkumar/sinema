import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Avatar from "../assets/account_circle_black_48dp.svg";

const Login = () => {
    const { loggedIn, login } = useContext(AuthContext);

    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setInput((input) => ({
            ...input,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(input.username, input.password);
        setInput({
            username: "",
            password: "",
        });
    };
    return (
        <div className="login">
            {/* <p>login: {loggedIn.toString()}</p> */}
            <p>{input.username}</p>
            <p>{input.password}</p>
            {loggedIn ? (
                <div className="logged-in-container">
                    <img
                        className="logged-in__image mt-2"
                        src={Avatar}
                        alt="Avatar Logo"
                    />
                    <div className="heading--h6 mt-1 mb-1">Hi {}!</div>
                    <button className="btn">Logout</button>
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
                                value={input.username}
                                name="username"
                                onChange={handleChange}
                            />
                        </div>

                        <div class="input-text-wrapper mb-1">
                            <input
                                class="input-text input-text-password"
                                type="password"
                                placeholder="Password"
                                value={input.password}
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
        </div>
    );
};

export default Login;
