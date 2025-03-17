import ItemCount from "./ItemCount"
import { useContext, useState, useEffect } from "react"
import cartContext from "../../context/cartContext";
import SimpleModal from "./Modals/SimpleModal";
import { useParams } from "react-router-dom"
import ItemDetailSkele from "../common/Skeletons/ItemDetailSkele"
import { getAsyncDataById } from "../../data/dataBase"

function ItemDetail() {
  const { addItem } = useContext(cartContext);
  const { id: productId } = useParams()

  const [itemInfo, setItemInfo] = useState(null)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  
  // Obtiene los datos del producto cuando cambia el id
  useEffect(() => {

      setTimeout(() => {
          async function getItemData() {
              const response = await getAsyncDataById(productId)
              setItemInfo(response)
          }
          getItemData()
      }, 500);

  }, [productId]);

  if(!itemInfo)
  //Loader
  return (
    <div className="">
        <ItemDetailSkele/>
    </div>
)

  // Destructurando las props sacadas de itemInfo
  const { title, price, stock, description, category, image, id } = itemInfo;

  // Añade los items seleccionados al carrito (se colocan después del return porque estas props no existen hasta que el estado de itemInfo no haya sido cambiado y sus props hayan sido destructuradas)
  const handleAddToCart = (count) => {
    addItem( { id, price, title, count, image} )
    setIsAddedToCart(true);
  }

  return (
    <SimpleModal isOpen={true}>
        <img src={image} alt={title} className="lg:w-1/2 w-full lg:h-[500px] h-64 object-contain object-center rounded"/>

        <div className=" flex flex-col text-left justify-center lg:w-1/2 w-full lg:py-6">

          <div className="py-4">

            <h2 className="text-sm title-font text-gray-500 tracking-widest first-letter:uppercase">
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
    </SimpleModal>
  )
}

export default ItemDetail