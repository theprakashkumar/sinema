import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

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
        <div>
            <p>login: {loggedIn.toString()}</p>
            <p>{input.username}</p>
            <p>{input.password}</p>
            {loggedIn ? (
                <>
                    <p>You are Logged In</p>
                    <button onClick={login}>Logout</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="input-text-wrapper">
                        <input
                            className="input-text input-text-email"
                            type="text"
                            placeholder="Email"
                            value={input.username}
                            name="username"
                            onChange={handleChange}
                        />
                    </div>

                    <div class="input-text-wrapper">
                        <input
                            class="input-text input-text-password"
                            type="password"
                            placeholder="Password"
                            value={input.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>

                    <button class="btn btn--lg">LOGIN</button>
                </form>
            )}
        </div>
    );
};

export default Login;
