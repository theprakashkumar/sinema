import "./VideoPage.css";
import { useParams } from "react-router";
import { useContext } from "react";
import { LikedContext } from "../contexts/LikedContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const VideoPage = () => {
    const { id } = useParams();
    const { dispatch: likedDispatch } = useContext(LikedContext);
    const { dispatch: watchLaterDispatch } = useContext(WatchLaterContext);
    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />

            {/* ! Put Video Details Here */}

            <button
                onClick={() => likedDispatch({ type: "ADD", payload: { id: id } })}
            >
                Like
            </button>
            <button
                onClick={() => watchLaterDispatch({ type: "ADD", payload: { id: id } })}
            >
                Watch Later
            </button>
        </div>
    );
};

export default VideoPage;
