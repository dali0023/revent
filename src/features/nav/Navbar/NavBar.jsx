import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
class NavBar extends Component {
  state = {
    authenticate: false
  };
  SignInHandler = () => {
    this.setState({
      authenticate: true
    });
  };
  SignOutHandler = () => {
    this.setState({
      authenticate: false
     
    });
    this.props.history.push('/')
  };
  render() {
    const { authenticate } = this.state;
    return (
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Navbar.Brand as={Link} to='/'>
          Revents
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to='/events' exact name='Events'>
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to='/people' name='People'>
              people
            </Nav.Link>
            <Nav.Link as={NavLink} to='/create-event'>
              Create Event
            </Nav.Link>
          </Nav>
          {authenticate ? <SignedInMenu SignOut={this.SignOutHandler}/> : <SignedOutMenu SignIn={this.SignInHandler}/>}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default  withRouter(NavBar);
