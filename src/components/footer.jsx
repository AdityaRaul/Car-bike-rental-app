import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoLocation } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {
        !location.pathname.includes("admin") &&
        <footer id="footer" className="secondary-bg-color">
          <Container className="pt-4 pb-3">
            <Row className="text-center mb-4">
              <Col>
                <h1 className="fs-2 quinary-color fw-bold">DriveOn Rentals</h1>
              </Col>
            </Row>

            <Row className="text-white">
              <Col md={3} sm={12} className="mb-3">
                <h5 className="fw-semibold">Subscribe to Our Newsletter</h5>
                <p>Get exclusive deals, latest vehicle updates, and more directly to your inbox.</p>
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
                <Button variant="primary" className="w-100">Subscribe</Button>
              </Col>

              <Col md={3} sm={12} className="mb-3">
                <h5 className="fw-semibold">Information</h5>
                <ul className="list-unstyled">
                  <li>Flexible Booking Options</li>
                  <li>Verified Vehicles</li>
                  <li>Pan-India Coverage</li>
                  <li>24x7 Customer Support</li>
                </ul>
              </Col>

              <Col md={3} sm={12} className="mb-3">
                <h5 className="fw-semibold">Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="#" className="text-white text-decoration-none">Vehicles</a></li>
                  <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                  <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                </ul>
              </Col>

              <Col md={3} sm={12} className="mb-3">
                <h5 className="fw-semibold">Contact Us</h5>
                <p className="m-0">
                  <IoLocation className="me-2" />
                  <a href="https://goo.gl/maps/abc123" target="_blank" rel="noopener noreferrer" className="text-white">Bhubaneswar, Odisha</a>
                </p>
                <p className="m-0">
                  <BsTelephoneFill className="me-2" />
                  <a href="tel:+919876543210" className="text-white">+91 98795 43210</a>
                </p>
                <p className="m-0">
                  <GrMail className="me-2" />
                  <a href="mailto:support@driveonrentals.in" className="text-white">support@driveonrentals.in</a>
                </p>

                <div className="social-icon mt-2">
                  <ul className="list-inline d-flex gap-2">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BiLogoFacebook size={24} color="#fff" /></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter size={24} color="#fff" /></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedin size={24} color="#fff" /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><AiFillInstagram size={24} color="#fff" /></a></li>
                  </ul>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="text-white text-center fs-6 mt-3 mb-0">
                  © {new Date().getFullYear()} All Rights Reserved. Developed & Designed by <a href="https://github.com/adityaraul" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold">Aditya Raul</a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      }
    </>
  );
};

export default Footer;
