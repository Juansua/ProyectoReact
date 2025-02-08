// 1. Creamos el context
import { createContext, useState } from "react";

const cartContext = createContext( "carrito" )

export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    function getTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach( (item) => {
            totalPrice += item.count * item.price;
        })
        return totalPrice;
    }

    // 1. Agregar un item al carrito - addItem()
    // 2. Eliminar todos los items al carrito - emptyCart
    // 3. Quitar un item del carrito usando su Id - removeItem(itemId, quantity)
    // 4. Contar los items del carrito - countItemsInCart()

    function countItemsInCart() {
        let total = 0;
        cartItems.forEach( (item) => {
            total += item.count;
        })
        return total;
    }

    function addItem( { id, title, image, price, count } ) {
        const element = cartItems.find((items) => items.id === id )
        console.log(element)
        if ( element && element.id) {
            const data = cartItems.filter((items) => items.id !== element.id )
            return setCartItems([...data, {...element, count: element.count + count }])
        }
        else {
            setCartItems([...cartItems, { id, title, image, price, count} ])
        }
    }

    function removeItem(id) {
        const newCartState = cartItems.filter(item => item.id !== id);
        setCartItems(newCartState);
    }

    return <cartContext.Provider value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        name: "Carrito de Compras",
        }}>
    {children}
    </cartContext.Provider>
}

export default cartContext;