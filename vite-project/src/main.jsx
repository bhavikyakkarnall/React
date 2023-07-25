import React from 'react'
import ReactDOM from 'react-dom/client'
//import Counter from './components/counter/counter'
import './index.css'
import App from './App'
import GameCard from './game-card/GameCard'
import { GamesService } from './services/game-service.js'
import Gameslist from './games-list/GamesList'
import Welcome from './components/Welcome';
import PropsDisplayer from './components/PropsDisplayer'
import MoviesList from './components/MoviesList'


// const game1 = {
//   title: 'First game',
//   summary: 'Summary for the game',
//   url: 'https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/icon-48.gif'
// }

// const game2 = {
//   title: 'Second game',
//   summary: 'Summary for the game',
//   url: 'https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/icon-48.gif'
// }

const gameService = new GamesService();

const games = gameService.getAllGames();

const product = {id:101, productName:"burger",  price:10.49}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <GameCard game={game1}></GameCard>
    <br></br>
    <GameCard game={game1}></GameCard>  */}
    {/* <Gameslist games={games}></Gameslist> */}

    {/* <Welcome name="Peter">
      <PropsDisplayer cities={["Auckland", "Hamilton"]} name="Tiger" age={23} expiryDate={new Date()} product={product}><p>Hello World</p></PropsDisplayer>
    </Welcome> */}

    <MoviesList></MoviesList>
  </React.StrictMode>,
)
