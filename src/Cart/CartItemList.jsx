import React from 'react'
import CartItem from './CartItem'
import uuid from 'uuid'
import PropType from 'prop-types'

const CartItemList = ({ items }) =>
  <div className='list-group'>
    {
      items.map(item =>
        <CartItem
          key={uuid.v4()}
          {...items}
        />
      ).reverse()
    }
  </div>

CartItemList.defaultProps = {
  items: []
}

CartItemList.propTypes = {
  items: PropType.arrayOf(PropType.object)
}

export default CartItemList
