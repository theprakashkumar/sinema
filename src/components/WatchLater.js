import { useContext } from "react";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const WatchLater = () => {
    const { state, dispatch } = useContext(WatchLaterContext);
    return <div>Watch Later {state[0].id}Page</div>;
};

export default WatchLater;
