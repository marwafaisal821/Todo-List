
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <>

<footer className="bg-dark text-light py-3">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>🚀 Our Website</h5>
            <p>Everything you need in one place! Stay connected for more updates.</p>
          </Col>
          <Col md={4}>
            <h5>📍 Contact Us</h5>
            <p>Email: contact@example.com</p>
          </Col>
          <Col md={4}>
            <h5>🌍 Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-light mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center">All rights reserved &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>

            {/* <footer className="bg-body-tertiary text-center text-lg-start">
               
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    © 2020 Copyright:
                    <a className="text-body" href="https://iti..gov.eg/">ITI.com</a>
                </div>
              
            </footer> */}
        </>
    )
}