import { useMemo } from "react";
import { Product } from "../types";

export const useProductCarousel = (products: Product[]) => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: products.length > 3,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: products.length > 3,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: products.length > 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: products.length > 1,
          },
        },
      ],
    }),
    [products.length]
  );

  return { settings };
};
