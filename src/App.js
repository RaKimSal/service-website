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
import OurService from "./components/OurService";
import BookNow from "./components/BookNow";
import Confirmation from "./components/Confirmation";

import "./App.css";

function AppContent() {
  const navigate = useNavigate();

  const [isBookingOpen, setIsBookingOpen] =
    useState(false);

  const [isConfirmationOpen, setIsConfirmationOpen] =
    useState(false);

  const [confirmedBooking, setConfirmedBooking] =
    useState(null);

  const openBooking = () => {
    setIsConfirmationOpen(false);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const handleConfirmBooking = (bookingDetails) => {
    setConfirmedBooking(bookingDetails);
    setIsBookingOpen(false);
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleBackHome = () => {
    setIsConfirmationOpen(false);
    navigate("/");

    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="App">
      <Navbar onBookNowClick={openBooking} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner onBookNowClick={openBooking} />
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
      </Routes>

      <BookNow
        isOpen={isBookingOpen}
        onClose={closeBooking}
        onConfirm={handleConfirmBooking}
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