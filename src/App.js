import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Liked from "./components/Liked";
import WatchLater from "./components/WatchLater";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<VideoList />} />
                <Route path="/videos/:id" element={<VideoPage />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/later" element={<WatchLater />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
