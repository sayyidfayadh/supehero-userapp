import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Header.css'
function Header({style}) {
  return (
    <div>
 

    <Navbar expand="lg" className=" " style={{backgroundColor:" rgba(0, 0, 0, 0.1)",boxShadow:"1px 1px 5px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(1px)",borderBottom:"1px solid grey"}}>
      <Container className='d-flex justify-content-center gap-4'>
        <Navbar.Brand style={style} className='nav  fw-bolder' href="/">Home</Navbar.Brand>
        <Navbar.Brand style={style} className='nav  fw-bolder' href="/about">About</Navbar.Brand>
        <Navbar.Brand style={style} className='nav  fw-bolder' href="/submission">Grievance</Navbar.Brand>
      </Container>
    </Navbar>

 
    </div>
  )
}

export default Header