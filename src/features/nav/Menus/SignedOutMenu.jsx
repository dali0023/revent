import React from "react";
import { Nav, Button } from "react-bootstrap";
const SignedOutMenu = ({ SignIn }) => {
  return (
    <Nav>
      <Nav.Item href='#deets'>
          
        <Button
          onClick={SignIn}
          variant='primary'
          size='sm'
          style={{ border: "2px solid white" }}
        >
          Login
        </Button>
        <Button
          variant='primary'
          size='sm'
          style={{ marginLeft: "5px", border: "2px solid white" }}
        >
          Register
        </Button>
      </Nav.Item>
    </Nav>
  );
};

export default SignedOutMenu;
