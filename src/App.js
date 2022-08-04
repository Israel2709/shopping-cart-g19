import { useState } from 'react'
import './App.css'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import ProductForm from './Pages/ProductForm'
import ProductsList from './Pages/ProductsList'
import ShoppingCart from './Pages/ShoppingCart'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState(
    []
  ) /*este es el state donde guardamos nuestro carrito de compras*/

  const addToCart = selectedProduct => {
    const updateQuantity = () => {
      const updatedCart = shoppingCart.map(item => {
        return !item.productKey === selectedProduct.productKey
          ? selectedProduct
          : { ...item, quantity: item.quantity + selectedProduct.quantity }
      })
      return updatedCart
    }
    !shoppingCart.find(item => item.productKey === selectedProduct.productKey)
      ? setShoppingCart([...shoppingCart, selectedProduct])
      : setShoppingCart(updateQuantity())
  }

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='App'>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>Shopping Cart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/create-product' className='nav-link'>
                Crear un producto
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/products-list' className='nav-link'>
                Lista de Productos
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/shopping-cart' className='nav-link'>
                Carrito de compras
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/sales-list' className='nav-link'>
                Listado de ventas
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container'>
        <Routes>
          <Route path='create-product' element={<ProductForm />} />
          <Route
            path='products-list'
            element={<ProductsList addToCart={addToCart} />}
          />
          <Route
            path='shopping-cart'
            element={<ShoppingCart shoppingCart={shoppingCart} />}
          />
          <Route path='sales-list' element={<h1>Lista de ventas</h1>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
