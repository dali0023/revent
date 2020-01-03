import React, { Component } from "react";
import { Card, Nav, Button, Image, ListGroup } from "react-bootstrap";
import { FaClock, FaMapMarker } from "react-icons/fa";
import classes from "./EventListItem.css";
import EventListAttendence from "./EventListAttendence";
class EventListItem extends Component {
  render() {
    // const {eventDetails}=this.props
    return (
      <>
        <Card style={{ marginBottom: "1rem" }}>
          <Card.Header style={{ backgroundColor: "white" }}>
            <Nav as='ul'>
              <Nav.Item as='li'>
                <Nav.Link>
                  <Image
                    src={this.props.event.hostPhotoURL}
                    roundedCircle
                    style={{ height: "3.8rem", width: "3.8rem" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <h6>{this.props.event.title}</h6>
                <p>hosted by {this.props.event.hostedBy} </p>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Header className={classes.event_icon}>
            <span>
              <FaClock /> {this.props.event.date} | <FaMapMarker />{" "}
              {this.props.event.venue}
            </span>
          </Card.Header>

          <Card.Body
            style={{ backgroundColor: "rgb(243, 246, 249)", padding: 0 }}
          >
            <Nav defaultActiveKey='/home' as='ul'>
              {this.props.event.attendence.map(attend => (
                <EventListAttendence key={attend.id} attend={attend}/>
              ))}
            </Nav>
          </Card.Body>
          <Card.Footer className={classes.event_item_footer}>
            <span>{this.props.event.description}</span>
            <Button
              variant='info'
              size='sm'
              className={classes.event_item_button}
            >
              View
            </Button>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default EventListItem;
