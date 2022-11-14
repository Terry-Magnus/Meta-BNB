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
        </footer>
    )
}

export default Footer