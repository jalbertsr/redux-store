import {
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE,
  SAVE_PRODUCT_INIT
} from './types'
import API from '../services/dataService'

export function fetchProductSuccess (product) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: product
  }
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export function fetchProductsSucces (product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}

export function fetchProductFailure (error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export function saveProductsSucces (product) {
  return {
    type: SAVE_PRODUCT_SUCCESS,
    payload: product
  }
}

export function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  }
}

// Action creators (Async)
export function fetchProducts () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCT_INIT
      }
    })
    try {
      const data = await API.products.getAll()
      return dispatch(saveProductsSucces(data.products))
    } catch (error) {
      return dispatch(fetchProductsFailure(error))
    }
  }
}

export function fetchProduct (productId) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCT_INIT
      }
    })
    try {
      const data = await API.products.getSingle(productId)
      return dispatch(fetchProductSuccess(data.product))
    } catch (error) {
      return dispatch(fetchProductFailure(error))
    }
  }
}

export function saveProduct (product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_PRODUCT_INIT
      }
    })
    try {
      await API.products.save(product)
      return dispatch(saveProductsSucces(product))
    } catch (error) {
      return dispatch(saveProductFailure(error))
    }
  }
}
