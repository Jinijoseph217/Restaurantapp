import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://th.bing.com/th/id/OIP.kvNVSfVV-hw6euuuHeVgoQHaH2?w=182&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          width="80"
          height="80"
          className="d-inline-block align-center"
        />{' '}
       Mr.Bolat
      </Navbar.Brand>
    </Container>
  </Navbar>
</div>
  )
}

export default Header