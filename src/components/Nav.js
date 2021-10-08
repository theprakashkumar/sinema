import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="nav__logo">Sinēmā</div>
            </Link>

            <div className="nav__menu">
                <NavLink className="nav__item" activeClassName="nav__item-active" to="/liked">
                    <div class="icon-with-badge">
                        <span class="material-icons-outlined icon-with-badge__icon">
                            favorite
                        </span>
                    </div>
                </NavLink>

                <NavLink className="nav__item" activeClassName="nav__item-active" to="/later">
                    <div class="icon-with-badge">
                        <span class="material-icons-outlined icon-with-badge__icon">
                            bookmark
                        </span>
                    </div>
                </NavLink>

                <NavLink className="nav__item" activeClassName="nav__item-active" to="/login">
                    <div class="icon-with-badge">
                        <span class="material-icons icon-with-badge__icon">
                            person
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
