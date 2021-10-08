import "./EmptyWatchLater.css";
import { Link } from "react-router-dom";
import emptyLater from "../assets/bookmark_add_black_48dp.svg";
const EmptyLater = () => {
    return (
        <div className="empty-later flex flex-dir-cl flex-align-center">
            <div className="heading--h5">Later</div>
            <img
                className="empty-later__image"
                src={emptyLater}
                alt="Empty Later Logo"
            />
            <div className="heading--h6">I am empty :(</div>
            <div>Your Watch Later is Empty</div>
            <Link className="btn btn--link link" to="/later">
                Go to Catalog
            </Link>
        </div>
    );
};

export default EmptyLater;
