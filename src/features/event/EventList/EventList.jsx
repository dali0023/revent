import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <>
        {events.map((event,index) => (
          <EventListItem
            key={event.id}
            selectEvent={selectEvent}
            event={event}
            deleteEvent={deleteEvent}
            personIndex={index}
          />
        ))}
      </>
    );
  }
}

export default EventList;
