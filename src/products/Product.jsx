import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Product = ({ _id, name, description, image, price, deliveryStimate,
category }) => (
  <div className='col-xs-12 col-sm-6 col-lg-4'>
    <div className='card'>
      <Link to={`/details/${_id}`}>
        <img
          className='card.img-top'
          width='100%' src={image}
          alt={description}
        />
      </Link>
      <div className='card-block'>
        <Link to={`/details/${_id}`}>
          <h4 className='card-title'>{name}</h4>
        </Link>
        <p className='card-text'>{description}</p>
      </div>
      <ul>
        <li className='list-gropu-item'>
          <strong>{price} EUR</strong>
        </li>
        <li className='list-gropu-item'>
          <strong>Entrega: </strong>{deliveryStimate}
        </li>
        <li className='list-gropu-item'>
          <span className='badge badge-pill badge info'>
            {category}
          </span>
        </li>
      </ul>
      <div className='card-block'>
        <button className='btn btn-primary'>
          <span className='fa fa-cart-plus' />Añadir al carrito
        </button>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deliveryStimate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Product
