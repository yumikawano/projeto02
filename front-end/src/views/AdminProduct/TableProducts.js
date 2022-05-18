import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../../services/Products.service";

export function TableProducts ({ products, onDeleteProduct }) {
  const [productToDelete, setProductToDelete] = useState()
  const hideModal = () => setProductToDelete(undefined)
  const handleClick = (product) => {
    setProductToDelete(product)
  }
  const handleDelete = async () => {
    try {
      await deleteProduct(productToDelete.id)
      await onDeleteProduct()
      toast.success('Produto deletado com sucesso.')
    } catch {
      toast.error('Falha ao deletar produto. Tente novamente.')
    }
    hideModal()
  }
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Coordenador</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.image}</td>
              <td className="d-grid gap-1 d-sm-table-cell">
                <Button
                  size="sm"
                  as={Link}
                  to={`/portal/produtos/${product.id}`}
                >Editar</Button>
                <Button
                  size="sm"
                  variant='danger'
                  className="ms-sm-1"
                  onClick={() => handleClick(product)}
                >Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={productToDelete} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ao clicar em confirmar, o produto <strong>{productToDelete?.name}</strong> será excluído. Deseja realmente remover o produto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Deletar produto</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}