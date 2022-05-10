import {  Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"

export const CartSummary = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector(state => state.cart)
  return (
    <Modal show={true} onHide={()=>{}}>
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
            {productsCart?.length === 0 ? (
              <tr>
                <td colSpan={3}>Seu carrinho está vazio.</td>
              </tr>
            ) : productsCart.map(product => (
              <tr key={product.id}>
                <td>{product.nome}</td>
                <td>{product.quantidade}</td>
                <td>
                <Button
                    variant='danger'
                    size='sm'
                    onClick={() => {}}//handleRemove(product.id)
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