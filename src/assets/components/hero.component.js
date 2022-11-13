import heroimg from "../images/hero-img.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-info">
                <h1>Rent a <span className="keyword">Place</span> away from
                    <span className="keyword">Home</span> in the <span className="keyword">Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse,
                    get a chance to turn your imagination to reality at your comfort zone</p>
                <form>
                    <input type="search" name="search" placeholder="Search for location" />
                    <button className="btn" type="submit">Search</button>
                </form>
            </div>
            <div className="hero-img"><img src={heroimg} alt="hero-img" /></div>
        </div>
    )
}

export default Hero