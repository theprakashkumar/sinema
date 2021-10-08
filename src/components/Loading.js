import "./Loading.css";
import PropagateLoader from "react-spinners/PropagateLoader";
const Loading = () => {
    return (
        <div className="loading">
            <PropagateLoader
                color={"#0f172a"}
                size={15}
                speedMultiplier={1.5}
            />
        </div>
    );
};

export default Loading;
