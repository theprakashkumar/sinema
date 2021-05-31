import data from "../data";
import VideoCard from "./VideoCard";
const VideoList = () => {
    return data.map((video) => <VideoCard props={video} />);
};

export default VideoList;
