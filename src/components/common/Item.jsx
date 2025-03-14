import { useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "./buttons/MainButton";
import clsx from "clsx";

export default function Item({ title, price, category, image, id }) {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div className={`
      bg-white border-2 border-transparent flex flex-col gap-4 w-[290px] p-4 rounded-lg text-left text-sec-blue-800 shadow-lg
      hover:border-sec-blue-100 hover:shadow-xl transition-all duration-200
      `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >

        <img src={image} className="w-full h-[258px] object-contain bg-white" alt={title}/>
      <div>
        <h3 className="text-base truncate text-metal-500 font-semibold">
          {title}
        </h3>

        <div className="flex justify-between items-end">
          <div className="">
            <p className="font-normal text-sec-blue-700 capitalize">
              {category}
            </p>

            <p className="font-bold text-base">
              ${price}
            </p>
          </div>

          <MainButton
            className={clsx({
              "lg:opacity-0": !isHovered,
              "lg:opacity-100": isHovered,
            })}>
            <Link to={`/item/${id}`}>
              View Details
            </Link>
          </MainButton>
        </div>
      </div>
    </div>
  )
}