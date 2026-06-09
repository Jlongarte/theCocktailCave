import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const imageSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageSectionRef,
    offset: ["start end", "center center"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section className="hero-main-wrapper">
      <div className="hero-text-block">
        <h1 className="hero-title">A bar in the heart of Paris</h1>

        <p className="hero-subtitle">
          A quiet place for evening drinks and conversation.
        </p>

        <div className="hero-btn-group">
          <button
            className="hero-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Book a Table
          </button>

          <button
            className="hero-btn-secondary"
            onClick={() => navigate("/menu-page")}
          >
            View Menu
          </button>
        </div>
      </div>

      <div ref={imageSectionRef} className="hero-image-block">
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="hero-image-wrapper"
        >
          <img
            src="/Crea_una_imagen_similar_a_202606091138.jpeg"
            alt="Cocktail Paris"
            className="hero-display-image"
          />

          <div className="hero-image-blur-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
