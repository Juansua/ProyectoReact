// 1. Creamos el context
import { createContext, useState } from "react";

const cartContext = createContext( "carrito" )

export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    

    // Función para darme el precio total de los items añadidos al carrito
    function getTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach( (item) => {
            totalPrice += item.count * item.price;
        })
        return totalPrice;
    }
    
    // Contar la cantidad de productos que se comprarán en el carrito
    function countItemsInCart() {
        let total = 0;
        cartItems.forEach( (item) => {
            total += item.count;
        })
        return total;
    }

    // Agregar un item al carrito - addItem()
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

    // Quitar un item del carrito usando su Id - removeItem(itemId, quantity)
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