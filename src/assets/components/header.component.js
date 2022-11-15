import { Link } from "react-router-dom";
import logo from "../images/logo-header.svg"
import "./header.styles.scss"

const Header = () => {
    return (
        <header>
            <div className="logo"><img src={logo} alt="logo-header" /></div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/places">Places to stay</Link>
                <Link to="#">NFTs</Link>
                <Link to="#">Community</Link>
            </nav>
            <div className="btn">Connect Wallet</div>
            <div className="menu-toggle"></div>
        </header>
    )
}

export default Header;