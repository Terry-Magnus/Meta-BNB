import { Link } from "react-router-dom";
import logo from "../../images/logo-header.png"

const Header = () => {
    return (
        <header>
            <div className="logo"><img src={logo} alt="logo-header" /></div>
            <nav>
                <Link to="#">Home</Link>
                <Link to="#">Place to stay</Link>
                <Link to="#">NFTs</Link>
                <Link to="#">Community</Link>
            </nav>
            <button>Connect Wallet</button>
        </header>
    )
}

export default Header;