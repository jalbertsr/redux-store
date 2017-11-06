import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import configureStore from './store/configureStore'
import initialState from './reducer/initialState'

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
