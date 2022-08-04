import { useEffect, useState } from 'react'
import productsApi from '../../api/products'
import ProductCard from '../../Components/ProductCard'
const ProductsList = ({ addToCart }) => {
  const [productsList, setProductsList] = useState({})

  useEffect(() => {
    const getProducts = async () => {
      const data = await productsApi.getProducts()
      console.log(data)
      setProductsList(data)
    }
    getProducts()
  }, [])
  return (
    <div className='row'>
      <div className='col-12'>
        <h2>¡Aquí puedes encontrar los mejores productos al mejor precio!</h2>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {Object.keys(productsList).map(productKey => {
            const productData =
              productsList[
                productKey
              ] /*esto regresa el objeto {name:'nombre del producto',description:'descripcion del producto', price:'precio'} en cada iteración*/

            return (
              <ProductCard
                productData={{ ...productData, productKey }}
                addToCart={addToCart}
                key={productKey}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
