import React from "react";
import { useCart } from "../../hooks/useCart";
import { useCartActions, useCartModal } from "../../store/cartStore";
import CartButton from "./CartButton";
import CartOverlay from "./CartOverlay";
import CartSidebar from "./CartSidebar";

const ShoppingCart: React.FC = () => {
  const { isOpen, toggleCart, closeCart } = useCartModal();
  const { items, itemCount, formattedTotalPrice } = useCart();
  const { removeFromCart, updateQuantity, clearCart } = useCartActions();

  return (
    <>
      <CartButton itemCount={itemCount} onClick={toggleCart} />
      <CartOverlay isOpen={isOpen} onClick={closeCart} />
      <CartSidebar
        isOpen={isOpen}
        items={items}
        totalPrice={formattedTotalPrice}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {}}
        onClearCart={clearCart}
      />
    </>
  );
};

export default ShoppingCart;
