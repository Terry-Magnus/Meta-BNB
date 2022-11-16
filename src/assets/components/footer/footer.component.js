import { Link } from "react-router-dom"
import footerlogo from "../../images/logo-footer.png"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-logo"><img src={footerlogo} alt="footer-logo" /></div>
                    <div className="social">
                        <Link to="#"><img src={facebook} alt="facebook" /></Link>
                        <Link to="#"><img src={instagram} alt="instagram" /></Link>
                        <Link to="#"><img src={twitter} alt="twitter" /></Link>
                    </div>
                </div>
                <div className="footer_1">
                    <h2>Community</h2>
                    <Link to="#">NFT</Link>
                    <Link to="#">Tokens</Link>
                    <Link to="#">Landlords</Link>
                    <Link to="#">Discord</Link>
                </div>
                <div className="footer_2">
                    <h2>Places</h2>
                    <Link to="#">Castle</Link>
                    <Link to="#">Farms</Link>
                    <Link to="#">Beach</Link>
                    <Link to="#">Learn more</Link>
                </div>
                <div className="footer_3">
                    <h2>About us</h2>
                    <Link to="#">Road map</Link>
                    <Link to="#">Creators</Link>
                    <Link to="#">Career</Link>
                    <Link to="#">Contact us</Link>
                </div>
            </div>
            <p>&copy; 2022 Metabnb</p>
        </footer>
    )
}

export default Footer