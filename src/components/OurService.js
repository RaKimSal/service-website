import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./OurService.css";

import homeImage from "../assets/img/home.png";
import officeImage from "../assets/img/office.png";
import partialImage from "../assets/img/partial.png";
import partyImage from "../assets/img/party.png";

import houseIcon from "../assets/icons/housecleaning.png";
import officeIcon from "../assets/icons/officecleaning.svg";
import partialIcon from "../assets/icons/partialdeepcleaning.svg";
import partyIcon from "../assets/icons/partyassisting.png";

import biweeklyIcon from "../assets/icons/biweekly.png";
import monthlyIcon from "../assets/icons/calendar3.svg";
import phoneIcon from "../assets/icons/phoneoncall.svg";

const services = [
  {
    number: "01",
    id: "house-cleaning",
    title: "House Cleaning",
    description: `We provide complete and reliable house cleaning services designed to keep your home fresh, organized, comfortable, and welcoming. Our service includes carefully cleaning kitchens, bathrooms, bedrooms, living rooms, dining areas, floors, surfaces, and other commonly used spaces. We pay close attention to every detail, from wiping countertops and removing dust to vacuuming, mopping, sanitizing, and tidying each room. Whether you need regular maintenance or a one-time cleaning, our goal is to create a cleaner, healthier, and more relaxing home for you and your family.`,
    image: homeImage,
    icon: houseIcon,
    direction: "text-left",
  },
  {
    number: "02",
    id: "office-cleaning",
    title: "Office Cleaning",
    description: `We provide complete and reliable office cleaning services designed to keep your workplace clean, organized, professional, and welcoming for employees, clients, and visitors. Our service includes carefully cleaning desks, workstations, floors, restrooms, meeting rooms, reception areas, kitchens, break rooms, and other shared spaces. We also dust surfaces, empty waste bins, vacuum carpets, mop floors, sanitize frequently touched areas, and pay close attention to every detail. Whether you need regular maintenance or a one-time deep cleaning, our goal is to create a healthier, more comfortable, and productive working environment for everyone.`,
    image: officeImage,
    icon: officeIcon,
    direction: "text-right",
  },
  {
    number: "03",
    id: "partial-deep-cleaning",
    title: "Partial Deep Cleaning",
    description: `We provide focused and thorough deep cleaning services for specific areas of your home that need extra care and attention. This service includes detailed cleaning of selected spaces such as kitchens, bathrooms, bedrooms, floors, appliances, baseboards, cabinets, fixtures, and other frequently used areas. We carefully remove built-up dirt, dust, grease, stains, and grime from surfaces that may not be covered during regular cleaning. Whether you want to refresh one room or target several problem areas, our goal is to leave each selected space cleaner, fresher, healthier, and more comfortable.`,
    image: partialImage,
    icon: partialIcon,
    direction: "text-left",
  },
  {
    number: "04",
    id: "party-cleaning",
    title: "Party Cleaning",
    description: `We provide complete and dependable party cleaning services to help keep your event space clean, organized, comfortable, and ready for your guests. Our service includes cleaning kitchens, bathrooms, dining areas, floors, surfaces, furniture, reception areas, and other commonly used spaces before or after your celebration. We can remove trash, wipe tables, vacuum carpets, mop floors, sanitize frequently touched surfaces, and clean up spills, food crumbs, decorations, and other party-related messes. Whether you are hosting a birthday, holiday gathering, family celebration, or special event, our goal is to make the cleaning process easier and leave your space fresh and tidy.`,
    image: partyImage,
    icon: partyIcon,
    direction: "text-right",
  },
];

const schedules = [
  {
    title: "Bi-weekly",
    subtitle: "Every 2 weeks",
    icon: biweeklyIcon,
  },
  {
    title: "Monthly",
    subtitle: "Once a month",
    icon: monthlyIcon,
  },
  {
    title: "On Call",
    subtitle: "When you need us",
    icon: phoneIcon,
  },
];

const OurService = ({ onBookNowClick }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const sectionId = location.hash.substring(1);

    const timeoutId = setTimeout(() => {
      const section = document.getElementById(sectionId);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.hash]);

  return (
    <main className="services-page">
      <div className="services-body">
        {services.map((service) => (
          <article
            id={service.id}
            className={`cleaning-service-card ${service.direction}`}
            key={service.title}
          >
            <div className="cleaning-service-information">
              <div className="cleaning-service-icon">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                />
              </div>

              <div className="cleaning-service-copy">
                <div className="cleaning-service-title-row">
                  <h2>{service.title}</h2>
                  <span>{service.number}</span>
                </div>

                <p>{service.description}</p>

                <button
                  type="button"
                  onClick={onBookNowClick}
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="cleaning-service-photo">
              <img
                src={service.image}
                alt={`${service.title} service`}
              />
            </div>
          </article>
        ))}

        <section
          className="our-service-schedule-card"
          aria-label="Available scheduling options"
        >
          {schedules.map((schedule, index) => (
            <div
              className="our-service-schedule-option"
              key={schedule.title}
            >
              <div className="our-service-schedule-icon">
                <img src={schedule.icon} alt="" />
              </div>

              <div className="our-service-schedule-details">
                <h3>{schedule.title}</h3>
                <p>{schedule.subtitle}</p>
              </div>

              {index < schedules.length - 1 && (
                <span
                  className="our-service-schedule-line"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default OurService;