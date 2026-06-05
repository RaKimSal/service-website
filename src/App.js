import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BookNow from "./components/BookNow";
import Confirmation from "./components/Confirmation";
import Summary from "./components/Summary";

import "./App.css";

function App() {
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

      <Banner onBookNowClick={openBooking} />

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
      <Summary />
    </div>
  );
}

export default App;