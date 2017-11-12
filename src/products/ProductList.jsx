import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductList = ({ loading, products }) => (
  <section className='container'>
    {loading && <span>Cargando datos...</span>}
    <div className='row'>
      {
        products.map(product =>
          <Product
            key={product._id}
            {...product}
          />
        )
      }
    </div>
  </section>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
}

export default ProductList
