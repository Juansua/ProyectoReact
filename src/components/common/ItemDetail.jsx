import ItemCount from "./ItemCount";
import { useContext, useState, useEffect } from "react";
import cartContext from "../../context/cartContext";
import { useParams, Link } from "react-router-dom";
import ItemDetailSkele from "../common/Skeletons/ItemDetailSkele";
import { getAsyncDataById } from "../../data/dataBase";
import MainButton from "./buttons/MainButton";

function ItemDetail() {
  const { addItem } = useContext(cartContext);
  const { id: productId } = useParams();

  const [itemInfo, setItemInfo] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Obtiene los datos del producto cuando cambia el id
  useEffect(() => {
    setTimeout(() => {
      async function getItemData() {
        const response = await getAsyncDataById(productId);
        setItemInfo(response);
      }
      getItemData();
    }, 500);
  }, [productId]);

  if (!itemInfo)
    //Loader
    return (
      <div className="">
        <ItemDetailSkele />
      </div>
    );

  // Destructurando las props sacadas de itemInfo
  const { title, price, discount, stock, description, category, image, id } =
    itemInfo;

  // Añade los items seleccionados al carrito (se colocan después del return porque estas props no existen hasta que el estado de itemInfo no haya sido cambiado y sus props hayan sido destructuradas)
  const handleAddToCart = (count) => {
    addItem({ id, price, title, count, image });
    setIsAddedToCart(true);
  };

  return (
    <div className="container mt-12 mx-auto flex flex-wrap py-8 px-8 sm:px-12 lg:pl-0 rounded-2xl drop-shadow-xl bg-white">
      <img
        src={image}
        alt={title}
        className="lg:w-1/2 w-full lg:h-[500px] h-64 object-contain object-center rounded"
      />

      <div className=" flex flex-col text-left justify-center lg:w-1/2 w-full lg:py-6">
        <div className="py-4">
          <h2 className="text-sm title-font text-gray-500 tracking-widest first-letter:uppercase">
            {category}
          </h2>

          <h1 className="text-sec-blue-800 text-3xl title-font font-medium mb-1">
            {title}
          </h1>

          <p className="leading-relaxed text-[15px] font-light text-sec-blue-800">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between py-4">
          <span className="title-font font-medium text-2xl text-sec-blue-800 pb-5 sm:pb-0">
            $ {price}
          </span>
          {isAddedToCart ? (
            <MainButton className={"h-[48px]"}>
              <Link to="/cart">Ver Carrito</Link>
            </MainButton>
          ) : (
            <ItemCount stock={stock} handleAddToCart={handleAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
