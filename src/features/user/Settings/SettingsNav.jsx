import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <>
      <Nav className='flex-column' style={{backgroundColor:"white",marginTop:"40px", textAlign:"center"}}>
        <Nav.Link style={{backgroundColor:"#545254", color:"white", border:"1px solid #ececec"}} >Profile</Nav.Link>
        <Nav.Link as={NavLink} to='/setting/basics' style={{border:"1px solid #ececec"}} >Basics</Nav.Link>
        <Nav.Link as={NavLink} to='/setting/about' style={{border:"1px solid #ececec"}} >About Me</Nav.Link>
        <Nav.Link as={NavLink} to='/setting/photos' style={{border:"1px solid #ececec"}} >My Photos</Nav.Link>
        
      </Nav>
      <Nav className='flex-column' style={{backgroundColor:"white",marginTop:"15px", textAlign:"center"}}>
        <Nav.Link as={NavLink} to="/" style={{backgroundColor:"#545254", color:"white", border:"1px solid #ececec"}} >Settings</Nav.Link>
        <Nav.Link as={NavLink} to="/" style={{border:"1px solid #ececec"}} >My Account</Nav.Link>
        
      </Nav>
    </>
  );
};

export default SettingsNav;
