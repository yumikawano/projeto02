import { apiUrl } from "./Api.service"

export const getProducts = async () => {
  const response = await fetch(`${apiUrl}/products`)
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}

export const getProductsById = async (productId) => {
  const response = await fetch(`${apiUrl}/products/${productId}?_embed=inscriptions`)
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}