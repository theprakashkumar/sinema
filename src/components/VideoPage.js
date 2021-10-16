import "./VideoPage.css";
import { useParams, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { LikedContext } from "../contexts/LikedContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "./Loading";

const VideoPage = () => {
    const { isUserLogin, userId, email, token } = useContext(AuthContext);

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
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
            console.log("in liked");
            return setIsVideoInLiked(true);
        }
        console.log("not in liked");
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
                    setVideo(response.data.video);
                    setLoading(false);
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
        inLater(id);
    }, [laterState]);

    return (
        <div className="video-page-container">
            {loading ? (
                <Loading />
            ) : (
                <div className="video-page">
                    <div className="video-page__video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.embedId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            className="video-page__video"
                        />
                    </div>
                    <div className="video-page__heading heading--h6 mt-1">
                        {video.name}
                    </div>
                    <div className="video-page__button-container">
                        <div className="video-page__button__views">
                            {video.views} Views
                        </div>
                        <button
                            className="btn btn--icon btn--sm ml-auto video-page__button"
                            onClick={() => {
                                isUserLogin
                                    ? addToLiked(id)
                                    : navigate("/login");
                            }}
                        >
                            <span class="material-icons-outlined btn--icon__icon">
                                favorite
                            </span>
                            {isVideoInLiked ? "Liked" : "Like"}
                        </button>
                        <button
                            className="btn btn--icon btn--sm ml-1 video-page__button"
                            onClick={() => {
                                isUserLogin
                                    ? addToLater(id)
                                    : navigate("/login");
                            }}
                        >
                            <span class="material-icons-outlined btn--icon__icon">
                                bookmark
                            </span>
                            {isVideoInLater
                                ? "Added to Watch Later"
                                : "Add to Watch Later"}
                        </button>
                    </div>
                    <div className="video-page__description mt-1 mb-2">
                        <div className="heading heading--h6">Description</div>
                        <div>{video.description}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPage;
