import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoutes";
import Nav from "./components/Nav";
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Liked from "./components/Liked";
import WatchLater from "./components/WatchLater";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { useEffect, useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import axios from "axios";

function App() {
    const { video, setVideo } = useContext(DataContext);

    // get video from server
    const getVideo = async () => {
        try {
            const response = await axios.get("/video");
            if (response.data.success) {
                setVideo(response.data.video);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getVideo();
    }, []);

    return (
        <div className="App">
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<VideoList />} />
                <Route path="/videos/:id" element={<VideoPage />} />

                <PrivateRoute path="/liked" element={<Liked />} />
                <PrivateRoute path="/later" element={<WatchLater />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
