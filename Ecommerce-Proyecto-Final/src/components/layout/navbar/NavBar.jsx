import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div className="flex justify-between items-center gap-8">
        <ul className="flex gap-4 justify-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="#">Shop Now</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
        </ul>
        <NavLink to="/cart"><CartWidget /></NavLink>
    </div>
  )
}

// PARA TUTOR/PROFESOR: ------------>
// Decidí mover las categorías a "NavCategory", puesto que a nivel de experiencia no diseñé este header para que tuviese filtros de los productos, sino otras secciones de la web. Espero no haya inconveniente.

export default NavBar