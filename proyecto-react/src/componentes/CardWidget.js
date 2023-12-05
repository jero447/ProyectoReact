import carrito from "../img/carro-de-la-compra.png"
import "../css/cardWidget.css"

function CardWidget() {
    return(
        <div className="contenedor">
            <img src= {carrito} alt="carrito" />
            <p>0</p>
        </div>
    )
}

export default CardWidget