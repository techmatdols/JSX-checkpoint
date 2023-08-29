
// Image.js
import React from "react";
import Product from "../product";

const Image = ({ product }) => {
  return (
    <img src={product.image} alt={product.name} />
  );
};

export default Image;