import React, { Component } from "react";
import { Card, Nav, Button, Image } from "react-bootstrap";
import { FaClock, FaMapMarker } from "react-icons/fa";
import classes from "./EventListItem.css";
import EventListAttendence from "./EventListAttendence";
class EventListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent} = this.props;
    return (
      <>
        <Card style={{ marginBottom: "1rem" }}>
          <Card.Header style={{ backgroundColor: "white" }}>
            <Nav as='ul'>
              <Nav.Item as='li'>
                <Nav.Link>
                  <Image
                    src={event.hostPhotoURL}
                    roundedCircle
                    style={{ height: "3.8rem", width: "3.8rem" }}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <h6>{event.title}</h6>
                <p>hosted by {event.hostedBy} </p>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Header className={classes.event_icon}>
            <span>
              <FaClock /> {event.date} | <FaMapMarker /> {event.venue}
            </span>
          </Card.Header>

          <Card.Body
            style={{ backgroundColor: "rgb(243, 246, 249)", padding: 0 }}
          >
            <Nav defaultActiveKey='/home' as='ul'>
              {event.attendence &&
                event.attendence.map(attend => (
                  <EventListAttendence key={attend.id} attend={attend} />
                ))}
            </Nav>
          </Card.Body>
          <Card.Footer className={classes.event_item_footer}>
            <span>{event.description}</span>
            <Button
              onClick={() => selectEvent(event)}
              variant='info'
              size='sm'
              className={classes.event_item_button}
            >
              View
            </Button>
            <Button
              onClick={() => deleteEvent(event.id)}
              variant='danger'
              size='sm'
              className={classes.event_item_button}
            >
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default EventListItem;
