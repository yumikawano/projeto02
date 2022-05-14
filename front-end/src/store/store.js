import { combineReducers, createStore } from 'redux'
import { CartReducer } from '../store/Cart/Cart.reducer'

const rootReducer = combineReducers({
  CartData: CartReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)