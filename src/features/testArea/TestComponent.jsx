import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testAction";
import {Button} from 'react-bootstrap'

//I want these state data
const mapState = (state) => {
  return {
    data: state.test.data
  };
};

// Action means I want these action functions
const action = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>test</h1>
        <h3>My Age is : {data}</h3>
        <Button onClick={incrementCounter} variant='primary'>Primary</Button>
        <Button onClick={decrementCounter} variant='danger'>Secondary</Button>
      </div>
    );
  }
}

// connect action and state
export default connect(mapState, action)(TestComponent);
