import React from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { Calendar3 } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Navbar = ({
  onBookNowClick,
<<<<<<< HEAD
  onContactUsClick,
=======
  onHomeClick,
  onServicesClick,
>>>>>>> 8e829a9 (Updating the footer)
}) => {
  const handleBookNowClick = () => {
    if (typeof onBookNowClick === "function") {
      onBookNowClick();
    }
  };

<<<<<<< HEAD
  const handleContactUsClick = (event) => {
    event.preventDefault();

    if (typeof onContactUsClick === "function") {
      onContactUsClick();
=======
  const handleHomeClick = (event) => {
    event.preventDefault();

    if (typeof onHomeClick === "function") {
      onHomeClick();
    }
  };

  const handleServicesClick = (event) => {
    event.preventDefault();

    if (typeof onServicesClick === "function") {
      onServicesClick();
>>>>>>> 8e829a9 (Updating the footer)
    }
  };

  return (
    <header className="navbar-wrapper">
      <Container fluid>
        <BootstrapNavbar
          expand="lg"
          className="custom-navbar"
        >
          <BootstrapNavbar.Brand
            as={NavLink}
            to="/"
            className="navbar-brand-text"
            onClick={handleHomeClick}
          >
            IVY’S Cleaning Service
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle
            aria-controls="main-navbar"
            className="navbar-toggle"
          />

          <BootstrapNavbar.Collapse id="main-navbar">
            <Nav className="ms-auto navbar-links">
<<<<<<< HEAD
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/services">
=======
              <Nav.Link
                href="#home"
                onClick={handleHomeClick}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#services"
                onClick={handleServicesClick}
              >
>>>>>>> 8e829a9 (Updating the footer)
                Our Services
              </Nav.Link>

              <Nav.Link as={NavLink} to="/booking">
                Booking
              </Nav.Link>

              <Nav.Link
                href="#contact"
                onClick={handleContactUsClick}
              >
                Contact Us
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