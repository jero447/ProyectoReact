import ItemCount from "./ItemCount"

function ItemDetail({id,nombre,category,descripcion,img,precio,stock}) {
    return(
        <div className="cardItem">
            
            <div>
                <h2>{nombre}</h2>
            </div>
            <div className="contenedor-imagen">
                <img src={img} alt={nombre} className="card-img"/>
            </div>
            <div className="card-info">
                <p>Categoria: {category}</p>
                <p>Descripcion: {descripcion}</p>
                <p>Precio: {precio}$</p>
                <p>Stock: {stock}</p>
            </div>
            <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log("Cantidad agregada ", cantidad)}/>
        </div>
    )
}

export default ItemDetail