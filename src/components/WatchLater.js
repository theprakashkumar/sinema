import { useContext } from "react";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const WatchLater = () => {
    const { state, dispatch } = useContext(WatchLaterContext);
    return (
        <div>
            {state[0] ? (
                state.map((video) => (
                    <div>
                        <div>{video.id}</div>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE",
                                    payload: { id: video.id },
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>Nothing</p>
            )}
        </div>
    );
};

export default WatchLater;
