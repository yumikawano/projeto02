
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddToCart } from "../Cart/AddToCart";

export const CardProducts = ({ productsCard, setProductsCard, product }) => {
  return (
    <Card className='text-center shadow h-100'>
      <Card.Img variant="top"  src={product.image} alt={product.name} />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title as='h2' className='h5'>{product.name}</Card.Title>
        <Card.Text>{product.shortDescription}</Card.Text>
            <Button as={Link} to={`/produtos/${product.id}`} className='btn-light btn-outline-danger'>Saiba mais</Button>
            <AddToCart 
          productsCard={productsCard}
          setProductsCard={setProductsCard}
          id={product.id}
          image={product.image}
          name={product.name}
        />
      </Card.Body>
    </Card>
  )
}
