import React from 'react';

import face1 from '../assets/img/face1.png';
import face2 from '../assets/img/face2.png';
import face3 from '../assets/img/face3.png';
import face4 from '../assets/img/face4.png';

import houseIcon from '../assets/icons/housecleaning.png';
import officeIcon from '../assets/icons/officecleaning.svg';
import partyIcon from '../assets/icons/partyassisting.png';
import partialIcon from '../assets/icons/partialdeepcleaning.svg';

import arrowIcon from '../assets/icons/arrowright.svg';
import sparkleIcon from '../assets/icons/sparkleaccent.png';

import biweeklyIcon from '../assets/icons/biweekly.png';
import monthlyIcon from '../assets/icons/calendarevent.svg';
import phoneIcon from '../assets/icons/phoneoncall.svg';

import quoteIcon from '../assets/icons/quote.svg';
import heartIcon from '../assets/icons/heartsatisfaction.svg';
import satisfactionIcon from '../assets/icons/satisfaction.png';
import ecoIcon from '../assets/icons/leafecofriendly.svg';
import backgroundIcon from '../assets/icons/backgroundchecked.svg';
import starIcon from '../assets/icons/starrating.svg';

const services = [
  {
    title: 'House Cleaning',
    description:
      'Complete home cleaning to keep your space fresh, healthy, and comfortable.',
    icon: houseIcon,
  },
  {
    title: 'Office Cleaning',
    description:
      'Complete office cleaning to keep your space fresh, healthy, and comfortable.',
    icon: officeIcon,
  },
  {
    title: 'Party Cleaning',
    description:
      'Complete party cleaning to keep your space fresh, healthy, and comfortable.',
    icon: partyIcon,
  },
  {
    title: 'Partial Deep Cleaning',
    description:
      'Complete deep cleaning to keep your space fresh, healthy, and comfortable.',
    icon: partialIcon,
  },
];

const schedules = [
  {
    title: 'Bi-weekly',
    subtitle: 'Every 2 weeks',
    description: 'Keep your place consistently clean',
    icon: biweeklyIcon,
  },
  {
    title: 'Monthly',
    subtitle: 'Once a month',
    description: 'Perfect for routine maintenance',
    icon: monthlyIcon,
  },
  {
    title: 'On Call',
    subtitle: 'When you need us',
    description: 'Flexible booking at your convenience',
    icon: phoneIcon,
  },
];

const Summary = () => {
  return (
    <section className="summary-section" id="services">
      <div className="summary-container">
        <div className="summary-main">
          <div className="services-column">
            <div className="summary-heading-row">
              <h2 className="summary-title">
                Our Services
                <img src={sparkleIcon} alt="" />
              </h2>

              <a href="#all-services" className="view-all-link">
                View All Services
                <img src={arrowIcon} alt="" />
              </a>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-content">
                    <div className="service-card-top">
                      <div className="service-icon-circle">
                        <img src={service.icon} alt="" />
                      </div>

                      <h3>{service.title}</h3>
                    </div>

                    <p>{service.description}</p>

                    <a href="#booking" className="learn-more-link">
                      Learn More
                      <img src={arrowIcon} alt="" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="schedule-column">
            <h2 className="schedule-title">
              Flexible Scheduling Options
            </h2>

            <div className="schedule-card">
              {schedules.map((schedule, index) => (
                <div className="schedule-option" key={schedule.title}>
                  <div className="schedule-icon-circle">
                    <img src={schedule.icon} alt="" />
                  </div>

                  <h3>{schedule.title}</h3>
                  <span>{schedule.subtitle}</span>
                  <p>{schedule.description}</p>

                  {index < schedules.length - 1 && (
                    <div className="schedule-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="summary-bottom">
          <div className="testimonial-summary">
            <img className="quote-icon" src={quoteIcon} alt="" />

            <div className="testimonial-copy">
              <p>
                Calm Home Cleaning is truly a life saver! They are punctual,
                detailed oriented, and leave my home spotless every time.
              </p>

              <div className="testimonial-footer">
                <span className="testimonial-author-name">- Deeba F.</span>

                <span className="testimonial-stars" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <img key={star} src={starIcon} alt="" />
                    ))}
                </span>
              </div>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="customer-summary">
            <div className="customer-faces">
              <img src={face1} alt="Customer" />
              <img src={face2} alt="Customer" />
              <img src={face3} alt="Customer" />
              <img src={face4} alt="Customer" />
            </div>

            <div className="customer-copy">
              <strong>Trusted by 500+</strong>
              <span>happy clients</span>
            </div>

            <img className="small-heart" src={heartIcon} alt="" />
          </div>

          <div className="summary-divider" />

          <div className="summary-benefit">
            <div className="benefit-icon-circle">
              <img src={satisfactionIcon} alt="" />
            </div>

            <div>
              <strong>100% Satisfaction</strong>
              <span>We are not happy unless you are.</span>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="summary-benefit">
            <div className="benefit-icon-circle">
              <img src={ecoIcon} alt="" />
            </div>

            <div>
              <strong>Eco-Friendly</strong>
              <span>Safe products for your home and family.</span>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="summary-benefit">
            <div className="benefit-icon-circle">
              <img src={backgroundIcon} alt="" />
            </div>

            <div>
              <strong>Background Checked</strong>
              <span>Reliable cleaners you can trust.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;