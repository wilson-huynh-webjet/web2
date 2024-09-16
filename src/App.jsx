import { useState } from 'react'
import './App.css'
import ShareApp from '../shareweb/src/App'
// import Button from '@webjet/react/components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Main Web App</h1>
      <div className="card">
        {/* <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>         */}
      </div>
      <p className="read-the-docs">
        <ShareApp />
      </p>
    </>
  )
}

export default App
