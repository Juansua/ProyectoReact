import { useState } from "react"
import addIcon from  "../../assets/add.svg"
import removeIcon from  "../../assets/remove.svg"
import CountButton from "./buttons/CountButton";
import AddToCart from "./AddToCart";

export default function ItemCount({stock, handleAddToCart}) {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
      setCount((prev) => prev == 1 ? prev : prev -1)
    }

    const handleSubstract = () => {
      setCount((prev) => prev == stock ? prev : prev +1)
    }

  return (
    <div className=" flex justify-center items-center gap-4 h-full">

        <CountButton onClick={handleAdd} >
        <img src={removeIcon} alt="remove Icon" />
        </CountButton>

        <p>{count}</p>

        <CountButton onClick={handleSubstract} >
        <img src={addIcon} alt="add Icon" />
        </CountButton>

        <AddToCart onClick={ () => { handleAddToCart(count) } }/>
        
    </div>
  )
}