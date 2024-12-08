import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div className="flex justify-between items-center gap-8">
        <ul className="flex gap-4 justify-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar