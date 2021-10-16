import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const WatchLaterCard = ({ _id, thumbnail, name }) => {
    const { state, dispatch } = useContext(WatchLaterContext);
    const { token, userId } = useContext(AuthContext);

    const removeFromLater = async () => {
        try {
            const response = await axios.delete(`/later/${userId}`, {
                headers: {
                    authorization: token,
                },
                data: {
                    videoId: _id,
                },
            });
            if (response.data.success) {
                console.log("Deleted");
                dispatch({
                    type: "SYNC",
                    payload: response.data.later.watchLaterVideos,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="VideoCard">
            <Link to={`/videos/${_id}`}>
                <div className="card-video">
                    <div className="card-video__thumbnail__wrapper">
                        <img
                            src={thumbnail}
                            alt=""
                            className="card-video__thumbnail"
                        />
                    </div>
                </div>
                <div className="video-cart__text__wrapper">
                    <div className="card-video__title mt-1 fs-2r">{name}</div>
                </div>
            </Link>
            <button
                className="btn liked-btn mt-1"
                onClick={() => removeFromLater()}
            >
                Remove
            </button>
        </div>
    );
};

export default WatchLaterCard;
