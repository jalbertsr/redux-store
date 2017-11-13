import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from './types'

export function loadCartItems () {
  return {
    type: LOAD_CART_ITEMS
  }
}

export function addCartItem (item) {
  return {
    type: ADD_CART_ITEM,
    payload: item
  }
}

export function removeCartItem (itemId) {
  return {
    type: REMOVE_CART_ITEM,
    payload: itemId
  }
}
