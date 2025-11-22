import { CartItem as CartItemType } from "../types";

export const useCartItem = (item: CartItemType) => {
  const { product, quantity } = item;

  const itemTotal = product.price * quantity;
  const hasDiscount = quantity > 5;
  const discount = hasDiscount ? itemTotal * 0.1 : 0;
  const finalPrice = itemTotal - discount;

  const formattedPrice = `$${product.price.toFixed(2)}`;
  const formattedFinalPrice = `$${finalPrice.toFixed(2)}`;
  const formattedItemTotal = `$${itemTotal.toFixed(2)}`;

  return {
    product,
    quantity,
    itemTotal,
    hasDiscount,
    discount,
    finalPrice,
    formattedPrice,
    formattedFinalPrice,
    formattedItemTotal,
  };
};
