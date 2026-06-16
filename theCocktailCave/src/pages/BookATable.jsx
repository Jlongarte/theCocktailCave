import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./BookATable.css";

const BookATable = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    comment: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    // Redirección automática a Home después de 4 segundos
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <section className="reservation-section">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          /* --- FORMULARIO DE RESERVA  --- */
          <motion.div
            key="form"
            className="reservation-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title">Make a reservation</h1>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <label>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Your Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date*</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Time*</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Comment</label>
                <textarea
                  name="comment"
                  placeholder="Special requests, seating preferences, or notes."
                  rows="5"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-privacy">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                />
                <label htmlFor="privacy">
                  By submitting this form, you agree to our{" "}
                  <strong>Privacy Policy</strong>
                </label>
              </div>

              <button type="submit" className="reservation-submit-btn">
                Reserve a Table
              </button>
            </form>
          </motion.div>
        ) : (
          /* --- PANTALLA DE ÉXITO  --- */
          <motion.div
            key="success"
            className="reservation-success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="success-title">Reservation received</h1>
            <p className="success-subtitle">
              We’ve received your request and will contact <br />
              you shortly to confirm the details.
            </p>
            <button className="success-home-btn" onClick={() => navigate("/")}>
              Back Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookATable;
