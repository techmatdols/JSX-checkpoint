import React, { Component } from "react";
import Product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card, Button } from "react-bootstrap";

const App = () => {
  const product = {
    name: "iPhone 13 Pro Max",
    price: 1099,
    description:
      "The iPhone 13 Pro Max is the most advanced iPhone ever. It features a powerful A15 Bionic chip, a stunning Super Retina XDR display, and a triple-lens rear camera system.",
    image: "https://i.imgur.com/7l90a8D.jpg",
  };

  return (
    <div>
      <Card>
        <Name product={product} />
        <Price product={product} />
        <Description product={product} />
        <Image product={product} />
      </Card>
      <Button>
        {this.props.name ? "Hello, " + this.props.name : "Hello, there!"}
      </Button>
    </div>
  );
};

export default App;