
import { Button } from "react-bootstrap"

export const AddToCart = ({ productsCard, setProductsCard, id, image, name }) => {
  const productFound = productsCard.findIndex(
    product => product.id === id
  )
  const handleAdd = () => {
    const newProductsCard = [...productsCard]
    if (productFound !== -1) {
      newProductsCard[productFound].qty++
    } else {
      newProductsCard.push({
        id,
        image,
        name,
        qty: 1
      })
    }
    setProductsCard(newProductsCard)
  }
  const handleRemove = () => {
    const newProductsCard = productsCard.filter(
      product => product.id !== id
    )
    setProductsCard(newProductsCard)
  }
  return (
    <>
      <Button variant="danger" block onClick={handleAdd}>{productFound !== -1 ? 'Adicionar mais um' : 'Adicionar'}</Button>
      {productFound !== -1 && (
        <Button variant="danger" size="sm" block onClick={handleRemove}>Remover</Button>
      )}
    </>
  )
}


