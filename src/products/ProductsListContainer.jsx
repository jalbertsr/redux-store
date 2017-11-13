import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropType from 'prop-types'

import ProductList from './ProductList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cardActions'

class ProductListContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  componentDidMount () {
    this._componentDidMount()
  }

  async _componentDidMount () {
    await this.props.productActions.fetchProducts()
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }

  render () {
    return (
      <div>
        <ProductList
          loading={this.props.loading}
          products={this.props.products}
          onAddItem={this.handleOnAddItem}
        />
      </div>
    )
  }
}
ProductListContainer.defaultProps = {
  products: []
}

ProductListContainer.propTypes = {
  products: PropType.arrayOf(PropType.object),
  loading: PropType.bool.isRequired,
  productActions: PropType.objectOf(PropType.func).isRequired,
  cartActions: PropType.objectOf(PropType.func).isRequired
}

function mapStateToProps (state) {
  return {
    products: state.productList.products,
    loading: state.productList.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
