import { useState } from 'react'
import stormanLogo from './assets/yinyang.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={stormanLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Storman</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          this app is in development.
        </p>
      </div>
    </>
  )
}

export default App
