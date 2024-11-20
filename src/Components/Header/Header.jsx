import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Header.css'
import { useNavigate } from 'react-router-dom'
function Header({style}) {
  const navigate=useNavigate()
  return (
    <div>
 

    <Navbar expand="lg" className=" " style={{backgroundColor:" rgba(0, 0, 0, 0.1)",boxShadow:"1px 1px 5px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(1px)",borderBottom:"1px solid grey"}}>
      <Container className='d-flex justify-content-center gap-4'>
        <Navbar.Brand style={style} className='nav  fw-bolder' onClick={()=>navigate("/")}>Home</Navbar.Brand>
        <Navbar.Brand style={style} className='nav  fw-bolder'  onClick={()=>navigate("/about")}>About</Navbar.Brand>
        <Navbar.Brand style={style} className='nav  fw-bolder'  onClick={()=>navigate("/submission")}>Grievance</Navbar.Brand>
      </Container>
    </Navbar>

 
    </div>
  )
}

export default Header