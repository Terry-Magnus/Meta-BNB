import Header from "./assets/components/header.component"
import Footer from "./assets/components/footer.component";
import Hero from "./assets/components/hero.component";
import Main from './assets/components/main.component';
import mbtoken from "./assets/images/mbtoken.svg"
import metamask from "./assets/images/metamask.svg"
import opensea from "./assets/images/opensea.svg"
import './App.scss';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <div className="sponsors">
                <img src={mbtoken} alt="mbtoken" />
                <img src={metamask} alt="metamask" />
                <img src={opensea} alt="opensea" />
            </div>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
