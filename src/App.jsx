import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main.jsx'
import Detail from './pages/Detail.jsx'

function App() {

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
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<>cart</>} />
        <Route path='/wishlist' element={<>wishlist</>} />
        <Route path='/about' element={<>about</>} />

        <Route path='*' element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
