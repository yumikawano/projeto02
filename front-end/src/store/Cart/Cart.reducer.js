const initialValue = [{
    id: 1,
    nome: "ração",
    quantidade: 1
},{
    id: 2,
    nome: "brinquedo",
    quantidade: 2
}]

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
          name: action.payload.name,
          qty: 1
        })
      }
      return newState
    case 'REMOVE_OF_CART':
      return state.filter(
        product => product.id !== action.payload.id
      )
    default:
      return state
  }  
}