import React from "react";
import { Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignedInMenu = ({SignOut}) => {
  return (
    <Nav>
      <Nav.Item style={{ float: "left" }}>
        <DropdownButton
          id='dropdown-item-button'
          title={
            <span>
              <Image
                as='a'
                src='https://randomuser.me/api/portraits/med/men/76.jpg'
                roundedCircle
                style={{ height: "32px", width: "32px" }}
              />
              User Name
            </span>
          }
        >
          <Dropdown.Item as='button'>Create Event</Dropdown.Item>
          <Dropdown.Item as='button'>My Events</Dropdown.Item>
          <Dropdown.Item as='button'>My Network</Dropdown.Item>
          <Dropdown.Item as='button'>My Profile</Dropdown.Item>
          <Dropdown.Item as={Link} to='/setting'>Settings</Dropdown.Item>
          <Dropdown.Item as='button' onClick={SignOut}>Sign Out</Dropdown.Item>
        </DropdownButton>
      </Nav.Item>
    </Nav>
  );
};

export default SignedInMenu;
