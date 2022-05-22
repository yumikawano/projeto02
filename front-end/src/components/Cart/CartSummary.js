import {  Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/Cart/Cart.selectors";
import { addQty, removeOfCart } from "../../store/Cart/Cart.actions";
import { Link } from "react-router-dom"
import { selectUser } from "../../store/User/User.selectors";

export const CartSummary = ({ show, handleClose }) => {
  const user = useSelector(selectUser)
  const productsCart = useSelector(selectCart)
  const dispatch = useDispatch()
  const handleRemove = id => {
    dispatch(removeOfCart(id))
}
  const handleCart = qty => {
    dispatch(addQty( qty))
  }
    // const handleRemoveQty = qty => {
  //   dispatch(removeQty( qty))
  // }

  const sendWhastApp = () => {
    let text = 'Confira o pedido abaixo:\n---------------------------------------\n\n'
    const subdomain = window.innerWidth > 768 ? 'web' : 'api'
    productsCart.forEach(products => {
            text += `*${products.name}*\n` 
            text += `Quantidade : ${products.qty}\n`
            text += '\n---------------------------------------\n\n'    
        })
            text += '*Dados do Cliente*\n\n'
            text += `Nome: ${user.name}\n`
            text += `Endereço: ${user.address}\n`
            text += `CEP: ${user.cep}\n\n`
            text += '\n---------------------------------------\n\n'  
        window.open(`https://${subdomain}.whatsapp.com/send?phone=5544988251854&text=${encodeURI(text)}`, '_blank')
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
                <td><img src={product.image} width="100px" height="100px" /></td>
                <td>{product.name}</td>
                <td><input className="form-input" type="number" value={product.qty} onClick={() => handleCart(product.id)} /></td>
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
            <Button as={Link} to="/produtos" hreaf="/produtos" variant='btn-light btn-outline-dark' className="btn-add-item">ADICIONAR MAIS ITENS</Button>
            </td>
            <td>
            <Button variant='btn-light btn-outline-dark' className="btn-finalizar" onClick={sendWhastApp}>FINALIZAR PEDIDO</Button>
            </td>
          </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  )
}