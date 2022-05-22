const initialValue = []

export const CartReducer = (state = initialValue, action) => {
switch (action.type) {
  case 'ADD_TO_CART':
    const newState = [...state]
    const productFound = newState.findIndex(
      product => product.id === action.payload.id
    )
    if (productFound !== -1) {
      newState[productFound].qty++
    } else {
      newState.push({
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        qty: 1
      })
    }
    return newState
  case 'REMOVE_OF_CART':
    return state.filter(
      product => product.id !== action.payload.id
    )
    case 'REMOVE_QTY':
      const newCart = [...state]
        const qtyFound = newCart.findIndex (
            product => product.qty === action.payload
        )
        if(qtyFound !== -1 ) {
            newCart[qtyFound].qty--
            return newCart 
        }

  default:
    return state
}  
}