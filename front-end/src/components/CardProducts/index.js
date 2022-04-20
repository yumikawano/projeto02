
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CardProducts ({ product }) {
  return (
    <Card className='text-center shadow h-100'>
      <Card.Img variant="top"  src={product.image} alt={product.name} />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title as='h2' className='h5'>{product.name}</Card.Title>
        <Card.Text>{product.shortDescription}</Card.Text>
        <Card.Text as='h5'>{product.price}</Card.Text>
            <Button as={Link} to={`/produtos/${product.id}`} className='btn btn-danger'>Saiba mais</Button>
      </Card.Body>
    </Card>
  )
}
