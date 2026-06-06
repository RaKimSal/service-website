import React from "react";

const ContactConfirmation = ({
  isOpen,
  contact,
  onClose,
  onBackHome,
}) => {
  if (!isOpen || !contact) {
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
        aria-labelledby="contact-confirmation-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="booking-close-button"
          onClick={onClose}
          aria-label="Close message confirmation"
        >
          ×
        </button>

        <div className="booking-heading confirmation-heading">
          <h2 id="contact-confirmation-title">
            Message Sent!
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
          Thank you for contacting IVY’S Cleaning Service.
          Your message has been successfully submitted.
        </p>

        <p className="confirmation-email-message">
          We will respond to you at{" "}
          <strong>{contact.email}</strong> as soon as
          possible.
        </p>

        <div className="confirmation-details">
          <div className="confirmation-detail-row">
            <span>Name:</span>
            <strong>{contact.name}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Email:</span>
            <strong>{contact.email}</strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Service:</span>
            <strong>
              {contact.service || "General Inquiry"}
            </strong>
          </div>

          <div className="confirmation-detail-row">
            <span>Message:</span>
            <strong>{contact.message}</strong>
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

export default ContactConfirmation;