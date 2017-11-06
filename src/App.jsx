import React, { Component } from 'react'
import PropType from 'prop-types'

export default class App extends Component {
  render () {
    return (
      <div>
        <header>Ecommerce</header>
        {this.props.children}
        <footer>© 2017</footer>
      </div>
    )
  }
}

App.propType = {
  children: PropType.object.isRequired
}
