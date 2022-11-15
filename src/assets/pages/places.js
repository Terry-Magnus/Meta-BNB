import Header from "../components/header.component";
import filter from "../images/filters.png"

const Places = () => {
    return (
        <>
            <Header />
            <div className="filters">
                <a>Restaurant</a>
                <a>Cottage</a>
                <a>Castle</a>
                <a>Fantasy City</a>
                <a>Beach</a>
                <a>Cabin</a>
                <a>Off-grid</a>
                <a>Farm</a>
                <button className="filter">Location <img src={filter} alt="filter" /></button>
            </div>
        </>
    )
}

export default Places;