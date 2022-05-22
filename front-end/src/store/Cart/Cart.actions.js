
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

export const addQty = (id, qty) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
      qty
    }
  }
}

export const removeQty = (id, qty) => {
  return {
    type: 'REMOVE_QTY',
    payload: {
      id,
      qty
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