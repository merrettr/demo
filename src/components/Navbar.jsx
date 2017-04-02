import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export default ({ onRoute }) =>
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a>Demo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} onClick={() => onRoute('/')}>Search</NavItem>
          <NavItem eventKey={2} onClick={() => onRoute('/admin')}>Admin</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>;