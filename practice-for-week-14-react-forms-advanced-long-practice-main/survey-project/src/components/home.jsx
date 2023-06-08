import logo from "../_assets/logo.png";
import '../style.css';

const Home = () => {
    return (
        <div className="header-container">
            <img src={logo}></img>
            <div className="header-text-container">
                <h1 className="header">Survey Tool</h1>
                <h2 className="currentTab">Home</h2>
            </div>
        </div>
    )
}

export default Home;