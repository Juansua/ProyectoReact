// 2. Consumir o conectarnos al context -> useContext()
import { useContext } from "react"
import cartContext from "../../../context/cartContext"

function CartWidget() {
  const context = useContext(cartContext)

  return (
    <div className="flex gap-2">
        <i className="fi fi-rr-shopping-cart"></i>
        <span className="bg-slate-600 text-white rounded-full px-2">{context.countItemsInCart()}</span>
    </div>
  )
}

export default CartWidget