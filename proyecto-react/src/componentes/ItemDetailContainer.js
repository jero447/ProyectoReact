import { getProductoById } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null)
    const{ itemId } = useParams()

    useEffect(() => {
        getProductoById(itemId)
            .then(respuesta => {
                setProducto(respuesta)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer