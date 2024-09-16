import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="container">
        <img
          alt="Image"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602424550i/55625842.jpg"
        />

        <div className="info">
          <h2>Learning React From Scratch</h2>
          <p>Some Description: A cool book for learning react</p>
          <p>Andrew Tate</p>
          <button>Buy</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
