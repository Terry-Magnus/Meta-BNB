import Card from "./card/card.component"
const images = [
    "nft-img1.png", "nft-img2.png", "nft-img3.png", "nft-img4.png", "nft-img5.png", "nft-img6.png",
    "nft-img7.png", "nft-img8.png"
]

export default function Main() {
    return (
        <main>
            <h1>Inspiration for your next adventure</h1>
            <div className="card-deck">
                {images.map(img => {
                    return <Card key={img} src={img} />
                })}
            </div>

        </main>
    )
}