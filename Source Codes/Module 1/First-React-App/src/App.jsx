import React from "react";
import ProductCard from "./components/Product Card/ProductCard";

const App = () => {
  return (
    <>
      <div className="main-container">
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default App;
