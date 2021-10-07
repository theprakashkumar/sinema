import "./VideoList.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import VideoCard from "./VideoCard";

const VideoList = () => {
    const { video } = useContext(DataContext);
    return (
        <div className="video-list-container">
            <div className="video-list">
                {video[0] ? (
                    video.map((video) => <VideoCard props={video} />)
                ) : (
                    <div>Loading</div>
                )}
            </div>
        </div>
    );
};

export default VideoList;
