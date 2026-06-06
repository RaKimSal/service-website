import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import "./Booking.css";

import bookingBackground from "../assets/img/banner.png";

import houseIcon from "../assets/icons/housecleaning.png";
import calendarIcon from "../assets/icons/calendar3.svg";
import phoneIcon from "../assets/icons/phoneoncall.svg";
import clockIcon from "../assets/icons/clock.svg";
import stopwatchIcon from "../assets/icons/stopwatch.svg";
import squareFillIcon from "../assets/icons/squarefill.svg";
import secureIcon from "../assets/icons/backgroundchecked.svg";

const services = [
  "House Cleaning",
  "Office Cleaning",
  "Party Cleaning",
  "Partial Deep Cleaning",
];

const schedules = [
  {
    value: "One-time",
    label: "One-time",
    icon: squareFillIcon,
  },
  {
    value: "Bi-weekly",
    label: "Bi-weekly",
    icon: calendarIcon,
  },
  {
    value: "Monthly",
    label: "Monthly",
    icon: calendarIcon,
  },
  {
    value: "On Call",
    label: "On Call",
    icon: phoneIcon,
  },
];

const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const durations = [
  {
    value: "1 hour",
    hours: 1,
  },
  {
    value: "2 hours",
    hours: 2,
  },
  {
    value: "3 hours",
    hours: 3,
  },
  {
    value: "4 hours",
    hours: 4,
  },
  {
    value: "5 hours",
    hours: 5,
  },
  {
    value: "6 hours",
    hours: 6,
  },
  {
    value: "7 hours",
    hours: 7,
  },
  {
    value: "8 hours",
    hours: 8,
  },
];

const Booking = ({ onConfirm }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [booking, setBooking] = useState({
    service: "House Cleaning",
    schedule: "One-time",
    date: "",
    time: "10:00 AM",
    duration: "2 hours",
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const selectedDuration = useMemo(() => {
    return (
      durations.find(
        (duration) =>
          duration.value === booking.duration
      ) || durations[0]
    );
  }, [booking.duration]);

  const total = selectedDuration.hours * 40;

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBooking((previousBooking) => ({
      ...previousBooking,
      [name]: value,
    }));
  };

  const handleScheduleChange = (schedule) => {
    setBooking((previousBooking) => ({
      ...previousBooking,
      schedule,
    }));
  };

  const formatDate = (dateValue) => {
    if (!dateValue) {
      return "Select a date";
    }

    const selectedDate = new Date(
      `${dateValue}T00:00:00`
    );

    return selectedDate.toLocaleDateString(
      "en-CA",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onConfirm === "function") {
      onConfirm({
        ...booking,
        total,
      });
    }
  };

  return (
    <main
      className="booking-form-page"
      style={{
        backgroundImage: `url(${bookingBackground})`,
      }}
    >
      <div
        className="booking-form-page-overlay"
        aria-hidden="true"
      />

      <section className="booking-intro-content">
        <p className="booking-intro-eyebrow">
          FAST, SIMPLE, AND CONVENIENT
        </p>

        <h1 className="booking-intro-title">
          Book Your
          <br />
          Cleaning in Minutes
        </h1>

        <p className="booking-intro-description">
          Fast, easy, and reliable. Choose your service,
          <br />
          pick a time that works for you, and we’ll take
          <br />
          care of the rest.
        </p>
      </section>

      <section className="booking-form-card">
        <form
          className="booking-form-left"
          onSubmit={handleSubmit}
        >
          <div className="booking-form-step">
            <div className="booking-step-number">
              1
            </div>

            <div className="booking-step-icon">
              <img src={houseIcon} alt="" />
            </div>

            <label
              className="booking-step-label"
              htmlFor="booking-page-service"
            >
              Choose Service
            </label>

            <select
              id="booking-page-service"
              name="service"
              value={booking.service}
              onChange={handleChange}
              className="booking-service-select"
            >
              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="booking-form-step booking-schedule-step">
            <div className="booking-step-number">
              2
            </div>

            <div className="booking-step-icon">
              <img src={calendarIcon} alt="" />
            </div>

            <div className="booking-schedule-content">
              <span className="booking-step-label">
                Choose Schedule
              </span>

              <div className="booking-schedule-options">
                {schedules.map((schedule) => (
                  <button
                    key={schedule.value}
                    type="button"
                    className={`booking-schedule-choice ${
                      booking.schedule ===
                      schedule.value
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleScheduleChange(
                        schedule.value
                      )
                    }
                  >
                    <img
                      src={schedule.icon}
                      alt=""
                    />

                    <span>{schedule.label}</span>

                    <span
                      className="booking-schedule-radio"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="booking-form-step booking-date-step">
            <div className="booking-step-number">
              3
            </div>

            <div className="booking-date-content">
              <span className="booking-step-label">
                Select Date, Time &amp; Duration
              </span>

              <div className="booking-date-fields">
                <div className="booking-page-input-wrapper">
                  <input
                    type="date"
                    name="date"
                    value={booking.date}
                    min={today}
                    onChange={handleChange}
                    required
                  />

                  <img
                    src={calendarIcon}
                    alt=""
                  />
                </div>

                <div className="booking-page-input-wrapper">
                  <select
                    name="time"
                    value={booking.time}
                    onChange={handleChange}
                  >
                    {times.map((time) => (
                      <option
                        key={time}
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </select>

                  <img src={clockIcon} alt="" />
                </div>

                <div className="booking-page-input-wrapper">
                  <select
                    name="duration"
                    value={booking.duration}
                    onChange={handleChange}
                  >
                    {durations.map((duration) => (
                      <option
                        key={duration.value}
                        value={duration.value}
                      >
                        {duration.value}
                      </option>
                    ))}
                  </select>

                  <img
                    src={stopwatchIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-step booking-contact-step">
            <div className="booking-step-number">
              4
            </div>

            <div className="booking-contact-content">
              <span className="booking-step-label">
                Your Contact Details
              </span>

              <div className="booking-contact-grid">
                <input
                  type="text"
                  name="fullName"
                  value={booking.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={booking.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={booking.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  autoComplete="tel"
                  required
                />

                <input
                  type="text"
                  name="address"
                  value={booking.address}
                  onChange={handleChange}
                  placeholder="Address"
                  autoComplete="street-address"
                  required
                />
              </div>

              <button
                type="submit"
                className="booking-confirm-button"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </form>

        <aside className="booking-summary-card">
          <h2>Your Booking Summary</h2>

          <div className="booking-summary-list">
            <div className="booking-summary-row">
              <img src={houseIcon} alt="" />
              <span>Service</span>
              <strong>{booking.service}</strong>
            </div>

            <div className="booking-summary-row">
              <img
                src={calendarIcon}
                alt=""
              />
              <span>Schedule</span>
              <strong>{booking.schedule}</strong>
            </div>

            <div className="booking-summary-row">
              <img
                src={calendarIcon}
                alt=""
              />
              <span>Date</span>
              <strong>
                {formatDate(booking.date)}
              </strong>
            </div>

            <div className="booking-summary-row">
              <img src={clockIcon} alt="" />
              <span>Time</span>
              <strong>{booking.time}</strong>
            </div>

            <div className="booking-summary-row">
              <img
                src={stopwatchIcon}
                alt=""
              />
              <span>Duration</span>
              <strong>{booking.duration}</strong>
            </div>
          </div>

          <div className="booking-summary-total">
            <span>Total</span>
            <strong>
              ${total.toFixed(2)} CAD
            </strong>
          </div>

          <div className="booking-security-note">
            <div className="booking-security-icon">
              <img src={secureIcon} alt="" />
            </div>

            <div>
              <strong>
                Secure &amp; Easy Booking
              </strong>

              <span>
                Your information is safe with us.
              </span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Booking;