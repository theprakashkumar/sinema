import "./VideoPage.css";
import { useParams, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { LikedContext } from "../contexts/LikedContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const VideoPage = () => {
    const { isUserLogin, userId, email, token } = useContext(AuthContext);

    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const { state: likedState, dispatch: likedDispatch } =
        useContext(LikedContext);
    const { state: laterState, dispatch: laterDispatch } =
        useContext(WatchLaterContext);
    const navigate = useNavigate();

    const [isVideoInLiked, setIsVideoInLiked] = useState(false);
    const [isVideoInLater, setIsVideoInLater] = useState(false);

    const inLiked = (id) => {
        const alreadyInLiked = likedState.find((video) => video?._id === id);
        if (alreadyInLiked) {
            setIsVideoInLiked(true);
        }
    };

    const inLater = (id) => {
        const alreadyInLiked = laterState.find((video) => video._id === id);
        if (alreadyInLiked) {
            setIsVideoInLater(true);
        }
    };
    // put video into liked
    const addToLiked = async (id) => {
        if (isVideoInLiked) {
            return removeFromLiked(id);
        }
        try {
            const response = await axios.post(
                `/liked/${userId}`,
                {
                    videoId: id,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            if (response.data.success) {
                likedDispatch({
                    type: "ADD",
                    payload: {
                        video,
                    },
                });
                setIsVideoInLiked(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // add product to Later
    const addToLater = async (id) => {
        if (isVideoInLater) {
            return removeFromLater(id);
        }
        try {
            const response = await axios.post(
                `/later/${userId}`,
                {
                    videoId: id,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            if (response.data.success) {
                laterDispatch({
                    type: "ADD",
                    payload: {
                        video,
                    },
                });
                setIsVideoInLater(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const removeFromLiked = async (id) => {
        try {
            console.log(id);
            const response = await axios.delete(`/liked/${userId}`, {
                headers: {
                    authorization: token,
                },
                data: {
                    videoId: id,
                },
            });
            if (response.data.success) {
                setIsVideoInLiked(false);
                likedDispatch({
                    type: "REMOVE",
                    payload: { id },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const removeFromLater = async (id) => {
        try {
            const response = await axios.delete(`/later/${userId}`, {
                headers: {
                    authorization: token,
                },
                data: {
                    videoId: id,
                },
            });
            if (response.data.success) {
                console.log("Remove From Latter!");
                laterDispatch({
                    type: "REMOVE",
                    payload: { id },
                });
                setIsVideoInLater(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // get video from server
        const getVideo = async (id) => {
            try {
                const response = await axios.get(`/video/${id}`);
                if (response.data.success) {
                    console.log(response.data.video);
                    setVideo(response.data.video);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getVideo(id);
        inLiked(id);
        inLater(id);
    }, []);

    useEffect(() => {
        inLiked(id);
    }, [likedState]);

    useEffect(() => {
        inLater(id);
    }, [laterState]);

    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${video?.embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />

            {/* ! Put Video Details Here */}

            <button
                onClick={() => {
                    isUserLogin ? addToLiked(id) : navigate("/login");
                }}
            >
                {isVideoInLiked ? "Liked" : "Like"}
            </button>
            <button
                onClick={() => {
                    isUserLogin ? addToLater(id) : navigate("/login");
                }}
            >
                {isVideoInLater ? "Added to Watch Later" : "Add to Watch Later"}
            </button>
        </div>
    );
};

export default VideoPage;
