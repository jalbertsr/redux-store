import { combineReducer } from 'redux'
import productList from './productListReducer'
import activeProduct from './activeProductReducer'
import cart from './cartReducer'

const rootReducer = combineReducer({
  productList,
  activeProduct,
  cart
})

export default rootReducer
