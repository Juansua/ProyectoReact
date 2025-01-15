import { NavLink } from "react-router-dom"

function NavCategory() {
  return (
    <nav className="flex gap-12 py-2 justify-center text-lg bg-slate-200 text-slate-500">
        <NavLink to="/category/essence">Essence</NavLink>
        <NavLink to="/category/mask">Mask</NavLink>
        <NavLink to="/category/serum">Serum</NavLink>
        <NavLink to="/category/toner">Toner</NavLink>
        <NavLink to="/category/moisturizer">Moisturizer</NavLink>
        <NavLink to="/category/cleanser">Cleanser</NavLink>
        <NavLink to="/category/sunscreen">Sunscreen</NavLink>
    </nav>
  )
}

export default NavCategory