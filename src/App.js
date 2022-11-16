import { useState } from "react"
import Header from "./assets/components/header/header.component";
import Footer from "./assets/components/footer/footer.component";
import Hero from "./assets/components/hero/hero.component"
import Main from './assets/components/main.component';
import Modal from './assets/components/modal/modal.component'
import mbtoken from "./assets/images/mbtoken.svg"
import metamask from "./assets/images/metamask.svg"
import opensea from "./assets/images/opensea.svg"
import giftimg from "./assets/images/nft-group.png"
import './App.scss';


function App() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="App">
            <Header openModal={setOpenModal} />
            <Hero />
            <div className="sponsors">
                <img src={mbtoken} alt="mbtoken" />
                <img src={metamask} alt="metamask" />
                <img src={opensea} alt="opensea" />
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
            <Main />
            <div className="gift-cards">
                <div className="gift-left">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection.
                        Loyal customers gets amazing gift cards which are traded as NFTs.
                        These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div className="gift-right"><img src={giftimg} alt="gift-img" /></div>

            </div>
            <Footer />
        </div>
    );
}

export default App;
