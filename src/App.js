import React from "react";
import classes from './App.css';
import Navbar from "./features/nav/Navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "./features/event/EventDetailed/EventDetailedPage";
import HomePage from "./features/home/HomePage";
import PeopleDashboard from "./features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./features/user/Settings/SettingsDashboard";
import EventForm from "./features/event/EventForm/EventForm";
import TestComponent from "./features/testArea/TestComponent";
function App() {
  return (
    <>
      <Route exact path='/' component={props => <HomePage {...props} />} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Navbar />
            <Switch>
              <Route
                path='/events'
                component={props => <EventDashboard {...props} />}
              />
              <Route
                path='/events/:id'
                component={props => <EventDetailedPage {...props} />}
              />
              <Route
                path='/people'
                component={props => <PeopleDashboard {...props} />}
              />
              <Route
                path='/people/:id'
                component={props => <UserDetailedPage {...props} />}
              />
              <Route
                path='/setting'
                component={props => <SettingsDashboard {...props} />}
              />
              <Route
                path='/test'
                component={props => <TestComponent {...props} />}
              />
              <Route
                path='/create-event'
                component={props => <EventForm {...props} />}
              />
              
            </Switch>
          </>
        )}
      />
    </>
  );
}

export default App;
