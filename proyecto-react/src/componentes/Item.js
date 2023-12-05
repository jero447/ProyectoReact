import "../css/item.css"
import { Link } from "react-router-dom"

function Item({id,nombre,img,precio,stock}) {
    return(
        <div className="cardItem">
            
            <div>
                <h2>{nombre}</h2>
            </div>
            <div className="contenedor-imagen">
                <img src={img} alt={nombre} className="card-img"/>
            </div>
            <div className="card-info">
                <p>Precio: {precio}$</p>
                <p>Stock: {stock}</p>
            </div>
            <Link to={`/item/${id}`} className="boton-detalles">Ver detalle</Link>
        </div>
    )
}

export default Item