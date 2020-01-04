import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  InputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  FormSubmitHandler = event => {
    event.preventDefault();
    this.props.CreateEvent(this.state);
  };
  render() {
    return (
      <>
        <Card body>
          <Form onSubmit={this.FormSubmitHandler} autoComplete='off'>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                onChange={this.InputChangeHandler}
                name='title'
                value={this.state.title}
                size='sm'
                type='text'
                placeholder='Event Title'
              />
            </Form.Group>
            <Form.Group controlId='formBasicDate'>
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                onChange={this.InputChangeHandler}
                name='date'
                value={this.state.date}
                size='sm'
                type='date'
                placeholder='Event date'
              />
            </Form.Group>
            <Form.Group controlId='formBasicCity'>
              <Form.Label>Event city</Form.Label>
              <Form.Control
                onChange={this.InputChangeHandler}
                name='city'
                value={this.state.city}
                size='sm'
                type='text'
                placeholder='city'
              />
            </Form.Group>
            <Form.Group controlId='formBasicVanue'>
              <Form.Label>Event Vanue</Form.Label>
              <Form.Control
                onChange={this.InputChangeHandler}
                name='venue'
                value={this.state.venue}
                size='sm'
                type='text'
                placeholder='Event Vanue'
              />
            </Form.Group>
            <Form.Group controlId='formBasicHostedby'>
              <Form.Label>Hosted by</Form.Label>
              <Form.Control
                onChange={this.InputChangeHandler}
                name='hostedBy'
                value={this.state.hostedBy}
                size='sm'
                type='text'
                placeholder='Hosted by'
              />
            </Form.Group>

            <Button
              variant='success'
              size='sm'
              style={{ marginRight: "10px" }}
              type='submit'
            >
              Small button
            </Button>
            <Button onClick={this.props.cancelFrom} variant='danger' size='sm'>
              Cancel
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}

export default EventForm;
