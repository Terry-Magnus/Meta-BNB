import Header from "./assets/components/header.component"
import Footer from "./assets/components/footer.component";
import Hero from "./assets/components/hero.component";
import Main from './assets/components/main.component';
import './App.scss';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
