import Item from "./Item"
import "../css/itemList.css"

function ItemList({productos}) {
    return(
        <div className="contenedor-cards">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList