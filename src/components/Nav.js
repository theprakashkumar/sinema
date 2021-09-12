import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="nav__logo">Sinēmā</div>
            </Link>

            <div className="nav__menu">
                <Link className="nav__item" to="/liked">
                    <div class="icon-with-badge">
                        <span class="material-icons-outlined icon-with-badge__icon">
                            favorite
                        </span>
                    </div>
                </Link>

                <Link className="nav__item" to="/later">
                    <div class="icon-with-badge">
                        <span class="material-icons-outlined icon-with-badge__icon">
                            bookmark
                        </span>
                    </div>
                </Link>

                <Link className="nav__item" to="/login">
                    <div class="icon-with-badge">
                        <span class="material-icons icon-with-badge__icon">
                            person
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
