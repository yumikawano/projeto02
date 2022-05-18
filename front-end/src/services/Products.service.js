import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const getProducts = async () => {
  const response = await fetch(`${apiUrl}/produtos`)
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}

export const getProductById = async (productId) => {
  const response = await fetch(`${apiUrl}/produtos/${productId}?_embed=inscriptions`)
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}

export const deleteProduct = async productId => {
  const response = await fetch(`${apiUrl}/produtos/${productId}`, {
    method: 'DELETE',
    headers: getAuthorizationHeaders()
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const createProduct = async productData => {
  const body = JSON.stringify(productData)
  const response = await fetch(`${apiUrl}/produtos`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const updateProduct = async (productId, productData) => {
  const body = JSON.stringify(productData)
  const response = await fetch(`${apiUrl}/produtos/${productId}`, {
    method: 'PUT',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}