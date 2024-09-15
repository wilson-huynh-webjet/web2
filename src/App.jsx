import { useState } from 'react'
import './App.css'
import ShareApp from '../shareweb/src/App'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Web 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <ShareApp />
      </p>
    </>
  )
}

export default App
