import "./VideoPage.css"
import { useParams } from "react-router";

const VideoPage = () => {
    const { id } = useParams();
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

            <button>Watch Later</button>
            <button>Like</button>
            <button>Share</button>
        </div>
    );
};

export default VideoPage;
