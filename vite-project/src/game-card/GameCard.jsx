function GameCardImage() {
    return (
        <img src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/icon-48.gif" className="card-img-top" alt="..." />
    )
}

function GameCardBody() {
    return (
        <div class="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Short summary of the game</p>
        </div>
    )
}

function GameCardButton() {
    return (
        <div>
            <button className="btn btn-success">Play Game</button>
        </div>
    )
}

function GameCard(props) {
    return (
        <>
            {/* <div className="card" style={{ width: '18rem' }}>
                <GameCardImage></GameCardImage>
                <GameCardBody></GameCardBody>
                <GameCardButton></GameCardButton>
            </div> */}

            <div className="card" style={{width: '18rem', height: '28rem', margin: '2rem'}}>
                <img src={props.game.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5>{props.game.title}</h5>
                        <p className="card-text">
                            {props.game.short_description}
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-success">Play Game</button>
                    </div>
            </div>
        </>

    )
}

export default GameCard