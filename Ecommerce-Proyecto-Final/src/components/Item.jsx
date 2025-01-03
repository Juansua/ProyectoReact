import AddToCart from "./AddToCart"
import ItemCount from "./ItemCount"

export default function Item({ title, price, stock, description, category, image }) {
  return (
    <div className="columns-2 bg-slate-200 flex flex-col w-[300px] justify-between">
        <div>
        <img src={image} className="w-full h-52 object-cover"/>
            <h3 className="text-2xl text-slate-700 font-semibold">{title}</h3>
            <p className="text-slate-600">
                {description}
            </p>

            <p>
                {category}
            </p>
        </div>

        <div className="my-4">
          <ItemCount stock={stock}/>
          <p className="font-bold text-xl text-slate-800">$ {price}</p>
          <AddToCart/>
        </div>
        
    </div>
  )
}