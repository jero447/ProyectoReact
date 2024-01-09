import Navbar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/Cart"
import Checkout from "./componentes/Checkout"

function App(params) {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path= "/cart" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;