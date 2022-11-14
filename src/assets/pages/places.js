import Header from "../components/header.component";
import filter from "../images/filters.png"

const Places = () => {
    return (
        <>
            <Header />
            <div className="filters">
                <ul>
                    <li>Restaurant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>Fantasy City</li>
                    <li>Beach</li>
                    <li>Cabin</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                </ul>
                <button className="filter">Location <img src={filter} alt="filter" /></button>
            </div>
        </>
    )
}

export default Places;