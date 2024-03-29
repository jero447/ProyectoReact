import { createContext, useState } from "react"

export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item,quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item,quantity}])
        }else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    }

    const totalQuantity = () => cart.reduce ((acumulador,itemsActual) => acumulador + itemsActual.quantity, 0)

    return(
       <CartContext.Provider value={{addItem, removeItem,clearCart,totalQuantity,totalPrice,cart}}>
            {children}
       </CartContext.Provider>
    )
}

export default CartContext




