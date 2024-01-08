import Navbar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App(params) {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;