import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ApINav() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <Link className='fs-5 text-success fw-bold' to={"/Api-Integration"}>Joke Generator</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link className='fs-5 text-success fw-bold' to={"/Api-Integration/fact-generator"}>Fact generator</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>

  )
}

export default ApINav