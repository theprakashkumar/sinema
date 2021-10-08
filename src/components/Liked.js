import "./Liked.css";
import "./Liked.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LikedContext } from "../contexts/LikedContext";
import LikedCard from "./LikedCard";
import EmptyLiked from "./EmptyLiked";
import Loading from "./Loading";

const Liked = () => {
    const [loading, setLoading] = useState(true);
    const { state, dispatch } = useContext(LikedContext);
    const { userId, token } = useContext(AuthContext);

    const getLiked = async () => {
        try {
            const response = await axios.get(`/liked/${userId}`, {
                headers: {
                    authorization: token,
                },
            });
            if (response.data.success) {
                console.log(response.data.success);
                console.log(response.data.liked.likedVideos);
                dispatch({
                    type: "SYNC",
                    payload: response.data.liked.likedVideos,
                });
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLiked();
    }, []);
    return (
        <div className="liked">
            {loading ? (
                <Loading />
            ) : state[0] ? (
                <div className="liked-card-container">
                    {state.map((video) => (
                        <LikedCard {...video} />
                    ))}
                </div>
            ) : (
                <EmptyLiked />
            )}
        </div>
    );
};
export default Liked;
