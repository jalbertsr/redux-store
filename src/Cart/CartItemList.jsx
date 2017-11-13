import React from 'react'
import CartItem from './CartItem'
import uuid from 'uuid'
import PropType from 'prop-types'

const CartItemList = ({ items, onRemoveItem }) =>
  <div className='list-group'>
    {
      items.map(item =>
        <CartItem
          key={uuid.v4()}
          onRemoveItem={onRemoveItem}
          {...items}
        />
      ).reverse()
    }
  </div>

CartItemList.defaultProps = {
  items: []
}

CartItemList.propTypes = {
  items: PropType.arrayOf(PropType.object),
  onRemoveItem: PropType.func.isRequired
}

export default CartItemList
