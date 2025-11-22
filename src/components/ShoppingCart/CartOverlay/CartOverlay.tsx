import React from "react";

interface CartOverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 backdrop-blur-sm ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
      aria-hidden={!isOpen}
    />
  );
};

export default CartOverlay;
