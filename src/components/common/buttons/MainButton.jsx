import icons from "../../../assets/icons";
//import { ChevronRightIcon } from "@heroicons/react/24/outline"; TODO Uninstall Hero Icons

function MainButton({ children, className, rightIcon, leftIcon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 py-[10px] px-6 text-sm rounded-md bg-sec-blue-700 hover:bg-sec-blue-800 text-white font-regular ${className} transition duration-200
        `}
    >
      {leftIcon && icons[leftIcon] && (
        <img src={icons[leftIcon]} alt={leftIcon} />
      )}
      {children}
      {rightIcon && icons[rightIcon] && (
        <img src={icons[rightIcon]} alt={rightIcon} />
      )}
    </button>
  );
}

export default MainButton;
