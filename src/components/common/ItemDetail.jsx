import ItemCount from "./ItemCount";
import { useContext, useState, useEffect } from "react";
import cartContext from "../../context/cartContext";
import { useParams, Link } from "react-router-dom";
import ItemDetailSkele from "../common/Skeletons/ItemDetailSkele";
import { getAsyncDataById } from "../../data/dataBase";
import MainButton from "./buttons/MainButton";
import icons from "../../assets/icons";

function ItemDetail() {
  const { addItem } = useContext(cartContext);
  const { valueAfterDisc } = useContext(cartContext);
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
    // TODO Fix image height and others problems for responsive
    <section className="lg:max-w-7xl w-[90%] my-12 mx-auto flex flex-wrap justify-between p-4 rounded-2xl drop-shadow-xl bg-white">
      {/* Product Image */}
      <div className="md:w-1/2 px-5 w-full sm:h-[500px] h-[300px] my-auto">
        <img
          src={image}
          alt={title}
          className="h-full object-contain mx-auto"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-between py-6 lg:pr-4 gap-16">
        {/* Container - Product Details */}
        <div className=" flex flex-col text-left justify-center ">
          {/* Product Category */}
          <h2 className="text-sm text-gray-500 tracking-widest first-letter:uppercase">
            {category}
          </h2>
          {/* Product Title */}
          <h1 className="text-sec-blue-800 text-xl font-medium pt-1 pb-4">
            {title}
          </h1>
          {/* Product Price & Social Media*/}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="font-medium text-[2rem] text-sec-blue-800 sm:pb-0">
                ${discount ? valueAfterDisc(discount, price) : price}
              </p>
              {discount && (
                <span className="px-[10px] text-[1.3rem] line-through text-sec-blue-700 font-light">
                  ${price}
                </span>
              )}
            </div>
            {/* Social Media Link shares */}
            <ul className="flex gap-4">
              <li>
                <a href="#">
                  <img
                    src={icons.facebook}
                    alt="Facebook Icon"
                    className="hover:brightness-90"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={icons.whatsapp}
                    alt="Whatsapp Icon"
                    className="hover:brightness-90"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={icons.xTwitter}
                    alt="X Twitter Icon"
                    className="hover:brightness-90"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* TODO Un toast que me diga que copió al portapapeles */}
                  <img
                    src={icons.link}
                    alt="Share link Icon"
                    className="hover:brightness-90"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="h-[1px] bg-sec-blue-100 my-6"></div>
          {/* Product Description */}
          <p className="h-[120%] leading-relaxed text-[15px] font-light text-sec-blue-800">
            {description}
          </p>
        </div>
        {/* Counter and Cart */}
        {isAddedToCart ? (
          <div className="flex justify-between items-center text-sec-blue-700">
            <p className="sm:text-left w-[60%]">
              Your product was added to the cart!
            </p>
            <MainButton className={"h-[48px]"}>
              <Link to="/cart">See Cart</Link>
            </MainButton>
          </div>
        ) : (
          <ItemCount stock={stock} handleAddToCart={handleAddToCart} />
        )}
      </div>
    </section>
  );
}

export default ItemDetail;
