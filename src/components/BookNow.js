import React, { useState } from "react";

const BookNow = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [booking, setBooking] = useState({
    service: "House Cleaning",
    schedule: "One-time",
    date: "",
    time: "10:00 AM",
    duration: "3 hours",
    email: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBooking((previousBooking) => ({
      ...previousBooking,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onConfirm(booking);
  };

  return (
    <div
      className="booking-modal-overlay"
      onClick={onClose}
    >
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="booking-close-button"
          onClick={onClose}
          aria-label="Close booking form"
        >
          ×
        </button>

        <div className="booking-heading">
          <h2 id="booking-title">
            Quick Booking
          </h2>

          <span
            className="booking-sparkle"
            aria-hidden="true"
          >
            ✦
          </span>
        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
          <div className="booking-field">
            <label htmlFor="booking-service">
              Select Service
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ⌂
              </span>

              <select
                id="booking-service"
                name="service"
                value={booking.service}
                onChange={handleChange}
              >
                <option value="House Cleaning">
                  House Cleaning
                </option>

                <option value="Office Cleaning">
                  Office Cleaning
                </option>

                <option value="Party Cleaning">
                  Party Cleaning
                </option>

                <option value="Partial Deep Cleaning">
                  Partial Deep Cleaning
                </option>
              </select>
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-schedule">
              Schedule
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ☑
              </span>

              <select
                id="booking-schedule"
                name="schedule"
                value={booking.schedule}
                onChange={handleChange}
              >
                <option value="One-time">
                  One-time
                </option>

                <option value="Weekly">
                  Weekly
                </option>

                <option value="Bi-weekly">
                  Bi-weekly
                </option>

                <option value="Monthly">
                  Monthly
                </option>
              </select>
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-date">
              Date
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ▣
              </span>

              <input
                id="booking-date"
                type="date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-time">
              Time
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ◷
              </span>

              <select
                id="booking-time"
                name="time"
                value={booking.time}
                onChange={handleChange}
              >
                <option value="8:00 AM">
                  8:00 AM
                </option>

                <option value="9:00 AM">
                  9:00 AM
                </option>

                <option value="10:00 AM">
                  10:00 AM
                </option>

                <option value="11:00 AM">
                  11:00 AM
                </option>

                <option value="12:00 PM">
                  12:00 PM
                </option>

                <option value="1:00 PM">
                  1:00 PM
                </option>

                <option value="2:00 PM">
                  2:00 PM
                </option>

                <option value="3:00 PM">
                  3:00 PM
                </option>

                <option value="4:00 PM">
                  4:00 PM
                </option>

                <option value="5:00 PM">
                  5:00 PM
                </option>
              </select>
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-duration">
              Duration
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ◷
              </span>

              <select
                id="booking-duration"
                name="duration"
                value={booking.duration}
                onChange={handleChange}
              >
                <option value="1 hour">
                  1 hour
                </option>

                <option value="2 hours">
                  2 hours
                </option>

                <option value="3 hours">
                  3 hours
                </option>

                <option value="4 hours">
                  4 hours
                </option>

                <option value="5 hours">
                  5 hours
                </option>

                <option value="6 hours">
                  6 hours
                </option>

                <option value="7 hours">
                  7 hours
                </option>

                <option value="8 hours">
                  8 hours
                </option>
              </select>
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-email">
              Email
            </label>

            <div className="booking-input-wrapper">
              <span
                className="booking-field-icon"
                aria-hidden="true"
              >
                ✉
              </span>

              <input
                id="booking-email"
                type="email"
                name="email"
                value={booking.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="booking-submit-button"
          >
            <span
              className="booking-submit-icon"
              aria-hidden="true"
            >
              ▣
            </span>

            <span>Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;