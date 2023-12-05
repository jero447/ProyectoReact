import CardWidget from "./CardWidget"
import "../css/navBar.css"
import { NavLink, Link } from "react-router-dom" 

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/" className="logo">
                    <h3>Compra facil</h3>
                </Link>   
                    <div className="opciones">
                        <NavLink to={`/category/dispositivos`} className="nav-link">Dispositivos</NavLink>
                        <NavLink to={`/category/electrodomesticos`} className="nav-link">Electrodomesticos</NavLink>
                        <NavLink to={`/category/otros`} className="nav-link">Otros</NavLink>
                    </div>
                    <CardWidget/>
            </nav>
        </div>
    )
}

export default Navbar