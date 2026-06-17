import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import "./Contact.css";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="contact-page">
      <Hero
        title="Contact Us"
        subtitle="General inquiries and details."
        imageSrc="/second-hero.webp"
        imageAlt="The Cocktail Cave - Contact"
        showButtons={false}
      />

      <section className="contact-info-section">
        <h2 className="info-main-title">Get in touch</h2>

        <motion.div
          className="info-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="info-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <h3>Address</h3>
            <p>The Swan Lane</p>
            <p>Dublin, Ireland</p>
          </motion.div>

          <motion.div
            className="info-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <h3>Open Hours</h3>
            <p>Weekdays: 6 PM – 12 AM</p>
            <p>Weekends: 6 PM – 2 AM</p>
          </motion.div>

          <motion.div
            className="info-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <h3>Contact</h3>
            <p>+353 1 234 5678</p>
            <p className="contact-email">hello@cocktailcave.com</p>
          </motion.div>

          <motion.div
            className="info-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
          >
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
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
