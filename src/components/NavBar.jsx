import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 navBar">
        <Container>
            <Navbar.Brand className='w-25 fw-bold fs-2' href="/">Testing App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as="div" >
                        <Link to={"/"}>Home</Link>
                    </Nav.Link>
                    <Nav.Link as="div" >
                        <Link to={"/reduxHome"}>Redux</Link>
                    </Nav.Link>
                    <NavDropdown title="React Hooks" id="basic-nav-dropdown">
                        <NavDropdown.Item  className='px-4' >
                            <Link  to={"/reactHome"}>UseState</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='px-4'> 
                            <Link to={"/reactHome/useContext"}>useContext</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='px-4'>
                            <Link to={"/reactHome/useEffect"}>useEffect</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='px-4'>
                            <Link to={"/reactHome/useRef"}>useRef</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='px-4'>
                            <Link to={"/reactHome/useReducer"}>useReducer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className='px-4'>
                            <Link to={"/reactHome"}>React Hooks Home</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  as="div" >
                        <Link to={"/materialUi"}>Material UI</Link>
                    </Nav.Link>
                    <Nav.Link  as="div" >
                        <Link to={"/Api-Integration"}>Api-Integration</Link>
                    </Nav.Link>
                    <Nav.Link as="div" >
                        <Link to={"/firebase"}>Firebase</Link>
                    </Nav.Link>
                   <Nav.Link as="div" >
                        <Link to={"/socket"}>Socket.io</Link>
                    </Nav.Link> 
                   <Nav.Link as="div" >
                        <Link to={"/chart3"}>Chart 3 Js</Link>
                    </Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar