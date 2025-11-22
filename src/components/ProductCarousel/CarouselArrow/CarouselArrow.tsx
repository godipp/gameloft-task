import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface CarouselArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "prev" | "next";
}

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  className,
  style,
  onClick,
  direction,
}) => {
  const Icon = direction === "prev" ? MdChevronLeft : MdChevronRight;
  const position = direction === "prev" ? { left: "10px" } : { right: "10px" };

  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 10, ...position }}
      onClick={onClick}
    >
      <div className="text-blue-600" style={{ fontSize: "40px" }}>
        <Icon />
      </div>
    </div>
  );
};

export default CarouselArrow;
