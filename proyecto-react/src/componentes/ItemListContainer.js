import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "../css/itemListContainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

function ItemListContainer() {
    const [productos, setProductos] = useState([])

    const { categoryId} = useParams()

    useEffect(() => {
        const itemsRef = collection(db, "items")

        getDocs(itemsRef)
        .then((resp)=> {
            setProductos(
                resp.docs.map((doc)=>{
                    return { ...doc.data(), id: doc.id}
                })
            )
        })

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