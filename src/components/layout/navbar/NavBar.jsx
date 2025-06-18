import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="w-full flex gap-[60px] flex-wrap justify-center text-pri-green-700 darkGreen-hover">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop-now">Shop Now</NavLink>
      </li>
      <li>
        <a href="#">Contact us</a>
      </li>
    </ul>
  );
}

// PARA TUTOR/PROFESOR: ------------>
// Decidí mover las categorías a "NavCategory", puesto que a nivel de experiencia no diseñé este header para que tuviese filtros de los productos, sino otras secciones de la web. Espero no haya inconveniente.

export default NavBar;
