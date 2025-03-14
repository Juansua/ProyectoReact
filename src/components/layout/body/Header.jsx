import { NavLink } from "react-router-dom"
import CartWidget from "../navbar/CartWidget"
import NavBar from "../navbar/NavBar"

function Header() {
  return (
    <header className='flex flex-wrap px-4 py-7 bg-pri-green-100'>
      <nav className='container flex mx-auto justify-between items-center'>
          <img src="https://res.cloudinary.com/dqyroytaz/image/upload/v1740799950/HADA_ep018b.png" alt="HADA Ecommerce Logo" className='h-[21px]'/>
        <NavBar />
        {/* <button onClick={exportProductsToDB}>Exportar Base de Datos</button> */}
        <NavLink to="/cart"><CartWidget /></NavLink>
      </nav>
    </header>
  )
}

export default Header