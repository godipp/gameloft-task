import React, { useMemo } from "react";
import Slider from "react-slick";
import { products } from "../../data/products";
import ProductCard from "../ProductCard";
import CarouselArrow from "./CarouselArrow";
import { useProductCarousel } from "../../hooks/useProductCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel: React.FC = () => {
  const productCards = useMemo(
    () =>
      products.map((product) => (
        <div key={product.id} className="px-2 h-full">
          <ProductCard product={product} />
        </div>
      )),
    []
  );

  const { settings } = useProductCarousel(products);

  const carouselSettings = useMemo(
    () => ({
      ...settings,
      prevArrow: <CarouselArrow direction="prev" />,
      nextArrow: <CarouselArrow direction="next" />,
    }),
    [settings]
  );

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 md:py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 text-center">
        Our Products
      </h2>
      <div className="product-carousel-wrapper">
        <Slider
          {...carouselSettings}
          className="product-carousel [&_.slick-slide>*]:min-h-full"
        >
          {productCards}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
