import { useState } from "react"
import addIcon from  "../../assets/add.svg"
import removeIcon from  "../../assets/remove.svg"

export default function ItemCount({stock}) {
    const [count, setCount] = useState(0);
  return (
    <div className=" flex justify-center items-center gap-4 h-full">

        <button className="bg-slate-200 rounded-sm hover:bg-slate-300" onClick={() => setCount((prev) => prev == 0 ? prev : prev -1)} >
        <img src={removeIcon} alt="add Icon" />
        </button>

        <p>{count}</p>

        <button className="bg-slate-200 rounded-sm hover:bg-slate-300" onClick={() => setCount((prev) => prev == stock ? prev : prev +1)}>
        <img src={addIcon} alt="add Icon" />
        </button>
        
    </div>
  )
}