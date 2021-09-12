import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <header className="home">
            <div className="heading heading--h2 home-heading">Brewing 101!</div>
            <Link className="btn home-btn" to="/videos">
                Explore Tutorials
            </Link>
        </header>
    );
};

export default Home;
