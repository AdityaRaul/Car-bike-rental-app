import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'

const AboutSection = () => {
  return (
    <div id="about-section">
      <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
            <div className="image_iman">
              <img src={AboutImage} className="about_img" alt="About Us" />
            </div>
          </Col>
          <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
                Welcome to <strong>DriveOn Rentals</strong> – your trusted destination for reliable and affordable car and bike rentals across India. Whether you're planning a weekend trip, commuting daily, or exploring a new city, we’ve got the right vehicle for you.
                <br /><br />
                With a user-friendly interface, flexible booking options, and a growing fleet of modern vehicles, we aim to make your rental experience fast, easy, and hassle-free. Our commitment to safety, transparency, and customer satisfaction sets us apart.
                <br /><br />
                Join thousands of happy customers and hit the road with confidence – anytime, anywhere.
              </p>
              <div className="mt-3">
                <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
