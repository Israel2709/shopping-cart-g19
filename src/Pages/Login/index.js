import { useNavigate } from 'react-router-dom'
const Login = ({ handleLogIn }) => {
  const navigate = useNavigate()
  const loginHandler = () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' //await fetch(loginEndPoint,{method:post....})
    localStorage.setItem('token', token)
    setTimeout(function () {
      handleLogIn(token)
      navigate('/')
    }, 3000)
  }
  return (
    <form action='' className='bg-dark text-white p-3 border rounded'>
      <div className='form-group'>
        <label htmlFor=''>correo</label>
        <input type='email' className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>contraseña</label>
        <input type='password' className='form-control' />
      </div>
      <button type='button' className='btn btn-primary' onClick={loginHandler}>
        Login
      </button>
    </form>
  )
}

export default Login
