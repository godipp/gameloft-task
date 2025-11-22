import { useCallback, useMemo } from "react";
import { Product } from "../types";
import { useCartStore } from "../store/cartStore";

export const useCartProduct = (product: Product) => {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart);

  const isInCart = useMemo(
    () => items.some((item) => item.product.id === product.id),
    [items, product.id]
  );

  const handleClick = useCallback(() => {
    if (isInCart) {
      openCart();
    } else {
      addToCart(product);
    }
  }, [isInCart, openCart, addToCart, product]);

  return {
    isInCart,
    handleClick,
  };
};
