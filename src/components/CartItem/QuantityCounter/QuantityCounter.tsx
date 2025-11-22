import React, { useCallback } from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import { useCartStore } from "../../../store/cartStore";

interface QuantityCounterProps {
  productId: string;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ productId }) => {
  const quantity = useCartStore((state) => {
    const item = state.items.find((item) => item.product.id === productId);
    return item?.quantity ?? 0;
  });

  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleDecrease = useCallback(() => {
    updateQuantity(productId, quantity - 1);
  }, [productId, quantity, updateQuantity]);

  const handleIncrease = useCallback(() => {
    updateQuantity(productId, quantity + 1);
  }, [productId, quantity, updateQuantity]);

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={handleDecrease}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Decrease quantity"
      >
        <MdRemove size={16} />
      </button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Increase quantity"
      >
        <MdAdd size={16} />
      </button>
    </div>
  );
};

export default QuantityCounter;
