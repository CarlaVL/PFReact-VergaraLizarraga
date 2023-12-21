import { useState } from 'react'
import './App.css'
import NavBAr from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBAr />
      <ItemListConteiner greeting= {'Bienvenidos!'}/>
          </>
  )
}

export default App
