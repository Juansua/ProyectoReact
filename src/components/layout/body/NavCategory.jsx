import { NavLink } from "react-router-dom";

function NavCategory() {
  return (
    <div className="py-2 bg-pri-green-100 shadow-[0_8px_20px_rgba(13,50,39,0.1)]">
      <nav className="container mx-auto flex gap-12 flex-wrap justify-center font-light text-pri-green-700 darkGreen-hover">
        <NavLink to="/shop-now">All</NavLink>
        <NavLink to="/category/essence">Essence</NavLink>
        <NavLink to="/category/mask">Mask</NavLink>
        <NavLink to="/category/serum">Serum</NavLink>
        <NavLink to="/category/toner">Toner</NavLink>
        <NavLink to="/category/moisturizer">Moisturizer</NavLink>
        <NavLink to="/category/cleanser">Cleanser</NavLink>
        <NavLink to="/category/sunscreen">Sunscreen</NavLink>
      </nav>
    </div>
  );
}

export default NavCategory;
