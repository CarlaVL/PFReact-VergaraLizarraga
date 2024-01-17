import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListConteinter = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, []) 

return(
    <div>
        <h1>
            {greeting}
            <ItemList products={products}/>
        </h1>
    </div>
)
}
export default ItemListConteinter