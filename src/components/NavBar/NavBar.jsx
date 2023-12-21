import CartWidget from "../CartWidget/CartWidget"
import Badge from 'react-bootstrap/Badge';

const NavBar = () => {
    
    return (
        <nav>
            <h3>
        Verdulería Santa Cruz<Badge bg="secondary"></Badge>
      </h3>
            <div>
            <button>Frutas</button>
            <button>Verduras</button>            
            <button>Conservas</button>
            <button>Para el asado</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar