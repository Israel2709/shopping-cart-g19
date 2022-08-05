import { useState } from 'react'

const ProductCard = props => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, productData } = props
  const { picture, name, description, price, productKey } = productData
  return (
    <div className='col'>
      <div className='card h-100'>
        <img
          src={picture}
          className='w-100 product-card__image image-fit'
          alt='some picture'
        />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div className='mb-3'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>${price}</p>
            <form action=''>
              <label>Cantidad:</label>
              <input
                type='number'
                className='form-control'
                onChange={event => {
                  setQuantity(Number(event.target.value))
                }}
              />
            </form>
          </div>

          <div className='d-flex justify-content-between g-3'>
            <button
              className='btn btn-dark'
              onClick={() => {
                addToCart({
                  ...productData,
                  productKey,
                  quantity
                })
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
