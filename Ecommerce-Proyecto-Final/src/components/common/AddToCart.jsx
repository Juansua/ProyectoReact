import { useState } from "react";

// const displayText = children === undefined ? text : children; // PARA USAR CHILDREN
// PROPS
function AddToCart(children) {
    function handleClick() {
        console.log("You Clicked!!")
    }
    return (
    <button className="flex ml-auto text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded" onClick={handleClick}>Add to cart</button>
    )
}

export default AddToCart;