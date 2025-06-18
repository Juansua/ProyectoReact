import CartWidget from "../navbar/CartWidget";
import NavBar from "../navbar/NavBar";
import Searchbar from "../navbar/Searchbar";

function Header() {
  return (
    <header className="flex flex-wrap items-end px-4 py-8 bg-pri-green-300 ">
      <nav className="container flex mx-auto justify-between items-center">
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dqyroytaz/image/upload/v1740799950/HADA_ep018b.png"
            alt="HADA Ecommerce Logo"
            className="h-[21px]"
          />
        </div>
        <NavBar />
        {/* <button onClick={exportProductsToDB}>Exportar Base de Datos</button> */}
        <div className="w-full flex gap-4 justify-end">
          {/* <Searchbar /> */}
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default Header;
