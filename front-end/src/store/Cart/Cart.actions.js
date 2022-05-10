export const addToCart = (id, name) => {
    return {
      type: 'ADD_TO_CART',
      payload: {
        id,
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