import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="nav__brand">Sinēmā</div>
            </Link>

            <Link to="/liked">
                <div class="icon-with-badge">
                    <span class="material-icons-outlined icon-with-badge__icon">
                        favorite
                    </span>
                </div>
            </Link>

            <Link to="/later">
                <div class="icon-with-badge">
                    <span class="material-icons-outlined icon-with-badge__icon">
                        bookmark
                    </span>
                </div>
            </Link>

            <Link to="/login">
                <div class="icon-with-badge">
                    <span class="material-icons icon-with-badge__icon">
                        person
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default Nav;
