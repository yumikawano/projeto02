import {  Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/Cart/Cart.selectors";
import { removeOfCart } from "../../store/Cart/Cart.actions";
import { Link } from "react-router-dom"

export const CartSummary = ({ show, handleClose }) => {
  const dispatch = useDispatch()
  const productsCart = useSelector(selectCart)
  const handleRemove = id => {
    dispatch(removeOfCart(id))
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
              <th>#</th>
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
                <td><img src={product.image}/></td>
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
          <tbody>
          <tr>
            <td>
            <Button as={Link} to="/produtos" href="/produtos" variant='btn-light btn-outline-dark' className="btn-add-item">ADICIONAR MAIS ITENS</Button>
            </td>
            <td>
            <Button as={Link} to="/produtos" hreaf="#action3.2" variant='btn-dark btn-outline-dark' className="btn-pedido">FAZER PEDIDO</Button>
            </td>
          </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
} 