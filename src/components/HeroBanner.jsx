import React from "react";
import { Button, Row, Col } from "react-bootstrap";
// import IntroImage from "../images/image-intro-mobile.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <Row>
        <Col
          sm={12}
          md={6}
          className="hero-copy d-flex flex-column align-self-center"
        >
          <hr className="hr-custom" />
          <div className="hero-heading">Humanizing your insurance.</div>
          <div className="heading-body">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </div>
          <Button className="btn-heading">VIEW PLANS</Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeroBanner;
