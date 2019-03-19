/*  
  App.jsx

  Container fof the app

*/
import React, { Component, PropTypes } from "react";

import { Row, Col, Jumbotron, Button } from "react-bootstrap";
export default class App extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Row>
        <Col xs={6} md={12}>
          <Jumbotron>{this.props.children}</Jumbotron>
        </Col>
      </Row>
    );
  }
}
