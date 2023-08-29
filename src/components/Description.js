
Sure, here is the code to create a React app with the following features:

A root component called App.js in the src folder.
A file called product.js with a JSON object of a product's name, price, description, and a path or URL to an image.
Four components that return the product's name, price, description, and image: Name.js, Price.js, Description.js, and Image.js.
All components exported so that they can be used in the root component (in App.js).
The JSON object imported into all newly created components.
A card that contains all components created using react-bootstrap in App.js.
A message below the card that says "Hello, [your first name]" or "Hello, there!" if the first name is not provided.
An image displayed if the first name is provided.
Creative styling as much as possible.
JavaScript
// App.js
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
    price: 1,099,
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

// Product.js
export default {
  name: "",
  price: 0,
  description: "",
  image: "",
};

// Name.js
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

 

// Description.js
import React from "react";
import Product from "../product";

const Description = ({ product }) => {
  return (
    <p>
      {product.description}
    </p>
  );
};

export default Description;