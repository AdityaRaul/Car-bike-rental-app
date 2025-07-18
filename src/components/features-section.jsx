import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";

const FeaturesSection = () => {
  return (
    <div id="features-section" className="bg-light text-light py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h1 className="fs-1 fw-bold text-uppercase">Why Choose <span className="text-warning">Us</span></h1>
            <p className="fs-5">Experience convenience, safety, and unbeatable value with our rental service.</p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col xs={12} md={4} className="mb-4">
            <AiOutlineSafety size="2.5em" color="#ffc107" />
            <h4 className="mt-3 fw-semibold">Safe & Secure Rides</h4>
            <p className="text-dark">
              All vehicles are regularly serviced and sanitized to ensure your safety on every ride.
            </p>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <HiOutlineStatusOnline size="2.5em" color="#0dcaf0" />
            <h4 className="mt-3 fw-semibold">Instant Online Booking</h4>
            <p className="text-dark">
              Book your preferred vehicle anytime, from anywhere — fast, easy, and 100% digital.
            </p>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <BiSolidOffer size="2.5em" color="#28a745" />
            <h4 className="mt-3 fw-semibold">Exclusive Offers</h4>
            <p className="text-dark">
              Enjoy exciting seasonal discounts and the best prices on all your rentals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;
