import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const WhatWeWork = () => {
  return (
    <div className="pb-5 mb-3">
      <div className="w-75 m-auto jumbo-container">
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center">
            <div className="jumbo-heading what-we-work">
              Find out more about how we work
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center what-we-work-btn"
          >
            <Button className="btn-heading">HOW WE WORK</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhatWeWork;
