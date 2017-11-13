import React from 'react'

const CartItem = ({ _id, name, description, image, price, onRemoveItem }) =>
  <div className='list-group-item list-group-item-action flex-row justify-content-between'>
    <figure className='d-flex'>
      <img height='100' src={image} alt={name} />
    </figure>
    <div className='d-flex flex-column w-75 justify-content between'>
      <h5 className='mb-1'>{name}</h5>
      <p className='mb-1'>{description}</p>
      <small>Cantidad: 1</small>
      <small>Precio {price} &euro;</small>
    </div>
    <small className='d-flex text-muted'>
      <button className='btn btn-danger' onClick={() => onRemoveItem(_id)}>
        &times;
      </button>
    </small>
  </div>

export default CartItem
