import React from "react";
import { MdShoppingBag } from "react-icons/md";

const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 px-4">
      <div className="mb-3 sm:mb-4 text-gray-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
        <MdShoppingBag size="100%" />
      </div>
      <p className="text-base sm:text-lg font-medium">Your cart is empty</p>
      <p className="text-xs sm:text-sm mt-2 text-center">
        Add some products to get started!
      </p>
    </div>
  );
};

export default EmptyCart;
