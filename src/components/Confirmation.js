import React from "react";

const Confirmation = ({
  isOpen,
  booking,
  onClose,
  onBackHome,
}) => {
  if (!isOpen || !booking) {
    return null;
  }

  return (
    <div
      className="booking-modal-overlay"
      onClick={onClose}
    >
      <div
        className="booking-modal confirmation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="booking-close-button"
          onClick={onClose}
          aria-label="Close confirmation"
        >
          ×
        </button>

        <div className="booking-heading confirmation-heading">
          <h2 id="confirmation-title">
            Booking Confirmed!
          </h2>

          <span
            className="booking-sparkle"
            aria-hidden="true"
          >
            ✦
          </span>
        </div>

        <div
          className="confirmation-check"
          aria-hidden="true"
        >
          ✓
        </div>

        <p className="confirmation-message">
          Thank you for booking with IVY’S Cleaning
          Service. Your appointment has been successfully
          submitted.
        </p>

        <p className="confirmation-email-message">
          A booking confirmation has been sent to{" "}
          <strong>{booking.email}</strong>.
        </p>

        <div className="confirmation-details">
          <div className="confirmation-detail-row">
            <span>Service: </span>
            <strong>{booking.service}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Schedule: </span>
            <strong>{booking.schedule}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Date: </span>
            <strong>{booking.date}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Time: </span>
            <strong>{booking.time}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Duration: </span>
            <strong>{booking.duration}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Email: </span>
            <strong>{booking.email}</strong>
          </div>
        </div>

        <button
          type="button"
          className="booking-submit-button confirmation-home-button"
          onClick={onBackHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;