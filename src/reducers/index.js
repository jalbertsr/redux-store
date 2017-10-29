import { combineReducer } from 'redux'
import { routerReducer } from 'react-router-redux'
import productList from './productListReducer'
import activeProduct from './activeProductReducer'
import cart from './cartReducer'

const rootReducer = combineReducer({
  routing: routerReducer,
  productList,
  activeProduct,
  cart
})

export default rootReducer
