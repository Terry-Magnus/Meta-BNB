import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-header.svg"
import "./header.styles.scss"

const Header = ({ openModal }) => {
    const [nav, setNav] = useState(false)
    return (
        <header>
            <div className="logo"><Link to="/"><img src={logo} alt="logo-header" /></Link></div>
            <nav className={nav ? "show" : null}>
                <Link to="/">Home</Link>
                <Link to="/places">Places to stay</Link>
                <Link to="#">NFTs</Link>
                <Link to="#">Community</Link>
                <button className="btn" onClick={() => openModal(true)}>Connect Wallet</button>
            </nav>
            <div className="menu-toggle" onClick={() => setNav(!nav)}></div>
        </header>
    )
}

export default Header;