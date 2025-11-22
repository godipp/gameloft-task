import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 sm:py-5 md:py-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Product Store
        </h1>
      </div>
    </header>
  );
};

export default Header;
