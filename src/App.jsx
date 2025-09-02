import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => {}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>home</Nav.Link>
            <Nav.Link>cart</Nav.Link>
            <Nav.Link>wishlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App
