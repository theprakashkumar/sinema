import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { LikedProvider } from "./contexts/LikedContext";
import { WatchLaterContextProvider } from "./contexts/WatchLaterContext";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoutes";
import Nav from "./components/Nav";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Liked from "./components/Liked";
import WatchLater from "./components/WatchLater";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Nav />
            <DataProvider>
                <LikedProvider>
                    <WatchLaterContextProvider>
                        <AuthProvider>
                            <Routes>
                                <Route path="/" element={<VideoList />} />
                                <Route
                                    path="/videos/:id"
                                    element={<VideoPage />}
                                />
                                {/* <Route path="/liked" element={<Liked />} />
                                <Route path="/later" element={<WatchLater />} /> */}

                                <PrivateRoute
                                    path="/liked"
                                    element={<Liked />}
                                />
                                <PrivateRoute
                                    path="/later"
                                    element={<WatchLater />}
                                />

                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<SignUp />} />
                                
                            </Routes>
                        </AuthProvider>
                    </WatchLaterContextProvider>
                </LikedProvider>
            </DataProvider>
            <Footer />
        </div>
    );
}

export default App;
