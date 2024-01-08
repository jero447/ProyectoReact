import "../css/itemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

function ItemDetail({ id, nombre, category, descripcion, img, precio, stock }) {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,nombre,precio
        }

        addItem(item,quantity)
    }
    return (
        <div className="cardItem">

            <div>
                <h2>{nombre}</h2>
            </div>
            <div className="contenedor-imagen">
                <img src={img} alt={nombre} className="card-img" />
            </div>
            <div className="card-info">
                <p>Categoria: {category}</p>
                <p>Descripcion: {descripcion}</p>
                <p>Precio: {precio}$</p>
                <p>Stock: {stock}</p>
            </div>
            {
                quantityAdded > 0 ? (
                 <Link to='/cart' className="opcion">Terminar compra</Link>
                ) : (
                < ItemCount inicial={1} stock={10} onAdd={handleOnAdd}/>
                )
            }
        </div>
    )
}

export default ItemDetail