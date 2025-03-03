// 2. Consumir o conectarnos al context -> useContext()
import { useContext } from "react"
import cartContext from "../../../context/cartContext"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

function CartWidget() {
  const context = useContext(cartContext)

  return (
    <div className="flex gap-2 w-20 justify-end">
        <ShoppingCartIcon className="h-6 text-pri-green-800"/>
        <span className="bg-pri-green-800 text-white rounded-full px-2">{context.countItemsInCart()}</span>
    </div>
  )
}

export default CartWidget