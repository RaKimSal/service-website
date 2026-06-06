import React from "react";
import { Link } from "react-router-dom";

import bannerImage from "../assets/img/banner.png";

import calendarIcon from "../assets/icons/calendar3.png";
import arrowRightIcon from "../assets/icons/arrowright.svg";
import trustedIcon from "../assets/icons/backgroundchecked.svg";
import qualityIcon from "../assets/icons/sparklesquality.svg";
import trainedIcon from "../assets/icons/usertrained.svg";

const Banner = ({ onBookNowClick }) => {
  return (
    <section
      className="banner-section"
      id="home"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <p className="banner-eyebrow">
          PROFESSIONAL, RELIABLE, TRUSTED.
        </p>

        <h1 className="banner-title">
          A Cleaner Space,
          <br />
          A Calmer Day
        </h1>

        <p className="banner-description">
          Easy booking for home, office, party, and partial
          <br />
          deep cleaning. We handle the mess so you can
          <br />
          focus on what matters.
        </p>

        <div className="banner-buttons">
          <button
            type="button"
            className="banner-button banner-button-primary"
            onClick={onBookNowClick}
          >
            <img src={calendarIcon} alt="" />
            <span>Book Now</span>
          </button>

          <Link
            to="/services"
            className="banner-button banner-button-secondary"
          >
            <span>View Services</span>
            <img src={arrowRightIcon} alt="" />
          </Link>
        </div>

        <div className="banner-features">
          <div className="banner-feature">
            <div className="banner-feature-icon">
              <img src={trustedIcon} alt="" />
            </div>

            <div className="banner-feature-text">
              <strong>Trusted</strong>
              <span>&amp; Insured</span>
            </div>
          </div>

          <div className="banner-feature">
            <div className="banner-feature-icon">
              <img src={qualityIcon} alt="" />
            </div>

            <div className="banner-feature-text">
              <strong>Quality</strong>
              <span>You Can See</span>
            </div>
          </div>

          <div className="banner-feature">
            <div className="banner-feature-icon">
              <img src={trainedIcon} alt="" />
            </div>

            <div className="banner-feature-text">
              <strong>Trained</strong>
              <span>Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;