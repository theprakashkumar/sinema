import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-left">
                    <div className="nav__logo footer-nav-logo">Sinēmā</div>
                    <div className="footer-left__link-container">
                        <Link to="/">
                            <div className="footer__link mt-0-5">Home</div>
                        </Link>
                        <Link to="/liked">
                            <div className="footer__link mt-1">Liked</div>
                        </Link>
                        <Link to="/later">
                            <div className="footer__link mt-0-5">Later</div>
                        </Link>
                    </div>
                </div>
                <div className="footer-right">
                    <form className="footer-right__form">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="footer-right__input"
                        ></input>
                        <button className="footer-right__button">
                            Subscribe
                        </button>
                    </form>
                    <div className="footer-right__social-container mt-2">
                        <a
                            href="#"
                            className="footer-right__social-container__link"
                        >
                            <i class="fab fa-facebook-f mr-2"></i>
                        </a>
                        <a
                            href="#"
                            className="footer-right__social-container__link"
                        >
                            <i class="fab fa-twitter mr-2"></i>
                        </a>
                        <a
                            href="#"
                            className="footer-right__social-container__link"
                        >
                            <i class="fab fa-instagram mr-2"></i>
                        </a>
                        <a
                            href="#"
                            className="footer-right__social-container__link"
                        >
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
