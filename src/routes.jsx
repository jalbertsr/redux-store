import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ProductListContainer from './products/ProductsListContainer'
import CartContainer from './Cart/CartContainer'
import ProductDetailContainer from './products/productsDetailContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProductListContainer} />
    <Route path='/cart' component={CartContainer} />
    <Route path='/detail/:productId' component={ProductDetailContainer} />
  </Route>
)
