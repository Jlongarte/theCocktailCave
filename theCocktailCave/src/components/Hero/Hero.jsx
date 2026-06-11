import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Hero.css";

const Hero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero Image",
  showButtons = true,
}) => {
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
        <h1 className="hero-title">{title}</h1>

        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {/* Los botones solo se renderizan si showButtons es true */}
        {showButtons && (
          <div className="hero-btn-group">
            <button className="btn" onClick={() => navigate("/book")}>
              Book a Table
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/menu-page")}
            >
              View Menu
            </button>
          </div>
        )}
      </div>

      <div ref={imageSectionRef} className="hero-image-block">
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="hero-image-wrapper"
        >
          <img src={imageSrc} alt={imageAlt} className="hero-display-image" />

          <div className="hero-image-blur-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
