import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'
import ProductDetail from './ProductDetail'
import { fetchProduct } from '../actions/productActions';

class ProductDetailContainer extends Component {
  constructor (props) {
    super (props)

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  componentWillMount () {
    this._componentWillMount()
  }

  async _componentWillMount () {
    await this.props.productActions.fetchProduct(this.props.productId)
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }

  render () {
    return (
      <ProductDetail
        loading={this.props.loading}
        product={this.props.product}
        onAddItem={this.handleOnAddItem}
      />
    )
  }
}

  ProductDetailContainer.propTypes = {
    productId: PropTypes.string.isRequired,
    product: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired,
    cartActions: PropTypes.objectOf(PropTypes.func).isRequired,
    onAddItem: PropTypes.func.isRequired
  }

  function mapStateToProps (state, ownProps) {
    return {
      productId: ownProps.props.productId,
      product: state.activeProduct.product,
      loading: state.activeProduct.loading
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      productAction: bindActionsCreators(productActions, dispatch),
      cartActions: bindActionCreators(cartActions, dispatch)
    }
  }

  export default connect(mapStateProps, mapDispatchToProps)
}