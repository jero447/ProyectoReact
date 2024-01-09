import { useContext } from "react"
import CartContext from "../context/CartContext"
import "../css/cardItem.css"

const CartItem = ({ nombre, precio, id, quantity }) => {

  const { removeItem } = useContext(CartContext)

  return (

    <div className="contenedorCardItem">

      <h2>{nombre}</h2>
      <p>Cantidad:{quantity}</p>
      <p>Subtotal: ${precio * quantity}</p>
      <button onClick={() => removeItem(id)}>X</button>

    </div>

  )

}


export default CartItem;