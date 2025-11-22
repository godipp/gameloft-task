import { useMemo } from "react";
import { useCartStore } from "../store/cartStore";

export const useCart = () => {
  const items = useCartStore((state) => state.items);

  const { totalPrice, itemCount } = useMemo(() => {
    const total = items.reduce((sum, item) => {
      const itemTotal = item.product.price * item.quantity;
      const discount = item.quantity > 5 ? itemTotal * 0.1 : 0;
      return sum + itemTotal - discount;
    }, 0);

    const count = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      totalPrice: total,
      itemCount: count,
    };
  }, [items]);

  const formattedTotalPrice = useMemo(
    () => `$${totalPrice.toFixed(2)}`,
    [totalPrice]
  );

  return {
    items,
    totalPrice,
    itemCount,
    formattedTotalPrice,
    isEmpty: items.length === 0,
  };
};
