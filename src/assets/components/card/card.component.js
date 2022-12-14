const n = 5;
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-img"><img src={require(`../../images/${props.src}`)} alt="nfts" width="100%" /></div>
            <div className="card-body">
                <p><span className='text-left'>Desert king</span><span className='text-right'><b>1MBT per night</b></span></p>
                <p><span className='text-left'>2345km away</span><span className='text-right'>available for 2weeks stay</span></p>
            </div>
            <div className="card-rating">
                {
                    [...Array(n)].map((el, index) => {
                        return <img key={index} src={require('../../images/star.png')} alt="stars" />
                    })
                }
            </div>
        </div>
    )
}

export default Card;