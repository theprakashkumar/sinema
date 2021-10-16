import "./VideoList.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import VideoCard from "./VideoCard";
import Loading from "./Loading";

const VideoList = () => {
    const { video } = useContext(DataContext);
    return (
        <div className="video-list-container">
            <div className="video-list">
                {video[0] ? (
                    video.map((video) => <VideoCard props={video} />)
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default VideoList;
