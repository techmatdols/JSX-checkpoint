import React from "react";
import Product from "../product";

const Name = ({ product }) => {
  return (
    <h1>
      {product.name}
    </h1>
  );
};

export default Name;
