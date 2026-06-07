import React from "react";

import logo from "../assets/icons/logo.svg";
import instagramIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png";
import linkedinIcon from "../assets/icons/linkedin.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <a
          href="https://rakimsal.github.io/My-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="site-footer-logo-link"
        >
          <img
            src={logo}
            alt="Rachelle Kim Salazar logo"
            className="site-footer-logo"
          />
        </a>

        <div className="site-footer-right">
          <p className="site-footer-credit">
            Designed by: Rachelle Kim Salazar
          </p>

          <div className="site-footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instagramIcon}
                alt=""
                className="site-footer-social-icon"
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebookIcon}
                alt=""
                className="site-footer-social-icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinIcon}
                alt=""
                className="site-footer-social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;