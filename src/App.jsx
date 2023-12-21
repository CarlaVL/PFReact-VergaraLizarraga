import { useState } from 'react'
import './App.css'
import NavBAr from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBAr />
    </>
  )
}

export default App
