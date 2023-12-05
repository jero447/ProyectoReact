import { useEffect, useState } from "react"
import { getProductos, getProductoByCategory } from "../asyncMock"
import ItemList from "./ItemList"
import "../css/itemListContainer.css"
import { useParams } from "react-router-dom"


function ItemListContainer() {
    const [productos, setProductos] = useState([])

    const { categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductoByCategory : getProductos

        asyncFunc(categoryId)
            .then(respuesta => {
                setProductos(respuesta)
            })
            .catch(error => {
                console.error(error);
            }, [categoryId])
    },[categoryId])

    return (
        <div className="contenedor-saludo">
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer