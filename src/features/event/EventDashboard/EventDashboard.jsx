import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import classes from "./EventDashboard.css";
import eventsFromDashboard from "./Data";
class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isEventFromOpen: false
  };
  handleIsOpenToggle = () => {
    const toggleValue = this.state.isEventFromOpen;
    this.setState({
      isEventFromOpen: !toggleValue
    });
  };
  render() {
    return (
      <Container className={classes.event_dashboard}>
        <Row>
          <Col md={{ span: 6, offset: 1 }}>
            <EventList events={this.state.events} />
          </Col>
          <Col md={{ span: 4 }}>
            <Button
              onClick={this.handleIsOpenToggle}
              variant='success'
              size='sm'
              style={{ marginBottom: "10px" }}
            >
              Create Event
            </Button>
            {this.state.isEventFromOpen && (
              <EventForm cancelFrom={this.handleIsOpenToggle} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventDashboard;
