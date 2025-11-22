import React from "react";
import { MdClose } from "react-icons/md";

interface CartHeaderProps {
  onClose: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        Shopping Cart
      </h2>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        aria-label="Close cart"
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default CartHeader;
