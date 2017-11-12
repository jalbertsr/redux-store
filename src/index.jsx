import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css'

import routes from './routes'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
