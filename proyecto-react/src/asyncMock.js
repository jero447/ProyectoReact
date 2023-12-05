const productos = [
    {
        id: "1",
        nombre: "Volante Logitech G29",
        precio: 723450,
        category: "otros",
        img : "https://http2.mlstatic.com/D_NQ_NP_910290-MLA47670165147_092021-O.webp",
        stock: 15,
    },
    {
        id: "2",
        nombre: "Samsung Z Fold 3",
        precio: 595520,
        category: "dispositivos",
        img : "https://http2.mlstatic.com/D_NQ_NP_796860-MLA70632304483_072023-O.webp",
        stock: 23,
    },
    {
        id: "3",
        nombre: "Smart LG Oled Evo C2",
        precio: 1730520,
        category: "electrodomesticos",
        img : "https://http2.mlstatic.com/D_NQ_NP_651738-MLU72639044015_112023-O.webp",
        stock: 11,
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })
}

export const getProductoById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}

export const getProductoByCategory = (categoryId) => {
    return new Promise((respuesta) =>{
        setTimeout(() => {
           respuesta(productos.filter(prod => prod.category === categoryId)) 
        },500)
    })
}