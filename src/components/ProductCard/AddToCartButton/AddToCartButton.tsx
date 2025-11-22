import React from "react";
import classNames from "classnames";
import { Product } from "../../../types";
import { useCartProduct } from "../../../hooks/useCartProduct";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { isInCart, handleClick } = useCartProduct(product);

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500":
            isInCart,
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
            !isInCart,
        }
      )}
    >
      {isInCart ? "In Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
