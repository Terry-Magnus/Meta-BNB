import Card from "./card/card.component"
import nfts from "./nfts.json"

export default function Main() {
    return (
        <main>
            <h1>Inspiration for your next adventure</h1>
            <div className="card-deck">
                {
                    nfts.images.map(({ name, path }) => {
                        return <Card key={name} src={path} />
                    })}
            </div>

        </main>
    )
}