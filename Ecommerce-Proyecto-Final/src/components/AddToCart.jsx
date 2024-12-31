import { useState } from "react";

// const displayText = children === undefined ? text : children; // PARA USAR CHILDREN
// PROPS
function AddToCart(children) {
    function handleClick() {
        console.log("You Clicked!!")
    }
    return (
    <button className="bg-slate-600 hover:bg-slate-800 text-white py-2 px-4 my-2 rounded-lg justify-end" onClick={handleClick}>Add to cart</button>
    )
}

export default AddToCart;