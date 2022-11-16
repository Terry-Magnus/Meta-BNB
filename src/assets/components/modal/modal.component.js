import metamask from "../../images/metamask-alt.png"
import walletconnect from "../../images/walletconnect.png"
import arrowright from "../../images/arrow-right.svg"
import "./modal.styles.scss"

const Modal = ({ closeModal }) => {
    return (
        <div className="modal-background">
            <div className="modal-container">

                <div className="modal-header">
                    <h3>Connect Wallet</h3>
                    <button onClick={() => { closeModal(false); }}>X</button>
                </div>
                <div className="modal-body">
                    <p>Choose your preferred wallet:</p>
                    <div className="wallet"><span><img src={metamask} alt="metamask" /> Metamask</span>
                        <span><img src={arrowright} alt="arrow-right" /></span></div>
                    <div className="wallet"><span><img src={walletconnect} alt="walletconnect" /> Walletconnect</span>
                        <span><img src={arrowright} alt="arrow-right" /></span>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Modal;