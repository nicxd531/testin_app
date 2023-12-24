import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 zi-1">
        <Container>
            <Navbar.Brand className='w-25 fw-bold fs-2' href="/">Testing App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                     <Nav.Link >
                        <Link to={"/"}>Home</Link>
                    </Nav.Link>
                <Nav.Link >
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
                <Nav.Link >
                    <Link to={"/materialUi"}>Material UI</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to={"/Api-Integration"}>Api-Integration</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar