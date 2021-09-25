import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import WatchLaterCard from "./WatchLaterCard";

const WatchLater = () => {
    const { state, dispatch } = useContext(WatchLaterContext);
    const { userId, token } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    const getLater = async () => {
        try {
            const response = await axios.get(`/later/${userId}`, {
                headers: {
                    authorization: token,
                },
            });
            if (response.data.success) {
                console.log(response.data.later.watchLaterVideos);
                dispatch({
                    type: "SYNC",
                    payload: response.data.later.watchLaterVideos,
                });
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLater();
    }, []);
    return (
        <div>
            {loading ? (
                <p>Loading</p>
            ) : state[0] ? (
                state.map((video) => <WatchLaterCard {...video} />)
            ) : (
                <p>Nothing</p>
            )}
        </div>
    );
};

export default WatchLater;
