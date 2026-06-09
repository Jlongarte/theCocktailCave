import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";

const About = () => {
  const { scrollYProgress } = useScroll();

  const scaleImage = useTransform(scrollYProgress, [0.3, 0.8], [0.8, 1.2]);
  const opacityText = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section className="about-section">
      <div className="about-header">
        <motion.h2 style={{ opacity: opacityText }} className="about-title">
          Shaped by time <br /> slowly since 1990
        </motion.h2>

        <p className="about-subtitle">
          A neighborhood bar in Paris for drinks, <br />
          conversation, and relaxed moments.
        </p>
      </div>

      <div className="about-image-container">
        <motion.img
          style={{ scale: scaleImage }}
          src="../../../public/negroni.jpeg"
          alt="Cocktail drink"
          className="about-image"
        />
        <div className="about-image-blur-overlay"></div>
      </div>
    </section>
  );
};

export default About;
