import Header from "../components/header/header.component";
import filterIcon from "../images/settings.svg"
import nfts from "../components/nfts.json"
import Card from "../components/card/card.component";
import Footer from "../components/footer/footer.component";
import "../../App.scss"

const Places = () => {
    return (
        <>
            <Header />
            <div className="filters">
                <span >Restaurant</span>
                <span >Cottage</span>
                <span >Castle</span>
                <span >Fantasy City</span>
                <span >Beach</span>
                <span >Cabin</span>
                <span >Off-grid</span>
                <span >Farm</span>
                <button className="filter">Location <img src={filterIcon} alt="filter" /></button>

            </div>
            <div className="card-deck" style={{ marginBottom: "100px" }}>{
                nfts.images.map(({ name, path }) => {
                    return <Card key={name} src={path}></Card>
                })
            }</div>
            <Footer />
        </>
    )
}

export default Places;