import React from "react";
import { CartItem as CartItemType } from "../../../types";
import CartHeader from "../CartHeader";
import EmptyCart from "../EmptyCart";
import CartFooter from "../CartFooter";
import CartItem from "../../CartItem";

interface CartSidebarProps {
  isOpen: boolean;
  items: CartItemType[];
  totalPrice: string;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
  onClearCart: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  items,
  totalPrice,
  onClose,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  onClearCart,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
      aria-modal={isOpen}
      role="dialog"
    >
      <div className="flex flex-col h-full">
        <CartHeader onClose={onClose} />

        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <CartFooter
            totalPrice={totalPrice}
            onCheckout={onCheckout}
            onClearCart={onClearCart}
          />
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
