import{ useState } from "react"
import "../css/itemCount.css"

function ItemCount({stock, inicial, onAdd}) {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="contenedor-contador">
            <div className="controles">
                <button className="boton" onClick={decrementar}>-</button>
                <h4>{cantidad}</h4>
                <button className="boton" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="boton" onClick={() => onAdd(cantidad)} disable={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount