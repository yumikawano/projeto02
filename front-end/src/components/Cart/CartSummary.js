import {  Button, Modal, Table } from "react-bootstrap";

export const CartSummary = ({ show, handleClose, productsCard, setProductsCard }) => {
  const handleRemove = id => {
    const newProductsCard = productsCard.filter(
      product => product.id !== id
    )
    setProductsCard(newProductsCard)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {productsCard?.length === 0 ? (
              <tr>
                <td colSpan={3}>Seu carrinho está vazio.</td>
              </tr>
            ) : productsCard.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>
                <Button
                    variant='danger'
                    size='sm'
                    onClick={() => handleRemove(product.id)}
                  >Remover</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
} 