import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";

export default function Item({ title, price, discount, category, image, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const { valueAfterDisc } = useContext(cartContext);

  return (
    <Link to={`/item/${id}`}>
      <div
        className={`relative
      bg-white border-2 flex flex-col gap-4 w-[290px] p-4 rounded-lg text-left text-sec-blue-800 border-sec-blue-100 hover:shadow-xl transition-all duration-200
      `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {discount ? (
          <div className="bg-pri-green-50 text-pri-green-800 font-semibold px-2 py-[2px] absolute shadow-[inset_2px_2px_2px_rgba(0,0,0,0.25)] rounded-lg">
            {discount}% OFF
          </div>
        ) : (
          ""
        )}

        <img
          src={image}
          className="w-full h-[258px] object-contain bg-white"
          alt={title}
        />
        <div className="relative">
          <p className="font-normal text-sec-blue-700 capitalize">{category}</p>

          <h3 className="text-base text-metal-500 font-semibold">{title}</h3>

          <div className="flex gap-[10px]">
            <p className="font-bold text-base">
              ${discount ? valueAfterDisc(discount, price) : price}
            </p>
            {discount && (
              <p className="line-through text-sec-blue-700 font-light">
                ${price}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
