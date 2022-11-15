import { Link } from "react-router-dom"
import footerlogo from "../images/logo-footer.png"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <div className="footer-logo"><img src={footerlogo} alt="footer-logo" /></div>
                <div className="social">
                    <Link to="#"><img src={facebook} alt="facebook" /></Link>
                    <Link to="#"><img src={instagram} alt="instagram" /></Link>
                    <Link to="#"><img src={twitter} alt="twitter" /></Link>
                </div>
            </div>
            <div className="footer-right">
                <div>
                    <h2>Home</h2>
                    <Link to="#">Tokens</Link>
                    <Link to="#">NFTs</Link>
                    <Link to="#">Are you kidding</Link>
                    <Link to="#">Race</Link>
                    <Link to="#">Dammy</Link>
                </div>
                <div>
                    <h2>Home</h2>
                    <Link to="#">Tokens</Link>
                    <Link to="#">NFTs</Link>
                    <Link to="#">Are you kidding</Link>
                    <Link to="#">Race</Link>
                    <Link to="#">Dammy</Link>
                </div>
                <div>
                    <h2>Home</h2>
                    <Link to="#">Tokens</Link>
                    <Link to="#">NFTs</Link>
                    <Link to="#">Are you kidding</Link>
                    <Link to="#">Race</Link>
                    <Link to="#">Dammy</Link>
                </div>
            </div>
            <p>&copy; All Rights reserverd.</p>
        </footer>
    )
}

export default Footer