import { useContext } from "react";
import { LikedContext } from "../contexts/LikedContext";

const Liked = () => {
    const { state, dispatch } = useContext(LikedContext);
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
export default Liked;
