
export const addToCart = (id, image, name) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
      image,
      name
    }
  }
}

export const removeOfCart = id => {
  return {
    type: 'REMOVE_OF_CART',
    payload: {
      id
    }
  }
}