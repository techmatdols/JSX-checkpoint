 // Price.js
import React from "react";
import Product from "../product";

const Price = ({ product }) => {
  return (
    <h2>
      ${product.price}
    </h2>
  );
};

export default Price;