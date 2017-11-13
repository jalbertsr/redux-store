import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as cartActions from '../actions/cardActions'
import CartItemList from './CartItemList'

class CartContainer extends Component {
  constructor (props) {
    super(props)

    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this)
  }

  componentWillMount () {
    this.props.actions.loadCartItems()
  }

  handleOnRemoveItem (id) {
    this.props.actions.removeCartItem(id)
  }

  render () {
    return (
      <section className='container'>
        <CartItemList
          items={this.props.items}
          onRemoveItem={this.handleOnRemoveItem}
        />
        <hr />
        <div className='row'>
          <p>Total: <strong>{this.props.total}</strong></p>
        </div>
      </section>
    )
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
}

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
}

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
