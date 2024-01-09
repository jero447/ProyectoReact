import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import "../css/cart.css"


const Cart = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext)

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="total">
                <h3>Total: ${totalPrice}</h3>
                <div className="contenedor-botones">
                    <button onClick={() => clearCart()} className="boton">Limpiar carrito</button>
                    <Link to="/checkout" className="opcion">Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart