import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null)
    const id  = useParams().id
    console.log(id);

    useEffect(() => {
        
        const docRef = doc(db, "items", id)
        getDoc(docRef)
            .then((resp)=> {
                setProducto(
                    { ...resp.data(), id: resp.id}
                );
            })

    }, [id])
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer