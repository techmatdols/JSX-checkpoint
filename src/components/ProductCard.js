import { Card } from "react-bootstrap";

const ProductCard = ({ name, price, description, image }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Img src={image} />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;