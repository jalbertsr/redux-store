import React, { Component } from 'react'
import PropType from 'prop-types'
import Header from './common/Header'
export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>© 2017</footer>
      </div>
    )
  }
}

App.propType = {
  children: PropType.object.isRequired
}
