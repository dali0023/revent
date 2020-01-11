import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SettingsNav from "./SettingsNav";
import { Route, Redirect, Switch } from "react-router-dom";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";
import AboutPage from "./AboutPage";
const SettingsDashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Switch>
            <Redirect exact from='/setting' to='/setting/basics' />
            <Route path='/setting/basics' component={BasicPage} />
            <Route
              path='/setting/photos'
              component={props => <PhotosPage {...props} />}
            />
            <Route
              path='/setting/about'
              component={props => <AboutPage {...props} />}
            />
          </Switch>
        </Col>
        <Col md={3}>
          <SettingsNav />
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsDashboard;
