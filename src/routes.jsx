import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ProductListContainer from './products/ProductsListContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProductListContainer} />
  </Route>
)
