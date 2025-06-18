// 1. Creamos el context
import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Función para darme el precio total de los items añadidos al carrito
  function getTotalPrice() {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.count * item.price;
    });
    return totalPrice;
  }

  // Contar la cantidad de productos que se comprarán en el carrito
  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  // Agregar un item al carrito - addItem()
  function addItem({ id, title, image, price, count, category }) {
    const element = cartItems.find((items) => items.id === id);
    if (element && element.id) {
      const data = cartItems.filter((items) => items.id !== element.id);
      return setCartItems([
        ...data,
        { ...element, count: element.count + count },
      ]);
    } else {
      setCartItems([
        ...cartItems,
        { id, title, image, price, count, category },
      ]);
    }
  }

  // Quitar un item del carrito usando su Id - deleteItem(itemId, quantity)
  function deleteItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  // TODO Añadir una función para adicionar productos al carrito en base el stock disponible.
  function removeItem(id) {
    const updatedCart = cartItems
      .map((prev) => {
        if (prev.id === id) {
          return { ...prev, count: prev.count - 1 };
        }
        return prev;
      })
      .filter((item) => item.count > 0); // elimina si count llega a 0

    setCartItems(updatedCart);
  }

  function valueAfterDisc(prodDisc, prodValue) {
    const newValue = prodValue - (prodDisc / 100) * prodValue;
    return newValue.toFixed(2);
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        deleteItem,
        getTotalPrice,
        name: "Carrito de Compras",
        valueAfterDisc,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
