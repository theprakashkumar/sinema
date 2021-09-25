import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LikedContext } from "../contexts/LikedContext";

const LikedCard = ({ _id, thumbnail, name }) => {
    const { state, dispatch } = useContext(LikedContext);
    const { token, userId } = useContext(AuthContext);

    const removeFromLiked = async () => {
        try {
            const response = await axios.delete(`/liked/${userId}`, {
                headers: {
                    authorization: token,
                },
                data: {
                    userId: _id,
                },
            });
            if (response.data.success) {
                console.log("Deleted");
                dispatch({
                    type: "SYNC",
                    payload: response.data.liked.likedVideos,
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
                    <div className="card-video__title">{name}</div>
                </div>
            </Link>
            <button onClick={() => removeFromLiked()}>Remove</button>
        </div>
    );
};

export default LikedCard;
