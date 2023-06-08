import { NavLink } from "react-router-dom";
import '../style.css';
import '../css-reset.css';

const Nav = () => {
    return (
        <nav className="nav-bar">
            <h3 className="h3">Sample Survey</h3>
            <h3 className="h3">Sensory Preferences</h3>
            <h3 className="h3">Report</h3>
            <h3 className="h3">Home</h3>
        </nav>
    )
}

export default Nav;