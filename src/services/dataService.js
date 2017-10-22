import fetch from 'isomorphic-fetch'

const baseUrl = 'https://ecommerce-api-a4661.herokuapp.com/api'

const API = {
  products: {
    async getAll () {
      const response = await fetch(`${baseUrl}/products`)
      const data = await response.json()
      return data
    },
    async getSingle (id) {
      const response = await fetch(`${baseUrl}/products/${id}`)
      const data = await response.json()
      return data
    },
    async save (item) {
      const response = await fetch(`${baseUrl}/products/`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }),
        body: JSON.stringify(item)
      })
      const data = response.json()
      return data
    }
  }
}

export default API
