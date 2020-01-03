import React, { Component } from "react";
import {Nav, Image} from 'react-bootstrap'
class EventListAttendence extends Component {
  render() {
    return (
      <Nav.Item as="li">
        <Nav.Link href='/home' style={{padding:".2rem .2rem"}}>
          <Image as='a'
            src={this.props.attend.photoURL}
            roundedCircle
            style={{ height: "32px", width: "32px" }}
          />
        </Nav.Link>
      </Nav.Item>
    );
  }
}

export default EventListAttendence;
