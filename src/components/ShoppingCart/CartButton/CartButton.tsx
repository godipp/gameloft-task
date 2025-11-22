import React from "react";
import { MdShoppingCart } from "react-icons/md";

interface CartButtonProps {
  itemCount: number;
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7">
        <MdShoppingCart size="100%" />
      </div>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out opacity-100 scale-100">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
