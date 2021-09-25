import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LikedContext } from "../contexts/LikedContext";
import LikedCard from "./LikedCard";

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
        <div>
            {loading ? (
                <p>loading</p>
            ) : state[0] ? (
                state.map((video) => (
                    <div>
                        <LikedCard {...video} />
                    </div>
                ))
            ) : (
                <p>Nothing</p>
            )}
        </div>
    );
};
export default Liked;
