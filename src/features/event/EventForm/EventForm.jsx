import React, { Component } from "react";
import { Card, Button, Form, ButtonToolbar } from "react-bootstrap";
class EventForm extends Component {
  render() {
    return (
      <>
        <Card body>
          <Form>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Event Title</Form.Label>
              <Form.Control size="sm" type='text' placeholder='Event Title' />
            </Form.Group>
            <Form.Group controlId='formBasicDate'>
              <Form.Label>Event Date</Form.Label>
              <Form.Control size="sm" type='date' placeholder='Event date' />
            </Form.Group>
            <Form.Group controlId='formBasicCity'>
              <Form.Label>Event city</Form.Label>
              <Form.Control size="sm" type='text' placeholder='city' />
            </Form.Group>
            <Form.Group controlId='formBasicVanue'>
              <Form.Label>Event Vanue</Form.Label>
              <Form.Control size="sm" type='text' placeholder='Event Vanue' />
            </Form.Group>
            <Form.Group controlId='formBasicVanue'>
              <Form.Label>Hosted by</Form.Label>
              <Form.Control size="sm" type='text' placeholder='Hosted by' />
            </Form.Group>

            <ButtonToolbar>
              <Button variant='success' size='sm' style={{marginRight:"10px"}}>
                Small button
              </Button>
              <Button onClick={this.props.cancelFrom} variant='danger' size='sm'>
                Cancel
              </Button>
            </ButtonToolbar>
          </Form>
        </Card>
      </>
    );
  }
}

export default EventForm;
