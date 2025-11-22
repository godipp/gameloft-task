import React from "react";
import ProductCarousel from "../../components/ProductCarousel";
import ShoppingCart from "../../components/ShoppingCart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductCarousel />
      </main>
      <Footer />
      <ShoppingCart />
    </div>
  );
};

export default HomePage;
