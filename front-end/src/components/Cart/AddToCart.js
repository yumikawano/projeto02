
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeOfCart } from "../../store/Cart/Cart.actions"
import { selectCart } from "../../store/Cart/Cart.selectors"

export const AddToCart = ({ id, name }) => {
  const dispatch = useDispatch()
  const productsCart = useSelector(selectCart)
  const productFound = productsCart.findIndex(
    product => product.id === id
  )
  const handleAdd = () => {
    dispatch(addToCart(id, name))
  }
  const handleRemove = () => {
    dispatch(removeOfCart(id))
  }
  return (
    <>
      <Button variant="danger" block onClick={handleAdd}>
        {productFound !== -1 ? 'Adicionar mais um' : 'Adicionar'}
        </Button>
      {productFound !== -1 && (
        <Button variant="danger" size="sm" block onClick={handleRemove}>Remover</Button>
      )}
    </>
  )
}
