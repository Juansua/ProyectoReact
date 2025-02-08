import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import cartContext from "../../context/cartContext";
cartContext

function ItemDetail({ title, price, stock, description, category, image, id}) {
  const { addItem } = useContext(cartContext);

  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const handleAddToCart = (count) => {
    console.log(`Agregaste ${count} item(s) al carrito`)
    addItem( { id, price, title, count, image} )
    setIsAddedToCart(true);
}

  return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap py-8 pr-16 rounded-2xl drop-shadow-xl bg-white">

        <Link to="/" className="text-slate-800 bg-slate-200 py-2 px-6 focus:outline-none hover:bg-slate-300 rounded absolute top-6 left-6">Go Back</Link>
      
        <img src={image} alt={title} className="lg:w-1/2 w-full lg:h-[500px] h-64 object-contain object-center rounded"/>

        <div className="text-left lg:w-1/2 w-full lg:py-6 m-auto">

          <div className="py-4">

            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category}
            </h2>

            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>

            <p className="leading-relaxed">
              {description}
            </p>

          </div>

          <div className="flex  justify-between py-4">
            
            <span className="title-font font-medium text-2xl text-lime-700 ">
             $ {price}
            </span>
            <div className="flex gap-4 items-center">
              { 
                isAddedToCart
                ? <button>Ver Carrito</button>
                : <ItemCount stock={stock} handleAddToCart={handleAddToCart}/>
              }
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default ItemDetail