const BASE_URL = 'https://react-19g-db-default-rtdb.firebaseio.com/shoppingCart'

export default {
  saveProduct: async product => {
    let result = await fetch(`${BASE_URL}/products.json`, {
      method: 'POST',
      body: JSON.stringify(product)
    })
    result = await result.json()
    return result
  },
  getProducts: async () => {
    let result = await fetch(`${BASE_URL}/products.json`)
    result = await result.json()
    return result
  },
  saveSaleOrder: async shoppingCart => {
    let result = await fetch(`${BASE_URL}/sales.json`, {
      method: 'POST',
      body: JSON.stringify(shoppingCart)
    })
    result = await result.json()
    return result
  }
}
