import React from 'react'
import ReactDOM from 'react-dom/client'
//import Counter from './components/counter/counter'
import './index.css'
import App from './App'
import GameCard from './game-card/GameCard'
import { GamesService } from './services/game-service.js'
import Gameslist from './games-list/GamesList'

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <GameCard game={game1}></GameCard>
    <br></br>
    <GameCard game={game1}></GameCard> */}


    <Gameslist games={games}></Gameslist>

  
  </React.StrictMode>,
)
