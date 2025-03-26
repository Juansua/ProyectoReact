import { useState } from "react";
import addIcon from "../../assets/add.svg";
import removeIcon from "../../assets/remove.svg";
import CountButton from "./buttons/CountButton";
import MainButton from "./buttons/MainButton";

export default function ItemCount({ stock, handleAddToCart }) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount((prev) => (prev == 1 ? prev : prev - 1));
  };

  const handleSubstract = () => {
    setCount((prev) => (prev == stock ? prev : prev + 1));
  };

  return (
    <div className="flex flex-wrap h-[48px] gap-2 lg:gap-8">
      <div className="flex items-center gap-6 px-2 bg-[#FAFFFE] border border-sec-blue-100">
        <CountButton onClick={handleAdd}>
          <img src={removeIcon} alt="remove Icon" />
        </CountButton>

        <p className="text-xl font-semibold text-sec-blue-800">{count}</p>

        <CountButton onClick={handleSubstract}>
          <img src={addIcon} alt="add Icon" />
        </CountButton>
      </div>

      <MainButton
        onClick={() => {
          handleAddToCart(count);
        }}
      >
        Add to Cart
      </MainButton>
    </div>
  );
}
