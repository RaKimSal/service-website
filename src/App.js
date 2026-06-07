import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
<<<<<<< HEAD
import OurService from "./components/OurService";
import Booking from "./components/Booking";
import BookNow from "./components/BookNow";
import ContactUs from "./components/ContactUs";
import ContactConfirmation from "./components/ContactConfirmation";
import Confirmation from "./components/Confirmation";

import "./App.css";

function AppContent() {
  const navigate = useNavigate();
=======
import OurServices from "./components/OurServices";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] =
    useState("home");
>>>>>>> 8e829a9 (Updating the footer)

  const [isBookingOpen, setIsBookingOpen] =
    useState(false);

  const [isContactOpen, setIsContactOpen] =
    useState(false);

  const [
    isContactConfirmationOpen,
    setIsContactConfirmationOpen,
  ] = useState(false);

  const [isConfirmationOpen, setIsConfirmationOpen] =
    useState(false);

  const [confirmedBooking, setConfirmedBooking] =
    useState(null);

  const [confirmedContact, setConfirmedContact] =
    useState(null);

  const openBooking = () => {
    setIsContactOpen(false);
    setIsContactConfirmationOpen(false);
    setIsConfirmationOpen(false);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const openContact = () => {
    setIsBookingOpen(false);
    setIsConfirmationOpen(false);
    setIsContactConfirmationOpen(false);
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  const handleConfirmBooking = (bookingDetails) => {
    setConfirmedBooking(bookingDetails);
    setIsBookingOpen(false);
    setIsConfirmationOpen(true);
  };

  const handleSendMessage = (contactDetails) => {
    setConfirmedContact(contactDetails);
    setIsContactOpen(false);
    setIsContactConfirmationOpen(true);
  };

  const closeContactConfirmation = () => {
    setIsContactConfirmationOpen(false);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const showHomePage = () => {
    setCurrentPage("home");
  };

  const showServicesPage = () => {
    setCurrentPage("services");
  };

  const handleBackHome = () => {
    setIsConfirmationOpen(false);
<<<<<<< HEAD
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const handleContactBackHome = () => {
    setIsContactConfirmationOpen(false);
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
=======
    setCurrentPage("home");
>>>>>>> 8e829a9 (Updating the footer)
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar
        onBookNowClick={openBooking}
        onContactUsClick={openContact}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner
                onBookNowClick={openBooking}
              />

              <Summary />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <OurService
              onBookNowClick={openBooking}
            />
          }
        />

        <Route
          path="/booking"
          element={
            <Booking
              onConfirm={handleConfirmBooking}
            />
          }
        />
      </Routes>
=======
      {currentPage === "home" ? (
        <>
          <Navbar
            onBookNowClick={openBooking}
            onHomeClick={showHomePage}
            onServicesClick={showServicesPage}
          />

          <Banner onBookNowClick={openBooking} />

          <Summary />
        </>
      ) : (
        <OurServices
          onBookNowClick={openBooking}
          onHomeClick={showHomePage}
          onServicesClick={showServicesPage}
        />
      )}
>>>>>>> 8e829a9 (Updating the footer)

      <BookNow
        isOpen={isBookingOpen}
        onClose={closeBooking}
        onConfirm={handleConfirmBooking}
      />

      <ContactUs
        isOpen={isContactOpen}
        onClose={closeContact}
        onSend={handleSendMessage}
      />

      <ContactConfirmation
        isOpen={isContactConfirmationOpen}
        contact={confirmedContact}
        onClose={closeContactConfirmation}
        onBackHome={handleContactBackHome}
      />

      <Confirmation
        isOpen={isConfirmationOpen}
        booking={confirmedBooking}
        onClose={closeConfirmation}
        onBackHome={handleBackHome}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;