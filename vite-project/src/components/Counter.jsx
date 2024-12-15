import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center gap-4 bg-slate-300">

        <button onClick={() => setCount(count+1)}>
        <i class="fi fi-rr-add text-3xl"></i>
        </button>

        <p>{count}</p>

        <button onClick={() => setCount(count-1)}>
        <i className="fi fi-rr-minus-circle text-3xl"></i>
        </button>
        
    </div>
  )
}