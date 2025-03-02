import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div>
        <ul className="flex gap-4 flex-wrap justify-center font-light text-pri-green-850">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop-now">Shop Now</NavLink>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
        </ul>
    </div>
  )
}

// PARA TUTOR/PROFESOR: ------------>
// Decidí mover las categorías a "NavCategory", puesto que a nivel de experiencia no diseñé este header para que tuviese filtros de los productos, sino otras secciones de la web. Espero no haya inconveniente.

export default NavBar