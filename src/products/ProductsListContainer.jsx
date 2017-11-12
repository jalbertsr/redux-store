import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropType from 'prop-types'

import ProductList from './ProductList'
import * as productActions from '../actions/productActions'

class ProductListContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {

    }
  }

  componentDidMount () {
    this._componentDidMount()
  }

  async _componentDidMount () {
    await this.props.productActions.fetchProducts()
  }

  render () {
    return (
      <div>
        <ProductList
          loading={this.props.loading}
          products={this.props.products}
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
  productActions: PropType.objectOf(PropType.func).isRequired
}

function mapStateToProps (state) {
  return {
    products: state.productList.products,
    loading: state.productList.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
