import { useState } from "react"
import addIcon from  "../../assets/add.svg"
import removeIcon from  "../../assets/remove.svg"
import Button from "./Button";
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

        <Button onClick={handleAdd} >
        <img src={removeIcon} alt="remove Icon" />
        </Button>

        <p>{count}</p>

        <Button onClick={handleSubstract} >
        <img src={addIcon} alt="add Icon" />
        </Button>

        <AddToCart onClick={ () => { handleAddToCart(count) } }/>
        
    </div>
  )
}