import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/counter'
import Spinner from './components/Spinner/spinner'

function App() {
  const [count, setCount] = useState(0)

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote>
    <cite>{spiderman.alterEgo}</cite>
  </div>);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <Spinner />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {spideyJSX}



    </>
  )
}

export default App
