import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main.jsx'
import Detail from './pages/Detail.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx';
import { useEffect, useState } from 'react';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {

  let [count, setCount] = useState(0)
  let [userIn, setUserIn] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    let user = sessionStorage.getItem('loggedInUser')
    if (user) {
      setUserIn(true)
    }
  }, [])

  function logout() {
    sessionStorage.removeItem('loggedInUser')
    setUserIn(false)
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/wishlist') }}>Wishlist</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
          </Nav>
          <Nav>
            {
              userIn ? (
                <Nav.Link onClick={() => { logout() }}>Logout</Nav.Link>
              ) : (
                <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
              )
            }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main count={count} setCount={setCount} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/about' element={<>리액트로 만듦</>} />

        <Route path='/login' element={<Login setUserIn={setUserIn} />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='*' element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
