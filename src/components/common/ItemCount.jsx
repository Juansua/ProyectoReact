import { useState } from "react";
import CountButton from "./buttons/CountButton";
import MainButton from "./buttons/MainButton";
import icons from "../../assets/icons";

export default function ItemCount({ stock, handleAddToCart }) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount((prev) => (prev == 1 ? prev : prev - 1));
  };

  const handleSubstract = () => {
    setCount((prev) => (prev == stock ? prev : prev + 1));
  };

  return (
    <div className="flex sm:justify-end justify-between h-[48px] gap-2 lg:gap-8">
      <div className="flex items-center lg:gap-6 gap-4 j px-2 bg-[#FAFFFE] border border-sec-blue-100">
        <CountButton onClick={handleAdd}>
          <img src={icons.remove} alt="remove Icon" />
        </CountButton>

        <p className="text-xl font-semibold text-sec-blue-800">{count}</p>

        <CountButton onClick={handleSubstract}>
          <img src={icons.addBg} alt="add Icon" />
        </CountButton>
      </div>

      <MainButton
        onClick={() => {
          handleAddToCart(count);
        }}
        leftIcon={"addNoBg"}
      >
        Add to Cart
      </MainButton>
    </div>
  );
}
