import React, { memo, useCallback } from "react";
import { CartItem as CartItemType } from "../../types";
import { useCartItem } from "../../hooks/useCartItem";
import { MdDelete } from "react-icons/md";
import QuantityCounter from "./QuantityCounter";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = memo(({ item, onRemove }) => {
  const {
    product,
    hasDiscount,
    formattedPrice,
    formattedFinalPrice,
    formattedItemTotal,
  } = useCartItem(item);

  const handleRemove = useCallback(() => {
    onRemove(product.id);
  }, [product.id, onRemove]);

  return (
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0 my-auto"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">
          {formattedPrice} each
        </p>
        {hasDiscount && (
          <p className="text-green-600 text-xs sm:text-sm font-medium mt-1">
            10% discount applied!
          </p>
        )}

        <QuantityCounter productId={product.id} />

        <div className="mt-2">
          <p className="text-sm sm:text-base font-semibold text-gray-800">
            {formattedFinalPrice}
            {hasDiscount && (
              <span className="text-gray-500 line-through text-xs sm:text-sm ml-2">
                {formattedItemTotal}
              </span>
            )}
          </p>
        </div>
      </div>

      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-700 transition-colors absolute top-3 right-3 sm:relative sm:top-0 sm:right-0 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        aria-label="Remove item"
      >
        <MdDelete size={20} />
      </button>
    </div>
  );
});

CartItem.displayName = "CartItem";

export default CartItem;
