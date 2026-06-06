import React, { useState } from "react";

import userIcon from "../assets/icons/usertrained.svg";
import emailIcon from "../assets/icons/envelope.svg";
import serviceIcon from "../assets/icons/tag.svg";
import messageIcon from "../assets/icons/pencilsquare.svg";
import phoneIcon from "../assets/icons/phoneoncall.svg";
import clockIcon from "../assets/icons/clock.svg";
import locationIcon from "../assets/icons/geoaltfill.svg";
import privacyIcon from "../assets/icons/satisfaction.png";

import "./ContactUs.css";

const ContactUs = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((previousContact) => ({
      ...previousContact,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSend === "function") {
      onSend(contact);
    }

    setContact({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div
      className="contactus-overlay"
      onClick={onClose}
    >
      <div
        className="contactus-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contactus-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contactus-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className="contactus-layout">
          <section className="contactus-form-panel">
            <h2 id="contactus-title">
              Send Us a Message
            </h2>

            <form
              className="contactus-form"
              onSubmit={handleSubmit}
            >
              <div className="contactus-row">
                <div className="contactus-input-group">
                  <img
                    src={userIcon}
                    alt=""
                    className="contactus-field-icon"
                    aria-hidden="true"
                  />

                  <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contactus-input-group">
                  <img
                    src={emailIcon}
                    alt=""
                    className="contactus-field-icon"
                    aria-hidden="true"
                  />

                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contactus-input-group">
                <img
                  src={serviceIcon}
                  alt=""
                  className="contactus-field-icon"
                  aria-hidden="true"
                />

                <select
                  name="service"
                  value={contact.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Service
                  </option>

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

                  <option value="General Inquiry">
                    General Inquiry
                  </option>
                </select>
              </div>

              <div className="contactus-message-group">
                <img
                  src={messageIcon}
                  alt=""
                  className="contactus-message-icon"
                  aria-hidden="true"
                />

                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="7"
                  required
                />
              </div>

              <button
                type="submit"
                className="contactus-submit"
              >
                <img
                  src={emailIcon}
                  alt=""
                  aria-hidden="true"
                />

                <span>Send Message</span>
              </button>

              <div className="contactus-privacy">
                <img
                  src={privacyIcon}
                  alt=""
                  aria-hidden="true"
                />

                <p>
                  We respect your privacy. Your information
                  will never be shared.
                </p>
              </div>
            </form>
          </section>

          <div
            className="contactus-divider"
            aria-hidden="true"
          />

          <section className="contactus-information">
            <div className="contactus-information-heading">
              <h2>Contact Information</h2>

              <span aria-hidden="true">✦</span>
            </div>

            <div className="contactus-information-list">
              <div className="contactus-information-item">
                <div className="contactus-icon-circle">
                  <img
                    src={phoneIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>(819)-230-5960</p>
                </div>
              </div>

              <div className="contactus-information-item">
                <div className="contactus-icon-circle">
                  <img
                    src={emailIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>ivys_cleaning@gmail.com</p>
                </div>
              </div>

              <div className="contactus-information-item">
                <div className="contactus-icon-circle">
                  <img
                    src={clockIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>Business Hours</h3>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="contactus-information-item">
                <div className="contactus-icon-circle">
                  <img
                    src={locationIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>Service Area</h3>
                  <p>
                    Proudly serving homes in Ottawa,
                    Barrhaven and Kanata area.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;