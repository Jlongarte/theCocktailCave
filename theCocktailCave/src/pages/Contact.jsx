import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="hero-overlay">
          <h2 className="hero-title">Contact Us</h2>
          <p className="hero-subtitle">General inquiries and details.</p>
        </div>
      </header>

      <section className="contact-info-section">
        <h2 className="info-main-title">Get in touch</h2>

        <div className="info-grid">
          <div className="info-column">
            <h3>Address</h3>
            <p>12 Rue Saint-Martin</p>
            <p>Central Paris, 75004</p>
          </div>

          <div className="info-column">
            <h3>Open Hours</h3>
            <p>Weekdays: 6 PM – 12 AM</p>
            <p>Weekends: 6 PM – 2 AM</p>
          </div>

          <div className="info-column">
            <h3>Contact</h3>
            <p>+33 1 45 67 89 01</p>
            <p className="contact-email">hello@afterhouse.com</p>
          </div>

          <div className="info-column">
            <h3>Socials</h3>

            <p>
              <a href="#facebook" className="social-link">
                Facebook
              </a>
            </p>

            <p>
              <a href="#instagram" className="social-link">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
