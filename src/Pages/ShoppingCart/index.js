import productsApi from '../../api/products'
const ShoppingCart = ({ shoppingCart }) => {
  const saveSaleOrder = async shoppingCart => {
    const result = await productsApi.saveSaleOrder(shoppingCart)
    console.log(result)
  }
  const saleTotal = () => {
    const total = shoppingCart.reduce(
      (accum, current) => accum + current.quantity * current.price,
      0
    )
    return total
  }
  return (
    <div className='row'>
      <div className='col-12'>
        <table class='table table-dark table-striped mt-3'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map(item => {
              const { name, description, price, quantity } = item
              return (
                <tr>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>${price}</td>
                  <td>{quantity}</td>
                  <td>${price * quantity}</td>
                </tr>
              )
            })}
            <tr>
              <td colSpan={4} className='text-end'>
                Total:
              </td>
              <td>${saleTotal()}</td>
            </tr>
          </tbody>
        </table>

        <button
          className='btn btn-primary'
          onClick={() => saveSaleOrder(shoppingCart)}
        >
          Realizar compra
        </button>
      </div>
    </div>
  )
}
export default ShoppingCart
