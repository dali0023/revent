import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Revents</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#features'>Events</Nav.Link>
            <Nav.Link href='#pricing'>Create Event</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Nav.Link href='#deets'>Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
