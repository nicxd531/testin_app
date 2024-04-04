import { Box } from '@mui/material';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ReactHomeNav() {
  // this component contains imported bootstrap component
  return (
    <Box sx={{ width: "100%" }}>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-4">
            <Link className='fs-5 text-success fw-bold' to={"/reactHome"}>useState</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link className='fs-5 text-success fw-bold' to={"/reactHome/useContext"}>useContext</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link className='fs-5 text-success fw-bold' to={"/reactHome/useEffect"}>useEffect</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to={"/reactHome/useRef"} eventKey="link-3">
            <Link className='fs-5 text-success fw-bold' to={"/reactHome/useRef"}>useRef</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" to={"/reactHome/useReducer"}>
            <Link className='fs-5 text-success fw-bold' to={"/reactHome/useReducer"}>useReducer</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Box>
  )
}

export default ReactHomeNav