import { combineReducers, createStore } from 'redux'
import { userReducer } from '../store/User/User.reducer'
import { CartReducer } from '../store/Cart/Cart.reducer'

const rootReducer = combineReducers({
  CartData: CartReducer,
  userData: userReducer
})



export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)