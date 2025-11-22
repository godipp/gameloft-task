import React from "react";

interface CartFooterProps {
  totalPrice: string;
  onCheckout: () => void;
  onClearCart: () => void;
}

const CartFooter: React.FC<CartFooterProps> = ({
  totalPrice,
  onCheckout,
  onClearCart,
}) => {
  return (
    <div className="border-t border-gray-200 p-3 sm:p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <span className="text-base sm:text-lg font-semibold text-gray-800">
          Total:
        </span>
        <span className="text-xl sm:text-2xl font-bold text-blue-600">
          {totalPrice}
        </span>
      </div>

      <div className="space-y-2">
        <button
          onClick={onCheckout}
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Proceed to Checkout
        </button>

        <button
          onClick={onClearCart}
          className="w-full bg-gray-200 text-gray-800 py-2 text-sm sm:text-base rounded-lg hover:bg-gray-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
