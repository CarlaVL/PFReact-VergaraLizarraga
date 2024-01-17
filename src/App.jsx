import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBAr from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemCount from './components/ItemCount/ItemCount'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBAr />
      <ItemListConteiner greeting= {'Bienvenidos!'}/>
      <ItemCount initial= {0} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada ',quantity)}/>
    </div>
  )
}

export default App
