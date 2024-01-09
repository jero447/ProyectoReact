import carrito from "../img/carro-de-la-compra.png"
import "../css/cardWidget.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CardWidget() {
    const { totalQuantity } = useContext(CartContext)

    return(
        <div className="contenedor">
            <Link to="/cart">
            <img src= {carrito} alt="carrito" />
            <p>{totalQuantity}</p>
            </Link>
        </div>
    )
}

export default CardWidget