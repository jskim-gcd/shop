import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main.jsx'
import Detail from './pages/Detail.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx';
import { useState } from 'react';

function App() {

  let [count, setCount] = useState(0)

  let navigate = useNavigate()

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
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main count={count} setCount={setCount}/>} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/about' element={<>리액트로 만듦</>} />

        <Route path='*' element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
