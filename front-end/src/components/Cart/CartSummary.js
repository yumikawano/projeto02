import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/Cart/Cart.selectors";
import { addQty, removeOfCart, removeQty } from "../../store/Cart/Cart.actions";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/User/User.selectors";

export const CartSummary = ({ show, handleClose }) => {
  const user = useSelector(selectUser);
  const productsCart = useSelector(selectCart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeOfCart(id));
  };
  const handleCart = (qty) => {
    dispatch(addQty(qty));
  };
  const handleRemoveQty = product => {
    dispatch(removeQty(product))
  }

  const sendWhastApp = () => {
    let text =
      "*CONFIRA O PEDIDO ABAIXO:*\n---------------------------------------\n\n";
    const subdomain = window.innerWidth > 768 ? "web" : "api";
    productsCart.forEach((product) => {
      text += `*Produto:* ${product.name}\n`;
      text += `*Quantidade:* ${product.qty}\n\n`;
    });
    text += "*CLIENTE:*\n---------------------------------------\n\n"
    text += `*Nome:* ${user.name}\n`;
    text += `*Endereço:* ${user.address}\n`;
    text += `*Número:* ${user.nº}\n`;
    text += `*Complemento:* ${user.complemento}\n`;
    text += `*Bairro:* ${user.bairro}\n`;
    text += `*Cidade:* ${user.cidade}\n`;
    text += `*Contato:* ${user.number}\n`;
    window.open(
      `https://${subdomain}.whatsapp.com/send?phone=5544988251854&text=${encodeURI(
        text
      )}`,
      "_blank"
    );
  };

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
            ) : (
              productsCart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} width="100px" height="100px" />
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <Button onClick={() => handleCart(product.id)} variant="danger">
                      +
                    </Button>
                    <Button onClick={() => handleRemoveQty(product.qty)} variant="danger">-</Button>
                  </td>
                  <td>
                    <div>{product.qty}</div>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(product.id)}
                    >
                      REMOVER
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tbody>
            <tr>
              <td>
                <Button
                  as={Link}
                  to="/produtos"
                  hreaf="/produtos"
                  variant="btn-light btn-outline-dark"
                  className="btn-add-item"
                >
                  ADICIONAR MAIS ITENS
                </Button>
              </td>
              <td>
                <Button
                  onClick={sendWhastApp}
                  variant="btn-light btn-outline-dark"
                  className="btn-finalizar"
                >
                  FINALIZAR PEDIDO
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};
