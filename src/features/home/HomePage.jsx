import React from "react";
import { Button,Container, Row,Col } from "react-bootstrap";
import classes from '../home/HomePage.css'
import { FaArrowRight } from 'react-icons/fa';
const HomePage = ({history}) => {
  return (
    <Container className={classes.mainArea} fluid={true}>
      <Row style={{margin:0}}>
        <Col md={12}>
          <div className={classes.jumbo}>
            <h1>Revents</h1>
            <p>
              <Button onClick={()=>history.push('/events')} variant='light'>Get Started <FaArrowRight /></Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
