// 2. Consumir o conectarnos al context -> useContext()
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import cartContext from "../../../context/cartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function CartWidget() {
  const context = useContext(cartContext);
  const itemsOnCart = !!context.countItemsInCart();

  return (
    <div className="flex gap-2 justify-end relative">
      <NavLink to="/cart">
        <div>
          <ShoppingCartIcon className="h-6 text-pri-green-800 " />
        </div>
      </NavLink>
      {itemsOnCart && (
        <span className="bg-pri-green-800 text-white rounded-full px-2 absolute -right-5 -top-3">
          {context.countItemsInCart()}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
