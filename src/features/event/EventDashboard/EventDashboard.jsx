import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import classes from "./EventDashboard.css";
import eventsFromDashboard from "./Data";
import cuid from "cuid";
class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isEventFromOpen: false,
    selectedEvent: null
  };

  // Show Form
  CreateFormOpenHandler = () => {
    this.setState({
      isEventFromOpen: true,
      selectedEvent: null
    });
  };

  // hide Form
  FormCancelHandler = () => {
    this.setState({
      isEventFromOpen: false
    });
  };

  // View Data/ Select Data
  selectEventHandler = event => {
    this.setState({
      selectedEvent: event,
      isEventFromOpen: true
    });
  };

  // Save Form Data
  CreateEventHandler = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL =
      "https://randomuser.me/api/portraits/med/men/76.jpg";
    this.setState({
      events: [...this.state.events, newEvent],
      isEventFromOpen: false
    });
  };

  //Update data
  updateEventHandler = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isEventFromOpen: false,
      selectedEvent: null
    }));
  };

  deleteEventHandler = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };

  render() {
    const { events, isEventFromOpen, selectedEvent } = this.state;
    return (
      <Container className={classes.event_dashboard}>
        <Row>
          <Col md={{ span: 6, offset: 1 }}>
            <EventList 
            events={events} 
            selectEvent={this.selectEventHandler} 
            deleteEvent={this.deleteEventHandler}
            />
          </Col>
          <Col md={{ span: 4 }}>
            <Button
              onClick={this.CreateFormOpenHandler}
              variant='success'
              size='sm'
              style={{ marginBottom: "10px" }}
            >
              Create Event
            </Button>
            {isEventFromOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                selectedEvent={selectedEvent}
                CreateEvent={this.CreateEventHandler}
                cancelFrom={this.FormCancelHandler}
                updateEvent={this.updateEventHandler}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventDashboard;
