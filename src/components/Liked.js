import { useContext } from "react";
import { LikedContext } from "../contexts/LikedContext";

const Liked = () => {
    const { state , dispatch } = useContext(LikedContext);
    return <div>{state[0].id}</div>;
};
export default Liked;
