import { useEffect, useState } from 'react'
import './App.scss'
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
import Login from './Pages/Login'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
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

  const handleLogIn = token => {
    token ? setIsLogged(true) : setIsLogged(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    handleLogIn(token)
  }, [])

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='App'>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>Shopping Cart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {isLogged ? (
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
          ) : (
            <Link to='login'>
              <button className='btn btn-success'>Login</button>
            </Link>
          )}
        </Collapse>
      </Navbar>
      <div className='container'>
        <Routes>
          <Route
            path='create-product'
            element={isLogged ? <ProductForm /> : <Login />}
          />
          <Route
            path='products-list'
            element={<ProductsList addToCart={addToCart} isLogged={isLogged} />}
          />
          <Route
            path='shopping-cart'
            element={<ShoppingCart shoppingCart={shoppingCart} />}
          />
          <Route path='sales-list' element={<h1>Lista de ventas</h1>} />
          <Route path='login' element={<Login handleLogIn={handleLogIn} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
