import "./EmptyLiked.css";
import { Link } from "react-router-dom";
import emptyLiked from "../assets/heart_broken_black_48dp.svg";
const EmptyLiked = () => {
    return (
        <div className="empty-liked flex flex-dir-cl flex-align-center">
            <div className="heading--h5">Liked</div>
            <img
                className="empty-liked__image"
                src={emptyLiked}
                alt="Empty Liked Logo"
            />
            <div className="heading--h6">I am empty :(</div>
            <div>Your Liked is Empty</div>
            <Link className="btn btn--link link" to="/videos">
                Go to Catalog
            </Link>
        </div>
    );
};

export default EmptyLiked;
