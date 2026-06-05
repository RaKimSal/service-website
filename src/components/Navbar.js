import React from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { Calendar3 } from "react-bootstrap-icons";

const Navbar = ({ onBookNowClick }) => {
  const handleBookNowClick = () => {
    if (typeof onBookNowClick === "function") {
      onBookNowClick();
    }
  };

  return (
    <header className="navbar-wrapper">
      <Container fluid>
        <BootstrapNavbar expand="lg" className="custom-navbar">
          <BootstrapNavbar.Brand
            href="#home"
            className="navbar-brand-text"
          >
            IVY’S Cleaning Service
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle
            aria-controls="main-navbar"
            className="navbar-toggle"
          />

          <BootstrapNavbar.Collapse id="main-navbar">
            <Nav className="ms-auto navbar-links">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#services">
                Our Services
              </Nav.Link>

              <Nav.Link href="#booking">
                Booking
              </Nav.Link>

              <Nav.Link href="#contact">
                Contact
              </Nav.Link>

              <button
                type="button"
                className="navbar-book-button"
                onClick={handleBookNowClick}
              >
                <Calendar3 className="navbar-book-icon" />
                <span>Book Now</span>
              </button>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </Container>
    </header>
  );
};

export default Navbar;