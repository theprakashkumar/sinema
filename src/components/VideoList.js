import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import VideoCard from "./VideoCard";

const VideoList = () => {
    const { data } = useContext(DataContext);
    return data.map((video) => <VideoCard props={video} />);
};

export default VideoList;
