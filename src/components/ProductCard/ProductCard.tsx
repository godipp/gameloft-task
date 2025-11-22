import React, { memo } from "react";
import { Product } from "../../types";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow min-h-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mt-auto">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            {formattedPrice}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
