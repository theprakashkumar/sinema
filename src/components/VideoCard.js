import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ props }) => {
    const { _id, name, thumbnail, views, creator, embedId } = props;
    console.log("prop", props);
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
                    <div className="video-cart__text__wrapper">
                        <div className="card-video__title">{name}</div>
                        <div className="card-video__details">
                            {creator} • {views} Views
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default VideoCard;
